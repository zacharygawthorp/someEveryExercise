function hasOddNumber(arr) {
    return arr.some(function(val) {
        return val % 2 !== 0;
    })
}

function hasAZero(num) {
    return num.toString().split('').some(function(val) {
        return val === '0';
    })
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val) {
        return val % 2 !== 0;
   })
}

function hasNoDuplicates(arr) {
    return (new Set(arr)).size === arr.length;
}

function hasCertainKey(arr, key) {
    return arr.every(function(val) {
        return key in val
    })

}

function hasCertainValue(arr, key, searchVal) {
    return arr.every(function(val) {
        return val[key] === searchVal
    })
}