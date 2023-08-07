import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { MongoClient, ObjectId } from 'mongodb'

// Otros paquetes de rutas
import UserRouter from './routes/User.js'

const app = express()
const port = process.env.PORT | 4000

let cacheDB = null

const connectToDatabase = async (uri) => {
    if (cacheDB) return cacheDB

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const db = await client.db(new URL(uri).pathname.substring(1))
    cacheDB = db
    return db
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Importación de otras subrutas especificas
app.use('/user', UserRouter)

app.get('/', (_req, res) => {
    res.send('API Status: OK')
})

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`)
})
