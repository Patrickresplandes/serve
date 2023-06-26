const connection = require('./connection');

const getViagens = async () => {
  const conn = await connection.connect();
  const [viagens] = await conn.execute('SELECT * FROM controle_viagens');
  return viagens;
};

const cadastrarViagem = async (viagem) => {
  const {
    carta_frete,
    data_carregamento,
    data_descarregamento,
    motorista,
    placa,
    local_carregamento,
    local_descarregamento,
    peso,
    valor_tonelada,
    valor_frete,
    comissao,
    despesa,
    km_inicial,
    km_final,
    gorjetas,
    adiantamentoI,
    adiantamentoII,
    observacao,
    posto,
    posto_arla,
    litros,
    km
  } = viagem;

  const conn = await connection.connect();
  const query =
    'INSERT INTO controle_viagens (carta_frete, data_carregamento, data_descarregamento, motorista, placa, local_carregamento, local_descarregamento, peso, valor_tonelada, valor_frete, comissao, despesa, km_inicial, km_final, gorjetas, adiantamentoI, adiantamentoII, observacao, posto, posto_arla, litros, km) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const [cadastroViagem] = await conn.execute(query, [
    carta_frete || null,
    data_carregamento || null,
    data_descarregamento || null,
    motorista,
    placa || null,
    local_carregamento || null,
    local_descarregamento || null,
    peso || null,
    valor_tonelada || null,
    valor_frete || null,
    comissao || null,
    despesa || null,
    km_inicial || null,
    km_final || null,
    gorjetas || null,
    adiantamentoI || null,
    adiantamentoII || null,
    observacao || null,
    posto || null,
    posto_arla || null,
    litros || null,
    km || null
  ]);

  return cadastroViagem;
};

module.exports = {
  cadastrarViagem,
  getViagens
};
