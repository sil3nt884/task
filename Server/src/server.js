import express from 'express'
import bodyParser from "body-parser";
const app = express()
// @ts-ignore
import * as db from './db.js'
import cors from 'cors'


(async () => {
    await  db.readData();
    app.use(cors())
    app.use(bodyParser.json())
    app.use(express.static('../build'))

    app.post('/addDinner', async (req, res)=> {
        const body = req.body
        if(!body) {
            return res.status(401).send("no body given")
        }
        await db.addDinnerItems(body)
        db.save()
        return res.status(200).send('OK')
    })


    app.get('/removeDinner/:id', async (req, res)=> {
        const {id} = req.params
        if(!id) {
            return res.status(401).send("no body given")
        }
        await db.removeDinner(id)
        db.save()
        return res.status(200).send('OK')
    })



    app.post('/addTask', async (req, res)=> {
        const body = req.body
        if(!body) {
            return res.status(401).send("no body given")
        }
        await db.addTask(body)
        db.save()
        return res.status(200).send('OK')
    })

    app.get("/timetable",async (req, res) => {
        const data = await  db.generateTasks()
        console.log(data)
        return res.status(200).send(JSON.stringify(data))
    })



    app.get("/dinner", async (req, res) => {
        const data = await  db.getData()
        return res.status(200).send(JSON.stringify(data.dinners))
    })

    app.listen(3001)

})()



console.log("server started")
