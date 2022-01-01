const formatObject = (object) => {
    let obj = {...object};
    
    obj.cpf = obj.cpf.replace(/[^a-zA-Z0-9 ]/g, "");
    obj.celular = obj.celular.replace(/[^a-zA-Z0-9 ]/g, "");

    return obj;
}

export default formatObject;