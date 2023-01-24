// PURE FUNCTIONS are functions that only use the data fed into it through its arguments (removed from call stack after done)

// CLOSURES are functions that use the data directly from its surrounding parent scope (external data + func stored in heap instead)

// This allows you to ENCAPSULATE private data from inside a function to remain alive but directly inaccessible

function counter() {
    let dontDirectlyCallMe = 0;
    function safelyIncrement() {
        dontDirectlyCallMe += 1;
    }
    return safelyIncrement;
}

const safeCounter = counter(); // returns the inner function safelyIncrement() WITHOUT deleting dontDirectlyCallMe
safeCounter();
safeCounter();
safeCounter(); // calling this inner function affects dontDirectlyCallMe since JS doesn't delete closure variables
safeCounter();
safeCounter(); // dontDirectlyCallMe is now 5 by this point, without it being directly callable

// Functions are objects so it makes sense you can use this method as a private parameter of sorts

// Pop quiz: where are closure states stored?

// Disk
// Call stack (short-term, for pure functions)
// Heap (long-term memory)                         // <-----------
// Dump