const isAnagram = (s, t) => {
    let sSort = s.split('').sort().join('')
    let tSort = t.split('').sort().join('')
    if (sSort === tSort){
        return true
    } else
    return false
}

console.log(isAnagram("racecar", "carrace"))
