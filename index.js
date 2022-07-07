import express, {json} from 'express'
import { MongoClient } from 'mongodb';
import cors from 'cors'
import chalk from 'chalk'


const app = express(); // cria servidor
app.use(cors())
app.use(json())   ///MIDDLEWARE - JASON PARSER

// Criando a config da conexao
const db = null
const mongoClient = new MongoClient('mongodb://localhost:27017') 
const promise = mongoClient.connect()

console.log('cheguei aqui')
promise.then(() => {
  db = mongoClient.db("test")
  console.log(chalk.blue.bold('Banco de dados conectado com sucesso'))
})
promise.catch(e => console.log(chalk.red.bold('mano, nao rolou '), e))

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(chalk.bold.green(`Servidor em pé na porta ${port}!`));
})