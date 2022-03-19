import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';

const publicKey = fs.readFileSync('secrets/jwtRS256.key.pub').toString();


const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors())

app.get('/health', (req, res) => {
    res.status(200).send({
        message: "Healthy"
    });
})

app.get("/publickey", (req, res) => {
    res.send({
        key: publicKey
    });
})

app.listen(process.env.PORT || 8081);