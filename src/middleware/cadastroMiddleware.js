const validateBody = (request, response, next) => {
    const {body} = request;

    next();
};

module.exports = {
    validateBody
}