const app = require('./app');
require('dotenv').config();

const connection = require('./models/connection');
  

connection.connect().then(() => {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
