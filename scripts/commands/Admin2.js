module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "Admin information", 
  usages: "/admin",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.postimg.cc/LXJyQ3xj/inbound260887169487631977.jpg",
"https://i.postimg.cc/LXJyQ3xj/inbound260887169487631977.jpg"];
  
var callback = () => api.sendMessage({body:  𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐀𝐁𝐃𝐔𝐋 𝐆𝐎𝐍𝐈 𝐒𝐇𝐀𝐖𝐎𝐍
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐌𝐃 𝐆𝐎𝐍𝐈
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐆𝐀𝐅𝐀𝐑𝐆𝐎𝐀𝐍 , 𝐌𝐘𝐌𝐄𝐍𝐒𝐇𝐈𝐍𝐆
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐃𝐇𝐀𝐊𝐀 𝐀𝐈𝐑𝐏𝐎𝐓 , 𝐁𝐃
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏8+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : 𝐚𝐛𝐝𝐮𝐥𝐠𝐨𝐧𝐢𝐬𝐡𝐚𝐰𝐨𝐧@𝐠𝐦𝐚𝐢𝐥.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801615804476
𝐏𝐡𝐨𝐧𝐞 𝐍𝐮𝐦𝐛𝐞𝐫 : +8801615804476 𝐨𝐫 +8801719811456
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/gaminggoni2005
 https://www.facebook.com/goni2005
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
