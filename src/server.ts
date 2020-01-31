import express from 'express';
import bodyParser from 'body-parser';
import { router } from './router';
import { db } from './lib/providers/db';

const app = express();
const port = 3000;

db.catch(err => {
    console.error(err);
    process.exit(1);
})

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})