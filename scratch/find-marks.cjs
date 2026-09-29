const fs = require('fs');
const content = fs.readFileSync('src/components/Pages.tsx', 'utf8');
const regex = /\?[A-Za-z]/g;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log("Found question mark pattern:", m[0], "at", m.index, JSON.stringify(content.substring(m.index - 20, m.index + 30)));
}
