import express from 'express';
import connectToMongo from './config/db.js';
import cors from 'cors';
import routes from './routes/TodoRoute.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
const corsOptions = {
  origin: ['https://todo-list-stack.onrender.com/','https://todo-list-stack.onrender.com/Home','https://todo-list-stack.onrender.com/view',], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 3600, 
};
app.use(cors(corsOptions));
connectToMongo()
const PORT = process.env.PORT || 8000;

app.use(routes)
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`)
})
