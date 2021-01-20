const User = require('./models/users').User;

module.exports = async (id) => {
    const user = await User.findOne({_id: id});
    return user;
}