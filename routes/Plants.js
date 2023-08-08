import express from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post('/create', async (req, res, next) => {
    try {
        const userEmail = req.body.email

        const userDB = await prisma.user.findUnique({
            where: {
                email: userEmail
            },
            select: {
                id: true
            }
        })

        await prisma.plant.create({
            data: {
                userId: userDB.id,
                name: req.body.name,
                species: req.body.species,
                description: req.body.description,
                soil: req.body.soil,
                temperature: req.body.temperature,
                sun: req.body.sun,
                water: req.body.water,
                multiplication: req.body.multiplication,
                image_url: req.body.image_url
            }
        })

        res.sendStatus(200)

    } catch (error) {
        next(error.message)
    }
})

router.get('/all', async (_req, res, next) => {
    try {
        const allPlants = await prisma.plant.findMany()

        res.json({ allPlants })
    } catch (error) {
        next(error.message)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const plant = await prisma.plant.findUnique({
            where: {
                id: req.params.id
            }
        })

        res.json({ plant })
    } catch (error) {
        next(error.message)
    }
})

router.delete('/delete/:id', async (req, res, next) => {
    try {
        await prisma.plant.update({
            where: {
                id: req.params.id
            }
        })

        res.sendStatus(200)
    } catch (error) {
        next(error.message)
    }
})

export default router