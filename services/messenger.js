const query = require('../db/query');

const getUserByNick = async () => {
    return await query.executeQuery("SELECT * FROM users WHERE users.nick = $1", ['alex']);
};

module.exports = {
    getUserByNick
};