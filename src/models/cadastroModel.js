const connection = require('./connection');

const cadastro = async () =>{
  const query = '';
  const [cadastroViagem] =  await connection.execute(query,[]);
    return cadastro;
};

module.exports = {
    cadastro
};