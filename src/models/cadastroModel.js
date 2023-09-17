const connection = require('./connection');

const getViagens = async () => {
  const conn = await connection.connect();
  const [viagens] = await conn.execute('SELECT * FROM cadastro_viagens');
  return viagens;
};

const cadastrarViagem = async (viagem) => {
  const {
    carta_frete,
    data_carregamento, data_descarregamento, motorista, placa,
    local_carregamento, local_descarregamento, peso, valor_tonelada, valor_frete,
    comissao, km_inicial, km_final, despesas, gorgetas, adiantamentoI, adiantamentoII,
    observacao, posto_I, litros, valor, km, posto_II, litrosII, valorII, kmII,
    posto_III, litrosIII, valorIII, kmIII, posto_IIII, litrosIIII, valorIIII, kmIIII,
    arla, posto_arla
  } = viagem;

  const conn = await connection.connect();
  const query =
    'INSERT INTO cadastro_viagens (carta_frete, data_carregamento, data_descarregamento, motorista, placa,local_carregamento, local_descarregamento, peso, valor_tonelada, valor_frete,comissao, km_inicial, km_final, despesas, gorgetas, adiantamentoI, adiantamentoII,observacao, posto_I, litros, valor, km, posto_II, litrosII, valorII, kmII,posto_III, litrosIII, valorIII, kmIII, posto_IIII, litrosIIII, valorIIII, kmIIII,arla, posto_arla) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const [cadastroViagem] = await conn.execute(query, [
    carta_frete || null,
    data_carregamento || null,
    data_descarregamento || null,
    motorista || null,
    placa || null,
    local_carregamento || null,
    local_descarregamento || null,
    peso || null,
    valor_tonelada || null,
    valor_frete || null,
    comissao || null,
    despesas || null,
    km_inicial || null,
    km_final || null,
    gorgetas || null,
    adiantamentoI || null,
    adiantamentoII || null,
    observacao || null,
    posto_I || null,
    litros || null,
    valor || null,
    km || null,
    posto_II || null,
    litrosII || null,
    valorII || null,
    kmII || null,
    posto_III || null,
    litrosIII || null,
    valorIII || null,
    kmIII || null,
    posto_IIII || null,
    litrosIIII || null,
    valorIIII || null,
    kmIIII || null,
    arla || null,
    posto_arla || null
  ]);

  return cadastroViagem;
};


module.exports = {
  cadastrarViagem,
  getViagens
};
