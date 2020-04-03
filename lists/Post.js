const { Markdown } = require('@keystonejs/fields-markdown');

module.exports = {
    fields: {
        name: { type: String, required: true },
        description: { type: String, required: true },
        content: { type: Markdown, wysiwyg: true, height: 400 },
    },
};