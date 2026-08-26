import db from "../config/database.js"

export const creatUser = async (req,res) => {
    const {nome, email, cpf, senha, logradouro, numero, bairro, estado, cidade} = req.body;

    //=========================
    // VALIDAÇÃO
    //=========================

}