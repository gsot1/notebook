const file =  require('fs') // use the JS filesystem modules

file.readFile('./input.txt', 'utf-8', (err, data) => { // use fs to read our data...
    
    let elves = []; 
    let currElf = 0; 
    let currLine = 0;
    const splitRaw = data.split('\n'); // and split everything by line
    
    for (let i = 0; i < splitRaw.length; i++) {

        currLine = splitRaw[i]; // store current line and check if it's blank

        if (currLine === '') { // if it's blank, move on to the next elf

            elves.push(currElf);
            currElf = 0;

        } else { // otherwise, add the number to the current elf

            currElf += Number(currLine);

        }

    }

    elves.sort((a,b) => {return a-b;}) // sort lowest to highest (arrow function changes sort to numerical from alphabetical from returned neg. values)
    const answer = elves[elves.length-1]; // grab the biggest number

    console.log(answer); // here's our final answer (68467)
    console.log(elves[elves.length-1] + elves[elves.length-2] + elves[elves.length-3]); // here's our final part two (203420)

});

