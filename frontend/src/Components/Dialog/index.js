import React from "react";
import { useSelector } from "react-redux";
import { Dialog } from '@mui/material';
import DisplayInfo from "../DisplayInfo";
import DisplayForm from "../DisplayForm";
import './styles.css';

export default function DialogComponent({ fetchData, handleClose, open, operation }) {
    const user = useSelector((state) => state.clientes.current);

    const components = {
        show: <DisplayInfo user={user} />,
        add: <DisplayForm fetchData={fetchData} />,
        edit: <DisplayForm fetchData={fetchData} defaultUser={user} />
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            {components[operation]}
        </Dialog>
    )
}