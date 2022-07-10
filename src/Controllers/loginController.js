import db from "../../config/db.js"
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid';

export async function loginController(req, res){
    const {email, password} = req.body
    try{
        const user = await db.collection('users').findOne({email: email})
        if(user && bcrypt.compareSync(senha, user.password)){
            const token = uuid.v4();
            await db.collection("sessions").insertOne({userId: user._id, token: token})
            
            const objUser = {
                name: user.name,
                token: token
            }
            res.send(objUser)
        }
    }catch(error){
        console.log('Error LoginController: ', error)
        res.send('Deu erro LoginController')
    }
}