import express from "express"
import 'dotenv/config'
const router = express.Router()

router.get('/', (req,res) => {
    res.send("User route is displaying data")
})

export default router