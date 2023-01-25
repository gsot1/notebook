// TEST-DRIVEN DEVELOPMENT allows for a more robust way to keep checking your code for errors

// Use `npm i -D vitest` to install and use Vitest (as a non-production package) to do this
// Then go to your package.json and add the following...
/*
  ...

  "type": "module",
  "scripts": {
    "test": "vitest"
  }

  ...
*/

// Create a file at root called MAIN.TEST.JS (without the caps) and use this structure:

import { expect, test } from 'vitest';

import { addAllNoReduce } from './12_CumulativeSum';
import { binarySearch } from './13_BinarySearch';
import { LRU } from './14_LRUCache';


test('cumulative sum of an array', () => {
    expect(addAllNoReduce([1, 2, 3, 4, 5, 5, 9])).toBe(29);
    expect(binarySearch([1, 2, 6, 9, 14, 18, 23, 29, 50], 6)).toBe(2);
    
    const LRUcache = new LRU(5);
    LRUcache.putItem('a', 1);
    
    expect(LRUcache.getItem('a')).toBe(1);
});

// Pop quiz: (none)