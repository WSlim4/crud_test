import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { DialogTitle, DialogContent, TextField } from '@mui/material';
import ClienteOperations from "../../Operations/ClienteOperations";
import './styles.css';

export default function DisplayForm() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(ClienteOperations.saveCliente(userData));
    }

    return (
        <>
            <DialogTitle>
                Cadastrar cliente
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
                    <button type="submit">Salvar</button>
                </form>
                
            </DialogContent>
        </>

    )
}