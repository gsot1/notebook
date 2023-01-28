// Set up an API key with OpenAI and store it in an .env file (and add *.env to your .gitignore)

// Use the following npm packages to create our server-talking code: dotenv express cors openai

import * as dotenv from 'dotenv'; // this package allows us to load ENVIRONMENT VARIABLES from .env
dotenv.config();

import { Configuration, OpenAIApi } from 'openai'; // grab the important objects from the OpenAI devtools

const configuration = new Configuration({
    apiKey: process.env.OPENAI // import our API key into a config object to start up our OpenAI API
});

const openai = new OpenAIApi(configuration);

import express from 'express'; // EXPRESS is a lightweight Node.js web framework
import cors from 'cors'; // CORS is a safety mechanism filtering off-domain assets from being served on your browser

const app = express(); // this code runs on every server request (often called MIDDLEWARE)
app.use(cors());
app.use(express.json()); // now we enable cors and Express with .json files

app.post('/run', // create a POST request for a new piece of data with the URI "/run"
  async (request, reply) => { // .post() lets us run a callback on arg #2 (also asynchronous from the ASYNC keyword)
    
    const prompt = request.body.prompt; // grab our AI prompt from the request

    const aiResponse = await openai.createImage({ // wait for openAI to generate a picture...
        prompt, // ...using the prompt...
        n: 1, // ...a specified amount...
        size: '1024x1024' // ...and an image size
    });

    const image = aiResponse.data.data[0].url; // grab the URL of the finished AI generation!
    
    reply.send({ image }); // send the link back to the client/browser in json format
}); 

app.listen(8080, () => console.log('NOW RUNNING ON http://localhost:8080/run')) // launch our Node server on port 8080

// Pop quiz: Why do we store the API key as an env variable?

// separation of concerns
// to share with friends
// to avoid leaking credentials         // <----------