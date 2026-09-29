const fs = require("fs"); const https = require("https"); const urls = [
"https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/1dd2535ef9a08ffbb3ac1529ad928fcf.jpg",
"https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/5142beb719a213ac0d418fc858572595.jpg",
"https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/7ae4523d9f656335b95b4a1a72700485.jpg",
"https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/7352bd7c0896b48c9ebcce99cbc5f3eb.jpg",
"https://img1.wsimg.com/isteam/ip/f781fbeb-6590-4b29-9a04-a94f51cadf95/blob-07898e5.png"
];
urls.forEach((url, i) => {
  https.get(url, res => {
    const file = fs.createWriteStream(`scratch/img_${i}.jpg`);
    res.pipe(file);
  });
});
