import db from "../../config/db.js"
import bcrypt from 'bcrypt'
import Joi from "joi"

const registerJOI = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
})

export async function registerController(req, res){
    const {name, email, password, confirmPassword} = req.body

    const registerOBJ = {   email:email,
                            password:password}
    const validationJOI = registerJOI.validate(registerOBJ, {abortEarly: false})
    if(validationJOI.error) return res.sendStatus(422)

    try{
        const userAlreadyExist = await db.collection('users').findOne({email: email})
        if(!userAlreadyExist && password === confirmPassword){
            return res.send('user already exist or Password != confirmPassword')
        }
        const PWbcryprt = bcrypt.hashSync(password, 10)
        const objUser = {
            name: name,
            email: email,
            password: PWbcryprt
        }
        console.log('salvando usuario')
        await db.collection('users').insertOne({...objUser})
        res.sendStatus(201)
    }catch(err){
        console.log('err registerController:', err)
        res.send(404)
    }
}