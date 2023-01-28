// (covered in Lesson 20)

import './style.css' // import our styles here (why not)

const form = document.querySelector('form'); // grab our <form> block

form.addEventListener('submit', async (e) => { // listen for when the form is submitted, then run an async function
  
  e.preventDefault(); // forms refresh the page by default when submitted- calling this method on the event disables that

  const data = new FormData(form); // create a map-like object to extract the form data

  const response = await fetch('http://localhost:8080/run', { // synchronously call fetch() to send our server request
    method: 'POST', // it's a POST request since it creates data...
    headers: {
      'Content-Type': 'application/json', // it uses json objects to communicate by default...
    },
    body: JSON.stringify({
      prompt: data.get('prompt'), // grab the 'prompt' data from the form and use .stringify to make it a string in a json
    })
  });

  const { image } = await response.json(); // wait until the finished image url returns to us, and store it jQuery-style

  const result = document.querySelector('#result'); // grab the page section for image insertion...
  result.innerHTML = `<img src="${image}" width="512" />`; // ...and use jQuery to splice its embed into the HTML

});

// To get our app up and running, run `node 18_ExpressServer.js` in one terminal and `npm run dev` in another

// Pop quiz: The FormData object is closely related to which built-in JS class?

// Array
// Object
// Map             // <-------------
// Set