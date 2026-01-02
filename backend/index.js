import express from 'express';
import cors from 'cors';
import {config} from "./Config/config.js";
import dotenv from 'dotenv';
// import routes from "./routes/routes.js";
import conDatabase from "./Database/db.js";
import { OpenRouter } from '@openrouter/sdk';// chatbot required data and method import in app
const app = express();
const port = process.env.PORT || 5000;
const connURI = "mongodb://localhost:27017/bot";
dotenv.config();
const key = process.env.TOKEN_KEY;
app.use(express.json());
// app.use(cors());
// app.use("/bot/v1",routes);
conDatabase(config.Mongo_URI);

// const openRouter = new OpenRouter({
//     apiKey:key
// });


// const completionRouter = await openRouter.chat.send({
//     model: 'nvidia/nemotron-3-nano-30b-a3b:free', // Chatbot Model
//     messages: [
//         {
//             role: 'user',
//             content: 'life cycle of POWER BI?',
//         },
//     ],
//     stream: false,
// });

// console.log(completionRouter.choices[0].message.content);
// app.get('/bot/v2', (req, res) => {
//     res.json({
//         status: 200,
//         user : completionRouter.choices[0],
//         assistant : completionRouter.choices[0].message.content
//     })
// })

app.get('/', (req, res) => {
    res.send("Server running!");
})

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
})