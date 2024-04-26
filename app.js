import express from 'express';
import mongoose from 'mongoose';
import route from './webPath.js';
import bodyParser from 'body-parser'

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb://localhost:27017/LogInDetails").then(() => {
    console.log("Connection Successfull")
}).catch((err) => console.log(err));

app.use(express.static('HTML'));
app.use(express.static('CSS'));
app.use(express.static('Image'));
app.use(express.static('JavaScript'));

app.use('/', route);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})