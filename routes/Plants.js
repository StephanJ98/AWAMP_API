import express from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post('/create', async (req, res, next) => {
    try {
        console.log(req.body, '************')
        const newPlant = await prisma.plant.create({
            data: {
                ...req.body
            }
        })

        res.json({ newPlant })
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

router.patch('/update/:id', async (req, res, next) => {
    try {
        const plant = await prisma.plant.update({
            where: {
                id: req.params.id
            },
            data: req.body
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