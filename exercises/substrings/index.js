// --- Directions
// Given a string, return all possible substrings along with each substring's frequency/count.
// --- Examples
//   substrings('abc') === { 'a': 1, 'b': 1, 'c': 1, 'ab': 1, 'bc': 1, 'abc': 1 }
//   substrings('aab') === { 'a': 2, 'b': 1, 'aa': 1, 'ab': 1, 'aab': 1 }

// --- Directions
// Given a string, return a string of all possible substrings (containing only lowercase letters) along with each substring's frequency/count, sorted by frequency (descending) and then alphabetically (ascending) within the same frequency.
// The output should be a comma-separated string with each substring and its count in the format "count:substring".
// --- Examples
//   substrings('aAb') === "1:a,1:b"
//   substrings('aab') === "2:a,1:b"
//   substrings('aabb') === "2:a,2:b,1:ab"
//   substrings('abc') === "1:a,1:b,1:c,1:ab,1:bc,1:abc"

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

  const string = str.toLowerCase().replace(/[^a-z]/g,'')

  const obj = {}

  for(let start =0; start<string.length; start++){
    for(let end =start+1; end<=string.length; end++){
      let substr=string.slice(start,end)
      if(obj[substr]){
        obj[substr]++
      } else {
        obj[substr]=1
      }
    }
  }
  
  const arr= Object.entries(obj).map(([substr, count])=> [count,substr])

  arr.sort((a,b)=> b[0] - a[0] || a[1].localeCompare(b[1]))

  console.log(arr.map(([count,substr])=> `${count}:${substr}`).join(','))
    return arr.map(([count,substr])=> `${count}:${substr}`).join(',')
  }
  
  substrings('Banana boat')

  module.exports = substrings;