
const cadastroModel = require('../models/cadastroModel');

const cadastroViagem = async (request, reponse) => {
    const cadastro = await cadastroModel.cadastrarViagem(request.body);
    return reponse.status(201).json(cadastro);
};

const controleViagem = async (request, response) => {
    const viagem = await cadastroModel.getViagens();
    return response.status(200).json(viagem)
}

module.exports = {
    cadastroViagem,
    controleViagem
}; 