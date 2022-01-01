import React, { useState, useEffect, createRef  } from "react";
import { useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import { DialogTitle, DialogContent, TextField, Input } from '@mui/material';
import ClienteOperations from "../../Operations/ClienteOperations";
import './styles.css';

export default function DisplayForm({ fetchData, defaultUser = null }) {
    const clientes = useSelector((state) => state.clientes.value);

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
    }, [])

    const handleChange = (e) => {
        let { value, name} = e.target;
        let data = {...userData};

        if(name.includes('.')) {
            name = name.split('.');
            data[name[0]][name[1]] = value
        } else { 
            data[name] = value;
        }

        setUserData(data);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        /*if(defaultUser) {
            await ClienteOperations.updateCliente(userData);
        } else {
            await ClienteOperations.saveCliente(userData);
        }

        fetchData(clientes.page);*/
        console.log("USER_DATA", userData);
       
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
                            placeholder="Nome" 
                            name="nome" 
                            value={userData.nome} 
                            variant="outlined" 
                            onChange={handleChange}
                        />

                        <InputMask 
                            mask="(99)99999-9999" 
                            value={userData.celular} 
                            onChange={handleChange}>
                            {() => <TextField placeholder="Celular" name="celular"  variant="outlined" />}
                        </InputMask>

                        <TextField 
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
                                {() => <TextField placeholder="Cpf" name="cpf" variant="outlined"/>}
                        </InputMask>
                        <TextField 
                            placeholder="E-mail" 
                            name="email" 
                            value={userData.email} 
                            variant="outlined" 
                            onChange={handleChange}
                        />
                        <TextField 
                            placeholder="Bairro" 
                            name="endereco.bairro" 
                            value={userData.endereco.bairro} 
                            variant="outlined" 
                            onChange={handleChange}
                        />
                        <TextField 
                            placeholder="Número" 
                            name="endereco.numero" 
                            value={userData.endereco.numero} 
                            variant="outlined" 
                            onChange={handleChange}
                        />
                    </div>
                    </div>
                    <button type="submit">{defaultUser ? "Atualizar" : "Salvar"}</button>
                </form>
                
            </DialogContent>
        </>

    )
}