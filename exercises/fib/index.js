// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     // const fibArr=[0,1]

//     // for(let i=1; i<=n; i++){
//     //     fibArr.push(fibArr[i]+fibArr[i-1])
//     // }
//     // console.log(fibArr)
//     // return fibArr[n]

//     //recursive solution: (exponential runtime)
//     if(n<2){
//         return n
//     }

//     return fib(n-1) +fib(n-2)
// }


//recursive solution with memoization:

function memoize(fn){ //we pass a function into this function and it will return another function (a fast version of the recursive function)

    const cache = {} //saving a record of all our previous function calls and it's results
    return function(...args){ //this function will be 'fib'
        //...args means that we don't know how many arguments this function will be called with, so just take all of the argumens and assign them as an array to this argument called 'args'
        if(cache[args]){ //checking to see if we've ever called this function with this particular set of arguments and stored the results in this cache object. If we have...return that result and don't call the orginal function
            return cache[args]
        }
        const result = fn.apply(this,args)
        cache[args]=result
        return result

    }

}
function fib(n){
    if(n<2){
        return n
    }
        
    return fib(n-1) +fib(n-2)
}

fib = memoize(fib) //reassign fib to the memoized version of the fib function

fib(39)

module.exports = fib;
