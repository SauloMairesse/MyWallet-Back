import db from "../../config/db.js";

export async function listOpController(req, res){
    const {authorization} = req.header;
    const token = authorization?.replace('Bearer', '')

    if(!token) return res.sendStatus(401)

    const session = await db.collections("sessions").findOne({token:token})
    if(!session){
        return res.sendStatus(401)
    }
    const user = await db.collections('users').findOne({_id: session.userId})
    if(user){
        try{
            const listOperations = await db.collections('operations').find().toArray()
            return res.status(201).send(listOperations)
        }catch(err){
            console.log('error operationsController: ', err)
            return res.send(500)
        }
    }
    return res.send('erro na func operations: ', 5000)   
}
