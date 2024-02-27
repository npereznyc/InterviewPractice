// --- Directions
// Given a string, return all possible substrings along with each substring's frequency/count.
// --- Examples
//   substrings('abc') === { 'a': 1, 'b': 1, 'c': 1, 'ab': 1, 'bc': 1, 'abc': 1 }
//   substrings('aab') === { 'a': 2, 'b': 1, 'aa': 1, 'ab': 1, 'aab': 1 }

function substrings(str) {

  //first attempt: This solution returns all substrings with a length of 1 and 2 but not all possible substrings.
    // const obj = {}
    // obj[str]=1

    // for(let i=0;i<str.length; i++){
    //   if(obj[str[i]]){
    //     obj[str[i]]++
    //   } else {
    //     obj[str[i]]=1
    //   }
     
    // }
    // for(let i=0;i<str.length-1; i++){
    //   if(obj[str[i]+str[i+1]]){
    //     obj[str[i]+str[i+1]]++
    //   } else {
    //     obj[str[i]+str[i+1]]=1
    //   }
    // }

  //nested loop solution to capture all possible substrings:

  const obj = {}

  for(let start =0; start<str.length; start++){
    for(let end =start+1; end<=str.length; end++){
      let substr=str.slice(start,end)
      if(obj[substr]){
        obj[substr]++
      } else {
        obj[substr]=1
      }
    }
  }
    return obj
  }
  
  substrings('abc')

  module.exports = substrings;