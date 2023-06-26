const express = require('express');
const postController = require('./controller/cadastroController')
const getController = require('./controller/cadastroController')
const cadastroMiddleware = require('./middleware/cadastroMiddleware')
const router = express.Router();

router.post('/cadastro', cadastroMiddleware.validateBody, postController.cadastroViagem);
router.get('/controle', getController.controleViagem);

module.exports = router