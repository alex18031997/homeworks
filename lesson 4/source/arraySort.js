module.exports = (arr1, arr2) => {
    const included = []
    const nonIncluded = []

    arr1.forEach(item => {
        if (arr2.includes(item)) {
            included.push(item)
        } else {
            nonIncluded.push(item)
        }
    })
    return included.sort((a, b) => (arr2.indexOf(a) - arr2.indexOf(b))).concat(nonIncluded.sort((a, b) => a - b));
};
