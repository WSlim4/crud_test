const formatObject = (object) => {
    let obj = {...object};
    let endereco = {...obj.endereco};
    endereco.numero = endereco.numero === "" ? 0 : endereco.numero;
    obj.endereco = endereco;
    obj.cpf = obj.cpf.replace(/[^a-zA-Z0-9 ]/g, "");
    obj.celular = obj.celular.replace(/[^a-zA-Z0-9 ]/g, "");

    return obj;
}

export default formatObject;