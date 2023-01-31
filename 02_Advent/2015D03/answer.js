const file =  require('fs') // use the JS filesystem modules

file.readFile('./input.txt', 'utf-8', (err, data) => { // use fs to read our data...
    
    let houses = [ [0,0] ]; // lets store all our hit houses in an array of arrays to make up our 2D data
    let locX = 0; // track our current position and house count
    let locY = 0;
    let answer = 1; // Santa already delivered at (0, 0)
    
    for (let i = 0; i < data.length; i++) {
        if (data[i] === '>') { locX += 1; }
        else if (data[i] === '<') { locX -= 1; }
        else if (data[i] === '^') { locY += 1; }
        else if (data[i] === 'v') { locY -= 1; }

        let currIndex = getXs(houses).findIndex((e) => e === locX); // look for the first instance of X

        if (currIndex === undefined) { // check if the x value even exists in the array
            houses.push([locX,locY]);
            answer++;
        } else { // check if the y value exists in all instances of X

            let notFound = true;
            let offset = 0;

            while (offset <= houses.length) { // look for Y in every instance of X until found OR we run out of array to look through
                if (houses[currIndex+offset][1] === locY) { // found it
                    notFound = false;
                    offset = houses.length;
                } else { // haven't found it
                    offset += currIndex;
                    let newHouses = houses.slice(currIndex+1); // BUG: how to check for next X and exit the while loop??
                    currIndex = getXs(newHouses).findIndex((e) => e === locX);
                }
            }

            if (notFound) { // if there's an existing X but not a Y to go with it
                houses.push([locX,locY]);
                answer++;
            }
        }
    }

    console.log(answer); // here's our final answer ()

});

// I will also need this custom function

function getXs(arr) { // this grabs every X value in the houses array

    let slicedArr = [];

    for (let i = 0; i < arr.length; i++) {
        slicedArr.push(arr[i][0])
    }

    return slicedArr;
 }