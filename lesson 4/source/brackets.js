module.exports = (input) => {
    let arr = Array.from(input);
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '[') stack.push(']');
        else if (arr[i] === '{') stack.push('}');
        else if (arr[i] === '(') stack.push(')');
        else if (arr[i] !== stack.pop()) return false;
    }
    if (stack.length === 0) return true;

    return false;
};