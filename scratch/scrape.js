fetch("https://thewisdombharat.com/").then(r=>r.text()).then(html=>{const regex=/<img[^>]+src=["']([^"']+)["']/g; let match; while((match=regex.exec(html))!==null){console.log(match[1]);}});
