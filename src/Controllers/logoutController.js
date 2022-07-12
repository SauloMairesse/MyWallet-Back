import { TopologyDescriptionChangedEvent } from "mongodb";
import db from "../../config/db.js";

export async function logoutController(req, res){
    const {token} = req.body

    try{
        console.log('pre tokenExist')
        const tokenExist = await db.collection('sessions').findOne({token:token})
        console.log('token existe: ', tokenExist)
        if(tokenExist){
            console.log('dentro do if')
            await db.collection('sessions').deleteOne({token:token})
            console.log('vai lancar a braba')
            return res.send(201)
        }        
    }catch(err){
        console.log('erro logout: ', err)
        return res.send(500)
    }
}