import { sutando } from 'sutando';
import config from '../sutando.config.cjs';

console.log(config);
sutando.addConnection(config);

export const db = sutando.connection();