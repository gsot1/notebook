const file =  require('fs') // use the JS filesystem modules

file.readFile('./input.txt', 'utf-8', (err, data) => { // use fs to read our data...
    
    let housesX = [0]; // lets store all our hit houses in two arrays to make up a 2D structure
    let housesY = [0]; // (0, 0) is the house Santa starts at (and already delivered to) 
    let locX = 0; // track our current position and house count
    let locY = 0;
    let answer = 1; // Santa already delivered at (0, 0)
    
    for (let i = 0; i < data.length; i++) {
        if (data[i] === '>') { locX += 1; }
        else if (data[i] === '<') { locX -= 1; }
        else if (data[i] === '^') { locY += 1; }
        else if (data[i] === 'v') { locY -= 1; }

        if (binarySearch(housesX, locX) === -1) { // check if the x value even exists in the array
            housesX.push(locX); // PROBLEM: what about multiple instances of locX?
            housesY.push(locY);
            answer++;
        } else if (houses[locX] !== locY) { // check if the y value is in the x's array
            houses[locX].push(locY); // PROBLEM: how do you get the index of the locX to check if its locY pair already exists?
            answer++;
        }

        // SOLUTION? binarySearch all instances of locX and check for locY somehow
    }

    console.log(answer); // here's our final answer ()

});

// Good thing I have this function from my JS course I took:

function binarySearch(arr, val, start=0, end=arr.length) {
     
    if (start > end) { // return -1 if we go through the whole thing and find nothing (this function loops by calling itself)
        return -1;
    }

    const mid = Math.floor((start + end) / 2); // grab rounded middle index

    if (arr[mid] === val) { // OUTCOME 1: we found the value!
        return mid; // we're done!
    }

    if (arr[mid] > val) { // OUTCOME 2: we overshot
        return binarySearch(arr, val, start, mid-1); // call the function again (callback) and check every value below the mid index
    }

    if (arr[mid] < val) { // OUTCOME 3: we undershot
        return binarySearch(arr, val, mid+1, end); // call the function again (callback) and check every value above the mid index
    }
}