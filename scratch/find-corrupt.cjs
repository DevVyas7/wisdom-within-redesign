const fs = require('fs');
const content = fs.readFileSync('src/components/Pages.tsx', 'utf8');
let idx = 0;
let count = 0;
while ((idx = content.indexOf('\uFFFD', idx)) !== -1) {
  count++;
  console.log("Match " + count + " at " + idx + ": " + JSON.stringify(content.substring(Math.max(0, idx - 30), Math.min(content.length, idx + 40))));
  idx += 1;
}
