import React from "react";
import { useSelector } from "react-redux";
import { Dialog } from '@mui/material';
import DisplayInfo from "../DisplayInfo";
import DisplayForm from "../DisplayForm";
import './styles.css';

export default function DialogComponent({ handleClose, open, operation }) {
    const user = useSelector((state) => state.clientes.current);

    const components = {
        info: <DisplayInfo user={user} />,
        add: <DisplayForm />
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            {components[operation]}
        </Dialog>
    )
}