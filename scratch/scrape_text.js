fetch("https://thewisdombharat.com/").then(r=>r.text()).then(html=>{console.log(html.includes("Gallery")); console.log(html.includes("Photo"));});
