import db from "../../config/db";
import bcrypt from 'bcrypt'

export async function registerController(req, res){
    const {name, email, password, confirmPassword} = req.body
    try{
        const userAlreadyExist = await db.collection('users').findOne({email: email})
        if(userAlreadyExist && password === confirmPassword){
            res.send('user already exist or Password != confirmPassword')
        }
        const PWbcryprt = bcrypt.hashSync(password, 10)
        const objUser = {
            name: name,
            email: email,
            password: PWbcryprt
        }
        await db.collection('users').insertOne({...objUser})
        res.sendStatus(201)
    }catch(err){
        console.log('err registerController:', err)
        res.sendSatus(404)
    }
}