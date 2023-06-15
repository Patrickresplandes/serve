const connection = require('./connection');

const postAll = () =>{
     const user = connection.execute('SELECT * FROM usuarios');
};

module.exports = {
    postAll
};