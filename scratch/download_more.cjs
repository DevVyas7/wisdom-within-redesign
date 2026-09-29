const fs = require("fs"); const https = require("https"); const urls = [
"https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/WhatsApp%20Image%202026-08-02%20at%204.19.16%20PM.jpeg",
"https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/%23Infocentro%20%F0%9F%93%A2%20Estudio%20revela%20a%20qu%C3%A9%20velocidad%20.jpg",
"https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/download%20(3).jpeg",
"https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/7%20chakras%20concept%20_%20Premium%20AI-generated%20image.jpg"
];
urls.forEach((url, i) => {
  https.get(url, res => {
    const file = fs.createWriteStream(`scratch/img_more_${i}.jpg`);
    res.pipe(file);
  });
});
