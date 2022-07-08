import db from "../../config/db.js"

export async function insertTestController (req, res){
    try{
        await db.collection("testCollection").insertOne({firstTest:"keep first test"})
        await db.collection("testCollection").insertOne({secondTest:"keep second test"})
        
        res.send('LOOK TEST COLLECTION')
  
      } catch{res.send(`Error`)}
  }

export async function findTestController (req, res) {
    try {
      const collectionTest = await db.collection('testCollection').find().toArray()
      const firstTest = await db.collection('testCollection').findOne({firstTest:"keep first test"})
  
      const objSend = {
        collectionTest,
        firstTest
      }
      res.send(objSend)
    } catch (error) {
        console.log(error)
        res.send(`erro FindTestController: ${error}`)
    }
  }