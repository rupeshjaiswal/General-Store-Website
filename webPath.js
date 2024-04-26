import express from 'express';
import mongoose from 'mongoose';
import { join } from 'path';
const route = express();
import userDetailSchema from './JavaScript/Schema.js';

const userDetail = new mongoose.model("UserDetail", userDetailSchema);

route.get('/logIn', (req, res) => {
    res.sendFile(join(process.cwd(), 'HTML', 'Login.html'));
})

route.post('/', (req, res) => {
    res.sendFile(join(process.cwd(), 'HTML', 'index.html'));
})

route.get('/signUp', (req, res) => {
    res.sendFile(join(process.cwd(), 'HTML', 'Signup.html'));
})

route.post('/logIn', async (req, res) => {
    try {
        const user = new userDetail({
            name: req.body.name,
            phonenumber: Number(req.body.phonenumber),
            email: req.body.email,
            password: req.body.password,
        })

        const result = await user.save();
        res.sendFile(join(process.cwd(), 'HTML', 'Login.html'));
    } catch (err) {
        console.log(err);
    }
})

route.get('/daily_needs', (req, res) => {
    res.sendFile(join(process.cwd(), 'HTML', 'DailyNeeds.html'));
})

route.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), 'HTML', 'index.html'));
})

export default route;