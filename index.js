import express, {json} from 'express'
import cors from 'cors'

const app = express(); // cria servidor
app.use(cors())
app.use(json())

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(chalk.bold.green(`Servidor em pé na porta ${port}!`));
})