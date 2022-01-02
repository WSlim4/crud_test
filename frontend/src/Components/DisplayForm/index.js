import React, { useState, useEffect, createRef  } from "react";
import { useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import { DialogTitle, DialogContent, TextField, CircularProgress } from '@mui/material';
import ClienteOperations from "../../Operations/ClienteOperations";
import ClienteSchema from "../../Schemas/clienteSchema";
import formatObject from "../../Utils/format_input";
import Swal from "sweetalert2";
import './styles.css';

export default function DisplayForm({ handleClose, fetchData, defaultUser = null }) {
    const clientes = useSelector((state) => state.clientes.value);
    
    const [isSubmitting, setSubmitting] = useState(false);

    const [inputErrors, setErrors] = useState({
        email: "",
        nome: "",
        'endereco.numero': ""
    })

    const [userData, setUserData] = useState({
        nome: "",
        cpf: "",
        celular: "",
        email: "",
        endereco: {
            numero: "",
            rua: "",
            bairro: "",
            cidade: ""
        }
    });

    useEffect(() => {
        if(defaultUser) {
            setUserData(defaultUser)
        }
    }, [defaultUser])

    const handleChange = (e) => {
        let { value, name} = e.target;
        let data = {...userData};

        if(inputErrors[name]) {
            let errors = {...inputErrors};
            errors[name] = "";
            setErrors(errors);
        }

        if(name.includes('.')) {
            name = name.split('.');
            let endereco = {...data.endereco}
            endereco[name[1]] = value;
            data.endereco = endereco;
        } else { 
            data[name] = value;
        }
        setUserData(data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const data = formatObject(userData);

        ClienteSchema.validate(data, { abortEarly: false }).then(async function(valid) {

            if(defaultUser) {
                await ClienteOperations.updateCliente(data);
            } else {
                await ClienteOperations.saveCliente(data);
            }

            fetchData(clientes.page);
        }).catch(function (err) {
            
            if(err.inner) {
                let errors = {...inputErrors};
                err.inner.forEach(e => {
                    if(e.path === 'endereco.numero') {
                        errors['endereco.numero'] = e.message;
                    } else {
                     errors[e.path] = e.message;
                    }
                });
           
                setSubmitting(false);
                setErrors(errors);
            } else {
                handleClose();
            }
            
        });
        

    }

    return (
        <>
            <DialogTitle>
                {defaultUser ? "Atualizar" : "Cadastrar"} cliente
            </DialogTitle>
            <DialogContent ref={createRef()} className="dialog">
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                    <div>
                    
                        <TextField 
                            required
                            placeholder="Nome *" 
                            name="nome" 
                            value={userData.nome} 
                            variant="outlined" 
                            onChange={handleChange}
                        />

                        <InputMask 
                            mask="(99)99999-9999" 
                            value={userData.celular} 
                            onChange={handleChange}>
                            {() => <TextField required placeholder="Celular *" name="celular"  variant="outlined" />}
                        </InputMask>

                        <TextField
                            style={{marginTop: inputErrors.email !== "" ? 24 : 0}}
                            placeholder="Rua" 
                            name="endereco.rua" 
                            value={userData.endereco.rua} 
                            variant="outlined" 
                            onChange={handleChange}
                        />
                        
                        <TextField 
                            placeholder="Cidade" 
                            name="endereco.cidade" 
                            value={userData.endereco.cidade} 
                            variant="outlined" 
                            onChange={handleChange}
                        />
                        
                       
                    </div>
                    <div>
                        <InputMask
                            mask="999.999.999-99" 
                            value={userData.cpf} 
                            onChange={handleChange}>
                                {() => <TextField required placeholder="Cpf *" name="cpf" variant="outlined"/>}
                        </InputMask>
                        <TextField
                            error={inputErrors.email !== ""}
                            required
                            placeholder="E-mail *" 
                            name="email" 
                            value={userData.email} 
                            variant="outlined" 
                            onChange={handleChange}
                            helperText={inputErrors.email}
                        />
                        <TextField 
                            placeholder="Bairro" 
                            name="endereco.bairro" 
                            value={userData.endereco.bairro} 
                            variant="outlined" 
                            onChange={handleChange}
                        />
                        <TextField
                            error={inputErrors['endereco.numero'] !== ""}
                            placeholder="Número" 
                            name="endereco.numero" 
                            value={userData.endereco.numero} 
                            variant="outlined" 
                            onChange={handleChange}
                            helperText={inputErrors['endereco.numero']}
                        />
                    </div>
                    </div>
                    <button 
                        type="submit"
                        >
                            {isSubmitting === true ? 
                                <CircularProgress size={18}/> : defaultUser ? "Atualizar" : "Salvar"}
                            </button>
                </form>
                
            </DialogContent>
        </>

    )
}