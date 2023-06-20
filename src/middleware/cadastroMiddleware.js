const validateBody = (request, response, next) => {
    const {body} = request;

    if(body.motorista === undefined){
        return response.status(400).json({message: 'motorista obrigatorio'});
    }
    if(body.motorista === ''){
        return response.status(400).json({message: 'campo motorista vazio, favor preencher'})
    }

    next();
};

module.exports = {
    validateBody
}