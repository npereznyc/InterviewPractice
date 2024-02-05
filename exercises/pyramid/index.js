// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, level='') {
    //nested loop solution:
    // const midpoint = Math.floor((n*2-1)/2) //length of longest row is n*2-1. we divide by 2 to get the midpoint; Math.floor() ensures we round down.

    // for(let row=0; row<n; row++) {
    //     let level=''
    //     for(let col=0; col<n*2-1; col++){
    //         console.log('row: ', row, 'col: ', col, 'mid: ', midpoint)
    //         if(midpoint - row <= col && midpoint + row >= col){
    //             level += '#'
    //         } else {
    //             level += ' '
    //         }
    //     }       
    //     console.log(level)
    // }

    //recursive solution:

    const midpoint = Math.floor((n*2-1)/2)

    //base case:
    if(n===row){
        return
    }

    if(n*2-1===level.length){
        console.log(level)
        pyramid(n,row+1)
        return
    }

    if(midpoint-row<=level.length && midpoint+row>=level.length){
        level += '#'
    }else {
        level += ' '
    }

pyramid(n,row,level)

}
pyramid(3)
module.exports = pyramid;
