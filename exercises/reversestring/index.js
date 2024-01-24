// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //solution 1 - using reverse()
        //convert string to array, reverse the array, convert back to string
    // return str.split('').reverse().join('')
    
    //solution 2 -  not using reverse()
        //instantiate empty string, iterate over str and add each element to the front of the empty string   
    // let revStr=''
    // for(let char of str){
    //     revStr=char+revStr
    // }
    // return revStr

    //solution 3 - using reduce()
    return str.split('').reduce((rev,char)=>char + rev, '')
}
reverse('abcd')

module.exports = reverse;
