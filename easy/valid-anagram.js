const isAnagram = (s, t) => {
    let sSort = s.split('').sort().join('')
    let tSort = t.split('').sort().join('')
    if (sSort === tSort){
        return true
    } else
    return false
}

console.log(isAnagram("racecar", "carrace"))


const isAnagram2 = (s, t) => {
    if (s.split('').sort().join('') === t.split('').sort().join('')){
        return true
    } else
    return false
}

console.log(isAnagram2("racecar", "carrace"))

const isAnagram3 = (s, t) => {
    //check to see if the length is the same
    if (s.length !== t.length){
        return false
    }

    //now check to see if the letters are the same in each
    const countS = {}
    const countT = {}
    //we have established s.length and t.length are the same so we can iterate over both at the same time
    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1
        //This will be
        //{ r: 2, a: 2, c: 2, e: 1 }
        countT[t[i]] = (countT[t[i]] || 0) + 1
         //This will be
        //{ r: 2, a: 2, c: 2, e: 1 }
    }
  
    for (const key in countS) {
        //we are using a for...in loop
        //we are checking through { r: 2, a: 2, c: 2, e: 1 }
        if (countS[key] !== countT[key]) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram3("racecar", "carrace"))