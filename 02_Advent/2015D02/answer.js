const file =  require('fs') // use the JS filesystem modules

file.readFile('./input.txt', 'utf-8', (err, data) => { // use fs to read our data...
    
    let answer = 0;
    let splitRaw = data.split('\n'); // and split everything by line
    
    for (let i = 0; i < splitRaw.length; i++) {

        let curr = splitRaw[i].split('x'); // split each line by x
        
        // use the provided formula (2lw + 2wh + 2hl)
        answer += (2 * curr[0] * curr[1]) + (2 * curr[0] * curr[2]) + (2 * curr[1] * curr[2]) 
        // and the spread operator to divide out the largest side of the three values to calculate the smallest side area
        + ((curr[0] * curr[1] * curr[2]) / Math.max(...curr));
        // ...to add to our total answer

    }

    console.log(answer) // here's our final answer (1588178)

});

file.readFile('./input.txt', 'utf-8', (err, data) => { // let's do this again for Part 2
    
    let answer = 0;
    let splitRaw = data.split('\n');
    
    for (let i = 0; i < splitRaw.length; i++) {

        let curr = splitRaw[i].split('x');
        
        // start with the formula (2w + 2l + 2h)
        answer += (((2 * curr[0]) + (2 * curr[1]) + (2 * curr[2])) 
        // use the spread operator to select the largest side to subtract out (leaving just the other two*2)
        - (2 * Math.max(...curr)))
        // and then add l*w*h for the bow
        + (curr[0] * curr[1] * curr[2]);
        // ...to add to our total answer

    }

    console.log(answer) // here's our part 2 answer (3783758)

});