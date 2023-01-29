const file =  require('fs') // use the JS filesystem modules

file.readFile('./input.txt', 'utf-8', (err, data) => { // use fs to read our data...

    let answer = 0; // we will use this to store our final answer
    
    for (let i = 0; i < data.length; i++) { // go through every character...
        if (data[i] === '('){
            answer += 1;
        } else {
            answer -= 1;
        }
    }

    console.log(answer); // and done (answer is 74)
});

file.readFile('./input.txt', 'utf-8', (err, data) => { // now let's do it again to find our index of santa location = -1

    let answer = 0;
    let floor = 0;
    
    while (floor !== -1){

        answer += 1; // this time we count up until our floor value hits -1 (where the first index is 1 and NOT 0)
        
        if (data[answer-1] === '('){
            floor += 1;
        } else {
            floor -= 1;
        }

    }

    console.log(answer); // and done (answer is 1795)
});

// Day 1 complete!