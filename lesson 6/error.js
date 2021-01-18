module.exports = (message) => {
    const error = new Error();
    error.name = 'An error has occurred';
    error.message = message;
    return error;
}