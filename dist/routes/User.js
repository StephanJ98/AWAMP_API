"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
router.get('/get/:email', async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.params.email
            }
        });
        res.json({ user });
    }
    catch (error) {
        next(error.message);
    }
});
router.post('/create', async (req, res, next) => {
    console.log(req.body, '**************');
    try {
        const { email, password } = req.body;
        if (email && password) {
            const newUser = await prisma.user.create({
                data: {
                    plantas: [],
                    ...req.body
                }
            });
            res.json({ newUser });
        }
        else {
            res.sendStatus(500);
        }
    }
    catch (error) {
        next(error.message);
    }
});
router.delete('/delete/:email', async (req, res, next) => {
    try {
        await prisma.user.delete({
            where: {
                email: req.params.email
            }
        });
        res.sendStatus(200);
    }
    catch (error) {
        next(error.message);
    }
});
// Falta update
exports.default = router;
