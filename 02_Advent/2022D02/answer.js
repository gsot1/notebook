const file =  require('fs') // use the JS filesystem modules

file.readFile('./input.txt', 'utf-8', (err, data) => { // use fs to read our data...
    
    let answer = 0;

    const splitRaw = data.split('\n'); // and split everything by line
    
    for (let i = 0; i < splitRaw.length; i++) {

        let current = splitRaw[i].split(" ");

        if (current[0] === "A") { // ENEMY picks ROCK
            
            switch(current[1]) { // YOU pick...

                case "X": // ...ROCK

                    answer += (1 + 3); // 1pt, DRAW 
                    break;

                case "Y": // ...PAPER

                    answer += (2 + 6); // 2pt, WIN
                    break;

                case "Z": // ...SCISSORS

                    answer += (3 + 0); // 3pt, LOSE
                    break;

            }

        } else if (current[0] === "B") { // ENEMY picks PAPER

            switch(current[1]) { // YOU pick...

                case "X": // ...ROCK

                    answer += (1 + 0); // 1pt, LOSE
                    break;
                    
                case "Y": // ...PAPER

                    answer += (2 + 3); // 2pt, DRAW
                    break;

                case "Z": // ...SCISSORS

                    answer += (3 + 6); // 3pt, WIN
                    break;

            }

        } else if (current[0] === "C") { // ENEMY picks SCISSORS

            switch(current[1]) { // YOU pick...
                
                case "X": // ...ROCK

                    answer += (1 + 6); // 1pt, WIN
                    break;

                case "Y": // ...PAPER

                    answer += (2 + 0); // 2pt, LOSE
                    break;

                case "Z": // ...SCISSORS

                    answer += (3 + 3); // 3pt, DRAW
                    break;

            }

        }

    }

    console.log(answer); // here's our final answer (11063)

    answer = 0; ////////////////// PART TWO //////////////////////

    for (let i = 0; i < splitRaw.length; i++) {

        let current = splitRaw[i].split(" ");

        if (current[0] === "A") { // ENEMY picks ROCK
            
            switch(current[1]) { // YOU must...

                case "X": // ...LOSE

                    answer += (0 + 3); // 0pt, SCISSORS
                    break;

                case "Y": // ...DRAW

                    answer += (3 + 1); // 3pt, ROCK
                    break;

                case "Z": // ...WIN

                    answer += (6 + 2); // 6pt, PAPER
                    break;

            }

        } else if (current[0] === "B") { // ENEMY picks PAPER

            switch(current[1]) { // YOU must...

                case "X": // ...LOSE

                    answer += (0 + 1); // 0pt, ROCK
                    break;
                    
                case "Y": // ...DRAW

                    answer += (3 + 2); // 3pt, PAPER
                    break;

                case "Z": // ...WIN

                    answer += (6 + 3); // 6pt, SCISSORS
                    break;

            }

        } else if (current[0] === "C") { // ENEMY picks SCISSORS

            switch(current[1]) { // YOU must...
                
                case "X": // ...LOSE

                    answer += (0 + 2); // 0pt, PAPER
                    break;

                case "Y": // ...DRAW

                    answer += (3 + 3); // 3pt, SCISSORS
                    break;

                case "Z": // ...WIN

                    answer += (6 + 1); // 6pt, ROCK
                    break;

            }

        }

    }

    console.log(answer); // here's our part two answer (10349)

});

