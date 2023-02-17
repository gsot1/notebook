// Tribonacci Sequence by GiacomoSorbi

/*

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

*/

// MY VERSION

function tribonacci(signature,n){
  let newSeq = signature;
  let remain = n - 3;

  while (remain > 0) { // add last three elements and append until we reach n amount
    newSeq.push(newSeq[newSeq.length-3] + newSeq[newSeq.length-2] + newSeq[newSeq.length-1]);
    remain--;
  }
  
  while (remain < 0) { // remove elements until we reach n amount
    newSeq.pop();
    remain++;
  }
  
  return newSeq;
}

// BEST READABLE VERSION

function tribonacciBEST(signature,n){  
  for (var i = 0; i < n-3; i++) { // append elements to our shallow-copied input array until it's length n
    signature.push(signature[i] + signature[i+1] + signature[i+2]);
  }
  return signature.slice(0, n); // use .slice() to return either the entire array, or only the first few if n was less than 3
}