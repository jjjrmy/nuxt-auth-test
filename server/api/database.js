// import { db } from '~/database/connection.js';
// import { Prompt } from '~/models/Prompt.js';

export default defineEventHandler(async (event) => {
    // const prompts = await db.table('prompts').get();
    // const prompts = await Prompt.query().all();

    return {
        hello: 'world',
        // prompts,
    }
})