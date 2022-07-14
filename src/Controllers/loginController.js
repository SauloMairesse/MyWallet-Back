import db from "../../config/db.js"
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid';
import Joi from "joi";

const loginJOI = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

export async function loginController(req, res){
    const {email, password} = req.body

    const loginOBJ = {  email:email,
                        password:password}
    const validationJOI = loginJOI.validate(loginOBJ, {abortEarly: false})
    if(validationJOI.error) return res.sendStatus(422)

    try{
        console.log('pre db.users')
        const user = await db.collection('users').findOne({email: email})
        console.log("pos db.users")
        if(user && bcrypt.compareSync(password, user.password)){
            const token = uuid();
            await db.collection("sessions").insertOne({userId: user._id, token: token})
            
            const objUser = {
                name: user.name,
                token: token
            }
            res.send(objUser)
        }
    }catch(error){
        console.log('Error LoginController: ', error)
        return res.send('Deu erro LoginController')
    }
}