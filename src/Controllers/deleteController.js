import db from "../../config/db.js";
import dayjs from 'dayjs'

export async function deleteController(req, res){
    const {authorization} = req.header;
    const token = authorization?.replace('Bearer', '')
    const {idOPeration} = req.body

    if(!token) return res.sendStatus(401)

    const session = await db.collections("sessions").findOne({token: token})
    if(!session){
        return res.sendStatus(401)
    }
    const user = await db.collections('users').findOne({_id: session.userId})
    if(user){
        try{
            await db.collections('operations').deleteOne({_id: idOPeration})
            return res.sendStatus(201)
        }catch(err){
            console.log('error deleteController: ', err)
            return res.sendStatus(500)
        }
    }
    return res.send('erro na func delete: ', 5000)
}
