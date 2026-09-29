const fs = require('fs');
const content = fs.readFileSync('src/components/Pages.tsx', 'utf8');
const regex = /<blockquote/g;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log("Blockquote at", m.index, JSON.stringify(content.substring(m.index, m.index + 120)));
}
