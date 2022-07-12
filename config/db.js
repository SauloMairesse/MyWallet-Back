import { MongoClient } from "mongodb";
import chalk from "chalk";

// Criando a config da conexao
let db = null
try{
  const mongoClient = new MongoClient('mongodb://localhost:27017')
  await  mongoClient.connect()
  db = mongoClient.db("myWallet")
  console.log(chalk.blue.bold('Banco de dados conectado com sucesso'))
}catch(error){
  console.log(chalk.bold.red('error db'))
}

// let db = null
// const mongoClient = new MongoClient('mongodb://localhost:27017') 
// const promise = mongoClient.connect()

// promise.then(() => {
//   db = mongoClient.db("test")
//   console.log(chalk.blue.bold('Banco de dados conectado com sucesso'))
// })
// promise.catch(e => console.log(chalk.red.bold('mano, nao rolou '), e))

export default db