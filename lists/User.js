const { Password, Text } = require('@keystonejs/fields');

module.exports = {
    fields: {
        username: { type: Text },
        password: { type: Password },
    },
};