import "dotenv/config"
import express from "express"

import UserRoutes from './routes/User.js'
import PlantRoutes from './routes/Plants.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', UserRoutes)
app.use('/plants', PlantRoutes)

app.get('/', (_req, res) => {
    res.send('Todo parece correcto')
})

app.listen(PORT, () => {
    console.log(`App on port ${PORT}`)
})