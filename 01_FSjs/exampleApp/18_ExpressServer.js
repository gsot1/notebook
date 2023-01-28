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
    
    try { // (SEE LESSON 22 BELOW)
    
        const prompt = request.body.prompt; // grab our AI prompt from the request

        const aiResponse = await openai.createImage({ // wait for openAI to generate a picture...
            prompt, // ...using the prompt...
            n: 1, // ...a specified amount...
            size: '1024x1024' // ...and an image size
        });

        const image = aiResponse.data.data[0].url; // grab the URL of the finished AI generation!
        
        reply.send({ image }); // send the link back to the client/browser in json format
    
    } catch (error) { // (SEE LESSON 22 BELOW)

        console.error(error);
        reply.status(500).send(error?.response.data.error.message || 'Something went wrong');

    }
}); 

app.listen(8080, () => console.log('NOW RUNNING ON http://localhost:8080/run')) // launch our Node server on port 8080

// Pop quiz: Why do we store the API key as an env variable?

// separation of concerns
// to share with friends
// to avoid leaking credentials         // <----------

////////////////////////////////////////////////////////////////////////////////////////////

// LESSON 22: If we don't implement ERROR HANDLING, an unexpected response from OpenAI will break our server

// Using try{} and catch(error){} blocks helps anticipate errors returned from API calls 

// We can use console.error(error) to log our error to the console instead of crashing our entire app

// reply.status(500) sends a default API code of 5xx signifying a server-side issue
// .send(...) chained on top of that lets us directly grab OpenAI's error message and pass it along to the console
// if we don't get anything from OpenAI (hence the ? in error?) then we can return an error string (|| "") instead of null

// This is how we handle errors to prevent backend breakdown, check `main.js` for frontend error handling...

// ALL DONE! You can bundle your app with `npm run build` and host it anywhere you want

// Pop quiz: What is the usual way to handle errors in an async function?

// catch()
// try/catch                   // <------------
// throw
// just ignore errors