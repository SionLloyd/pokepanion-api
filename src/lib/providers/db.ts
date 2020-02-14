import {createConnection} from "typeorm";
import path from 'path';

export const db = createConnection({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'snorlax',
    password: undefined,
    database: 'pokepanion',
    entities: [path.join(__dirname, '..', '..', 'entities/*')],
    synchronize: true
});