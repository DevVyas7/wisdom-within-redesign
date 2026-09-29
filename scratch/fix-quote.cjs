const fs = require('fs');
let content = fs.readFileSync('src/components/Pages.tsx', 'utf8');

// Replace the corrupted blockquote with proper HTML entities
content = content.replace(/<blockquote>[\s\S]*?inner alignment\.[\s\S]*?<\/blockquote>/, '<blockquote>&ldquo;Healing is not magic &mdash; it&apos;s inner alignment.&rdquo;</blockquote>');

fs.writeFileSync('src/components/Pages.tsx', content, 'utf8');

// Verify that no \uFFFD characters remain in the file
const remaining = content.indexOf('\uFFFD');
console.log("Remaining \\uFFFD index:", remaining);
