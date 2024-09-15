import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import db from './db/knexfile';

const app : Application = express();

app.use(cors({
    credentials:true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req:Request, res:Response) => {

    res.send("Welcome to samcommerce backend!");

})

db.raw('SELECT 1')
   .then(() => {
        console.log('Database connection successful');
    })
    .catch((err) => {
        console.error('Database connection error:', err.message);
    });



export default app;


