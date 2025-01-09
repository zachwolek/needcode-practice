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

console.log(isAnagram2("raceca", "carrace"))