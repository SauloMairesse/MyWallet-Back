import db from "../../config/db.js";
import dayjs from 'dayjs'
import Joi from "joi";


const operationsJOI = Joi.object({
    value: Joi.required(),
    description: Joi.string().required(),
    type: Joi.string().required(), //mudar para 'deposito or debito
})

export async function operationsController(req, res){
    const {authorization} = req.header;
    const token = authorization?.replace('Bearer', '')
    if(!token) return res.sendStatus(401)

    const {value, description, type} = req.body

    const operationsOBJ = { value:value,
                            description:description,
                            type:type}
    const validationJOI = operationsJOI.validate(operationsOBJ, {abortEarly: false})
    if(validationJOI.error) return res.sendStatus(422)

    const session = await db.collections("sessions").findOne({token:token})
    if(!session){
        return res.sendStatus(401)
    }
    const user = await db.collections('users').findOne({_id: session.userId})
    
    if(user){
        const insertObj = { user: user.name,
                            value:value,
                            description: description,
                            data: dayjs().format('DD/MM'),
                            type: type  }
        try{
            await db.collections('operations').insertOne(insertObj)
            return res.send(201)
        }catch(err){
            console.log('error try operationsController: ', err)
            return res.send(500)
        }
    }
    return res.send('erro na func operationsController: ', 5000)   
}