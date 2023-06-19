const validateBody = (request, response, next) => {
    const {body} = request;

    if(body.title === undefined){
        return response.status(400).json({message: 'numero da carta obrigatorio'});
    }
    if(body.title === ''){
        return response.status(400).json({message: 'numero da carta vazio, favor preencher'})
    }
    next();
};

module.exports = {
    validateBody
}