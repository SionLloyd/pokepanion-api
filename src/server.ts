import express, { Express } from 'express';
import mongoose from 'mongoose';
import { router } from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect("mongodb://localhost:27017/pokepanion")

const app: Express = express()
const port = process.env.PORT;

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

