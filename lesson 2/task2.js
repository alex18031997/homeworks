module.exports = (x) => {
    x = x.toString();
    return x == Array.from(x).reverse().join('');
}

