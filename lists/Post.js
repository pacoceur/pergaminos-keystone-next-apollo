const { Slug, Text } = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');

module.exports = {
    fields: {
        slug: { type: Slug, required: true, isUnique: true },
        title: { type: Text, required: true },
        content: { type: Markdown, wysiwyg: true, height: 400 },
    },
};