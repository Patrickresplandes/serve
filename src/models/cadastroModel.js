const connection = require('./connection');

const cadastro = async (cadastro) =>{
  const {	carta_frete,data_carregamento,
    data_descarregamento,motorista ,placa ,local_carregamento,
    local_descarregamento ,peso ,valor_tonelada ,valor_frete,
    comissao ,
    despesa ,
    km_inicial, 
    km_final ,
    gorjetas ,
    adiantamentoI, 
    adiantamentoII, 
    observacao ,
    posto ,
    posto_arla, 
    litros ,km } = cadastro;

  const query = 'INSERT INTO controle_viagens (carta_frete, data_carregamento, data_descarregamento ,motorista ,placa ,local_carregamento ,local_descarregamento ,peso ,valor_tonelada ,valor_frete ,comissao ,despesa ,km_inicial , km_final ,gorjetas ,adiantamentoI ,adiantamentoII ,observacao ,posto ,posto_arla ,litros ,km) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  const conn = await connection;
  const [cadastroViagem] =  await conn.execute(query,
    [carta_frete,data_carregamento,
    data_descarregamento,motorista ,placa ,local_carregamento,
    local_descarregamento ,peso ,valor_tonelada ,valor_frete,
    comissao ,
    despesa ,
    km_inicial, 
    km_final ,
    gorjetas ,
    adiantamentoI, 
    adiantamentoII, 
    observacao ,
    posto ,
    posto_arla, 
    litros ,km]);
    return cadastroViagem;
};

module.exports = {
    cadastro
};