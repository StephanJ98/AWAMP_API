import express from "express"
import { PrismaClient } from '@prisma/client'

import bcrypt from 'bcrypt'
const saltRounds = 5

const prisma = new PrismaClient()
const router = express.Router()

router.get('/get/:email', async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.params.email
            }
        })

        res.json({ user })
    } catch (error) {
        next(error.message)
    }
})

router.post('/login', async (req, res, next) => {
    try {

        const { email, password } = await req.body

        const passDB = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                password: true
            }
        })

        if (bcrypt.compareSync(password, passDB.password)) res.sendStatus(200)
        else res.sendStatus(401)
    } catch (error) {
        next(error.message)
    }
})

router.post('/register', async (req, res, next) => {
    try {
        const { email, password } = await req.body
        const hashed = bcrypt.hashSync(password, saltRounds)

        await prisma.user.create({
            data: {
                email: email,
                password: hashed
            }
        })
        res.sendStatus(200)
    } catch (error) {
        next(error.message)
    }
})

router.delete('/delete/:email', async (req, res, next) => {
    try {
        await prisma.user.delete({
            where: {
                email: req.params.email
            }
        })

        res.sendStatus(200)
    } catch (error) {
        next(error.message)
    }
})

export default router