import db from "../../config/db.js"

export async function criarbanco (req, res){
    try{
        await db.collection("users").insertOne({firstTest:"keep first test"})
        
        res.send('LOOK TEST COLLECTION')
  
      } catch{res.send(`Error`)}
  }