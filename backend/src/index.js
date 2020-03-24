const express = require("express");
const cors = require('cors');
const routes = require("./routes");

const app = express();
app.use(cors());
// Ex: quem poredia acessa minha apicação
// app.use(cors({
//   origin: 'http://meuapp.com'
// }))
app.use(express.json());

app.use(routes);

app.listen(3333);

console.log('Server is Running');

/**
 * Rota  Recursos
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Prâmetros nomeados enviados na rota após "?" (FIltros, paginação)
 * Route Prams: Parâmetros utilizados para indentificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsorf SQL Server
  * NoSQL: MOngoDB, CouchDB e etc ...
  */

/**
 * Driver: SELECT  * FROM users
 * Query Builder: table('users').select('*').where()
 */





