import express from 'express';
import connectToMongo from './config/db.js';
import cors from 'cors';
import routes from './routes/TodoRoute.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectToMongo()
const PORT = process.env.PORT || 8000;

app.use(routes)
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`)
})
