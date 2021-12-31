import React, { useState, useEffect  } from "react";
import { useDispatch } from 'react-redux';
import { DialogTitle, DialogContent, TextField } from '@mui/material';
import ClienteOperations from "../../Operations/ClienteOperations";
import './styles.css';

export default function DisplayForm({ fetchData, defaultUser = null }) {
    const dispatch = useDispatch();

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

        if(defaultUser) {
            await ClienteOperations.updateCliente(userData);
        } else {
            await ClienteOperations.saveCliente(userData);
        }

        fetchData();
       
    }

    return (
        <>
            <DialogTitle>
                {defaultUser ? "Atualizar" : "Cadastrar"} cliente
            </DialogTitle>
            <DialogContent className="dialog">
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                    <div>
                        <TextField placeholder="Nome" name="nome" value={userData.nome} variant="outlined" onChange={handleChange}/>
                        <TextField placeholder="Cpf" name="cpf" value={userData.cpf} variant="outlined" onChange={handleChange}/>
                        <TextField placeholder="Celular" name="celular" value={userData.celular} variant="outlined" onChange={handleChange}/>
                        <TextField placeholder="E-mail" name="email" value={userData.email} variant="outlined" onChange={handleChange}/>
                    </div>
                    <div>
                        <TextField placeholder="Número" name="endereco.numero" value={userData.endereco.numero} variant="outlined" onChange={handleChange}/>
                        <TextField placeholder="Rua" name="endereco.rua" value={userData.endereco.rua} variant="outlined" onChange={handleChange}/>
                        <TextField placeholder="Bairro" name="endereco.bairro" value={userData.endereco.bairro} variant="outlined" onChange={handleChange}/>
                        <TextField placeholder="Cidade" name="endereco.cidade" value={userData.endereco.cidade} variant="outlined" onChange={handleChange}/>
                    </div>
                    </div>
                    <button type="submit">{defaultUser ? "Atualizar" : "Salvar"}</button>
                </form>
                
            </DialogContent>
        </>

    )
}