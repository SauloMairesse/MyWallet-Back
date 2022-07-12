import db from "../../config/db.js";
import dayjs from 'dayjs'

export async function depositeController(req, res){
    const {authorization} = req.header;
    const token = authorization?.replace('Bearer', '')
    const {value, description} = req.body

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
                            type:'deposit'}
        try{
            await db.collections('deposits').insertOne(insertObj)
            return res.send(201)
        }catch(err){
            console.log('error depositeController: ', err)
            return res.send(500)
        }
    }
    return res.send('erro na func deposito: ', 5000)   
}