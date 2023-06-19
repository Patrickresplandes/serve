const express = require('express');
const postController = require('./controller/cadastroController')
const cadastroMiddleware = require('./middleware/cadastroMiddleware')
const router = express.Router();

router.post('/cadastro', cadastroMiddleware.validateBody, postController.cadastroViagem);
router.get('/controle');

module.exports = router