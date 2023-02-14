const file =  require('fs') // use the JS filesystem modules

file.readFile('./input.txt', 'utf-8', (err, data) => { // use fs to read our data...
    
    let answer = 0;

    const splitRaw = data.split('\n'); // and split everything by line
    
    for (let i = 0; i < splitRaw.length; i++) {

        let compart1 = splitRaw[i].slice(0, splitRaw[i].length/2);
        let compart2 = splitRaw[i].slice(splitRaw[i].length/2, splitRaw[i].length);

        for (let j = 0; j < compart1.length; j++) {

            if (compart1.includes(compart2[j])) { // .includes() does all the magic to prevent nesting another forloop

                let currVal = compart2[j].charCodeAt(); // use ASCII to simplify our calculations
                    
                if (currVal > 96) { // if we have lowercase
    
                    answer += currVal - 96; // add the value of a-z on a scale of 1-26
    
                } else { // if we have uppercase
    
                    answer += currVal - 38; // add the value of A-Z on a scale of 27-52
    
                }
    
                break;

            }
        }
    }

    console.log(answer); // here's our final answer (8053)

    answer = 0; ///////////// PART TWO /////////////////

    let threeElves = [];

    for (let i = 0; i < splitRaw.length; i++) {

        threeElves.push(splitRaw[i]);

        if (((i + 1) % 3) === 0) { // if it's been three lines

            for (let j = 0; j < threeElves[0].length; j++) { // start looking for the one letter
        
                if (threeElves[1].includes(threeElves[0][j]) && threeElves[2].includes(threeElves[0][j])) { // found it!
        
                    let currVal = threeElves[0][j].charCodeAt(); // use ASCII to simplify our calculations
                            
                    if (currVal > 96) { // if we have lowercase
            
                        answer += currVal - 96; // add the value of a-z on a scale of 1-26
            
                    } else { // if we have uppercase
            
                        answer += currVal - 38; // add the value of A-Z on a scale of 27-52
            
                    }
            
                    break;
        
                }
            }

            threeElves = []; // clear our array and gather the next three elves

        } 

    }

    console.log(answer); // here's our part two answer (2425)

});