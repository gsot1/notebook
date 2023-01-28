// (covering Lessons 20, 21, and parts of 22)

import './style.css' // import our styles here (why not)

const form = document.querySelector('form'); // grab our <form> block

form.addEventListener('submit', async (e) => { // listen for when the form is submitted, then run an async function
  
  e.preventDefault(); // forms refresh the page by default when submitted- calling this method on the event disables that

  enterLoadState(); // (SEE LESSON 21 BELOW)

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

  if (response.ok) { // (SEE LESSON 22 BELOW)

    const { image } = await response.json(); // wait until the finished image url returns to us, and store it jQuery-style

    const result = document.querySelector('#result'); // grab the page section for image insertion...
    result.innerHTML = `<img src="${image}" width="512" />`; // ...and use jQuery to splice its embed into the HTML

  } else { // (SEE LESSON 22 BELOW)
      const err = await response.text();
      alert(err);
      console.error(err);
  }

  exitLoadState(); // (SEE LESSON 21 BELOW)
});

// To get our app up and running, run `node 18_ExpressServer.js` in one terminal and `npm run dev` in another

// Pop quiz: The FormData object is closely related to which built-in JS class?

// Array
// Object
// Map             // <-------------
// Set

////////////////////////////////////////////////////////////////////////////////////////////

// LESSON 21: To create a simple LOADING STATE, we can alter our front-end to animate while waiting for OpenAI

function enterLoadState() {
  const button = document.querySelector('button');
  button.disabled = true; // grab our button and disable clicking it
  button.innerHTML = 'THINKING... <span class="spinner">⚙️</span>'; // use the prefab CSS to also animate a loading icon
}

function exitLoadState() {
  const button = document.querySelector('button');
  button.disabled = false; 
  button.innerHTML = 'SEND TO AI'; // re-enable our button's clickability and original text once done loading
}

// Pop quiz: What state should a button typically be in when the app performs an async operation?

// active                   // <----------- INCORRECT (thought it was because async means the app still responds)
// disabled                 // <----------- CORRECT
// hidden
// chillin

////////////////////////////////////////////////////////////////////////////////////////////

// LESSON 22 CONTINUED: For frontend ERROR HANDLING, response.ok is a useful boolean to check if the API returned 200 OK

// If response.ok returns false, use response.text to grab OpenAI's error message and display it on-screen with alert()

// (ok go back to 18_ExpressServer.js now)