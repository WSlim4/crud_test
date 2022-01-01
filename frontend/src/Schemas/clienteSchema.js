import * as yup from 'yup';

const schema = yup.object().shape({
    nome: yup.string().required(),
    cpf: yup.string().required('Campo obrigatório'),
    celular: yup.string().required('Campo obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    endereco: yup.object().shape({
        numero: yup.number().typeError('Campo do tipo numérico'),
        rua: yup.string(),
        bairro: yup.string(),
        cidade: yup.string()
    }) 
});

export default schema;