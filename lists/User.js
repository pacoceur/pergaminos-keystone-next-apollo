const { Text, Checkbox, Password } = require('@keystonejs/fields');

module.exports = {
    fields: {
        name: { type: Text },
        email: { type: Text, isUnique: true },
        isAdmin: { type: Checkbox },
        password: { type: Password },
    },
};