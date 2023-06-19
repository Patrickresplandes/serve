const cadastroModel = require('../models/cadastroModel');

const cadastroViagem = async (request, reponse) => {
    const cadastro = await cadastroModel.cadastro(request.body);
    return reponse.status(201).json(cadastro);
};


module.exports = {
    cadastroViagem
}; 