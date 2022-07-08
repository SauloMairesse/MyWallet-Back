import express, {json} from 'express'
import cors from 'cors'
import chalk from 'chalk'
import dotenv from 'dotenv'
import indexRouter from './src/Routers/indexRouter.js';

const app = express(); // cria servidor
app.use(cors())
app.use(json())   ///MIDDLEWARE - JASON PARSER
dotenv.config()

//Routas
app.use(indexRouter)

//configuracao da porta 
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(chalk.bold.green(`Servidor em pé na porta ${port}!`));
})
