import express from "express"
import { PrismaClient } from '@prisma/client'

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

router.post('/create', async (req, res, next) => {
    console.log(req.body, '**************')
    try {
        const { email, password } = req.body

        if (email && password) {
            const newUser = await prisma.user.create({
                data: {
                    plantas: [],
                    ...req.body
                }
            })
            res.json({ newUser })
        } else {
            res.sendStatus(500)
        }
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

// Falta update

export default router