import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.PORT | 3000

import UserRouter from './routes/User.js'

app.use('/user', UserRouter)

app.get('/', (_req, res) => {
    res.send('API Status: OK')
})

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`)
})
