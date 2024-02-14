// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    //instantiating results array; this will be populated by the subarrays:
    let results = []

    //adding in n number of empty subarrays:
    for(let i = 0; i<n; i++) {
        results.push([])
    }
     console.log(results)

    //instantiating counter that will keep track of what number we're pushing into the results array
    let counter = 1

    //declare variables for start and end columns and rows:
    let startCol=0
    let endCol=n-1
    let startRow=0
    let endRow=n-1

    while(startCol<=endCol && startRow<=endRow){
        //loop for top row:
        for(let i=startCol; i<=endCol; i++){
            results[startRow][i] = counter
            counter++
        }
        startRow++

        //loop for right column:
        for(let i=startRow; i<= endRow; i++){
            results[i][endCol]=counter
            counter++
        }
        endCol--

        //bottom row:
        for(let i = endCol; i>=startCol; i--){
            results[endRow][i]=counter
            counter++
        }
        endRow--

        //left column:

        for(let i = endRow; i>= startRow; i--){
            results[i][startCol]=counter
            counter++
        }
        startCol++
    }
    console.log(results)
    return results
}
matrix(3)
module.exports = matrix;
