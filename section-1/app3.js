

const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(' ');

const wordReacCount = content.match(/react/gi ?? []).length

console.log('Words', wordCount.length)
console.log('React Words', wordReacCount)
