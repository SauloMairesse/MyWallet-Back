import db from "../../config/db.js";
import dayjs from 'dayjs'

export async function operationsController(req, res){
    const {authorization} = req.header;
    const token = authorization?.replace('Bearer', '')
    const {value, description, type} = req.body

    if(!token) return res.sendStatus(401)

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