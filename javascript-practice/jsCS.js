/*
    Make a function that computes a factorial recursively.
    A factorial is when you take a number n and multiply by each preceding integer until you hit one.
    n * (n-1) * (n-2) ... * 3 * 2 * 1
    
    Call the function factorial
    
    factorial(1) = 1
    factorial(2) = 2
    factorial(3) = 6 
*/

function factorial(n) {
    if(n < 2) return 1
    return n * factorial(n-1)
}

// find the 
function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// console.log(fibonacci(20))

//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function(arr) {
    const breadcrumbs = {};
    
    let sortedArray = arr.sort((a, b) => a - b)

    let newArray = []

    for(let i = 0; i < sortedArray.length; i++) {
        if(!breadcrumbs[sortedArray[i]]) {
            breadcrumbs[sortedArray[i]] = true
            newArray.push(sortedArray[i])
        }
    }

    return newArray
}

console.log(uniqSort([4,2,2,3,2,2,2])) // => [2,3,4]