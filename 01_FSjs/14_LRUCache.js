// Another interview question... LEAST RECENTLY USED CACHE

// TRY IT: Create a data structure that implements the requirements of a Least Recently Used Cache with O(1) time complexity
// - Initialize an object with a maxium capacity of elements.
// - getItem - Return the value of the key. Update cache with the most recently used key.
// - putItem - Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.

const lruAttempt = {
    lastUsed: new Set(),
    maxsize: 32,
    internalMap: new Map(),
    getItem(key) {
        if (internalMap[key]) { // make sure key exists
            this.lastUsed.push(key);
            return this.internalMap[key];
        }
        return -1;
    },
    putItem(key, val) { // I have no clue how to make this O(1)
        if (this.internalMap.length === this.maxsize) {
            if (this.lastUsed === this.maxsize) {
                delete this.internalMap[this.lastUsed.shift()];
            } else {
                // ran out of time: insert code here to iterate over the map's keys until you find one that's missing from lastUsed and delete it
                internalMap[key] = val;    
            }
        } else { // if map isn't full, no problem!
            internalMap[key] = val;
        }
    }
};

// ACTUAL ANSWER: see the main takeaway and other notes below

class LRU {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map(); // TAKEAWAY: keeping track of the order of our items is ALSO the ordered list of most recently accessed items
    }
  
    getItem(key) {
      const item = this.cache.get(key);
  
      if (item) { // if our item exists, re-add it to the front of our map to mark it as most recently used
        this.cache.delete(key);
        this.cache.set(key, item);
      }
      return item;
    }
  
    putItem(key, val) {
      if (this.cache.has(key)) { // delete our old value if the key already exists
        this.cache.delete(key);
      }

      else if (this.cache.size == this.capacity) { // if the map is at its max size...
        this.cache.delete(this.oldestItem); // ...use the getter function to delete the first map item (the oldest)
      }
  
      this.cache.set(key, val); // and then set the value easily
    }
  
    get oldestItem() {
      return this.cache.keys().next().value; // .next() returns the first (oldest) key in our map
    }
}
  
const LRUcache = new LRU(5);
cache.putItem('a', 1);
cache.getItem('a');

// Pop quiz: which features makes a JS Map suitable for an LRU cache?

// faster lookup
// easier to delete keys
// use any key type
// ordered keys                // <-------------