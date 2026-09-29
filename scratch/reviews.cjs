const fs = require("fs"); const html = fs.readFileSync("scratch/home.html", "utf8"); const idx = html.indexOf("Reviews</h2>"); if(idx > -1) console.log(html.substring(idx, idx + 1000));
