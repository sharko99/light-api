const runtime = require('../runtime/runtime');

/**
 * Replace placeholders in an HTML string with provided values.
 * @param {string} html - The HTML string.
 * @param {Object} fields - An object where keys are placeholders and values are the replacements.
 * @returns {string} - The processed HTML string.
 * @example
 * const processedHtml = replaceHtmlString('<p>{username}</p>', { username: 'John' });
 */
function replaceHtmlString(html, fields) {
    let processedHtml = html;
    for (const [key, value] of Object.entries(fields)) {
        const regex = new RegExp(`{${key}}`, 'g');
        processedHtml = processedHtml.replace(regex, value);
    }
    return processedHtml;
}

/**
 * Replace placeholders in an HTML file with provided values.
 * @param {string} filePath - The path to the HTML file.
 * @param {Object} fields - An object where keys are placeholders and values are the replacements.
 * @returns {Promise<string>} - A promise that resolves to the processed HTML string.
 * @example
 * const processedHtml = await replaceHtmlFile('template.html', { username: 'John' });
 */
async function replaceHtmlFile(filePath, fields) {
    let html = await runtime.readFileString(filePath);
    return replaceHtmlString(html, fields);
}

module.exports = { replaceHtmlString, replaceHtmlFile };