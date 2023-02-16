const file =  require('fs') // use the JS filesystem modules

file.readFile('./input.txt', 'utf-8', (err, data) => { // use fs to read our data...
    
    let answer = 0;

    const splitRaw = data.split('\n'); // and split everything by line
    
    for (let i = 0; i < splitRaw.length; i++) {

        let twoElves = splitRaw[i].split(','); // split ranges into four accessible values
        let elf1 = twoElves[0].split('-');
        let elf2 = twoElves[1].split('-');

        let A = elf1[0]; // for readability (A-B, C-D)
        let B = elf1[1];
        let C = elf2[0];
        let D = elf2[1];

        if ((A >= C && B >= D) && (B >= A) && (D <= C)) { // if range 1 is wider or equal AND encapsulating...

            answer += 1;
            console.log(twoElves, 'because', A, 'is greater than', C, 'and', B, 'is greater than', D)
                
        }

        if ((A <= C && B <= D) && (B <= A) && (D >= C)) { // if range 2 is wider AND encapsulating...

            answer += 1;
            console.log(twoElves, 'because', C, 'is greater than', A, 'and', D, 'is greater than', B)
                
        }

    }

    console.log(answer); // here's our final answer (711)

});