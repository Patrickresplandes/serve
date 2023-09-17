const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

// Configuração do CORS - Defina isso antes das rotas
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}));

app.use(express.json());
app.use(router);

module.exports = app;
