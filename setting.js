const fs = require('fs')
const chalk = require('chalk')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
//————————————————————————//
//TELEGRAM BOT
global.OWNER_NAME = "Hams Offc"
global.OWNER_NUMBER = ["6282117696469"]
global.OWNER = ["hamsoffc", "http://t.me/hamsoffc"]
global.TOKEN = '8128135647:AAGqLTQi0RxTTSsqf-PsdyOWnE4l9_UchJk'

// SYSTEM
global.pairing = '6289526149554'
global.prefa = ['','.']
global.usePairingCode = true

// BOT SETUP
global.thumbnail = 'https://img100.pixhost.to/images/106/533172682_ham-bot.jpg'
global.ownername = 'Hams Offc'
global.owner = ['6282117696469', '6285781549773']
global.botname = 'Ham-Bot'
global.limitawal = 25
global.pushname = 'HamsOffc'
global.idch = '120363223430241434@newsletter'
global.idch2 = '120363278683627429@neswletter'
global.gc = 'https://chat.whatsapp.com/LNYpG8Jq0JU6F8QJBGMa8I'
global.packname = "Nomor Bot : 6289526149554\nhttps://www.h-pay.my.id\n\nOwner Bot By:\n𝙃𝘼𝙈 𝘽𝙊𝙏𝙕𝙕🜲\n🦠⃢⃟⃝🦠🔰💠𖣐𝙃𝘼𝙈★𝘽𝙊𝙏𝙕𝙕𖣐💠🔰🦠⃢⃟⃝🦠⁩⁩\nCiee Gk Bisa Colong Stiker Nya 🐼\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..."
global.author = "🜲⁩•︻ཉོ༙ཬ❰❰𝙃𝘼𝙈❱❱❱章브๏❨𝙓𝙔𝙕❩๏ຼົะ»•🜲\n𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢: @ughbmm\n\n\n\n\n\n🜲⁩ 𝙃𝘼𝙈 𝘽𝙤𝙩-𝙈𝘿 🜲"
global.themeemoji = "🔸"
// GMAIL
global.email = 'ibham913@gmail.com'
global.user_app_password = 'wgiujcvxhjkdpdbb'
global.subject = 'Verify Account'

// SAWERIA
global.mail = 'ibham913@gmail.com' 

// APIKEY 
global.btbtzz = 'hambot' // https://api.betabotz.eu.org/
global.end = 'hambot' // https://endpoint.web.id/

global.mess = {
    ban: Styles('*[ System Access Failed ]* you are banned by the owner'),
    badm: Styles('*[ System Notice ]* please add bot *admin*'),
    regis: Styles(`*[ System Access Failed ]*\n\nKamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur*`),
    premium: Styles('*[ System Notice ]* this only premium user'),
    search: Styles('🔍 *Search for server. . .*'),
    done: Styles('Done Ga Bang?? Done...'),
    success: Styles('*[ Loaded Success ]*'),
    admin: Styles('*[ System Notice ]* for *admin!* not *npc*'),
    owner: Styles('*[ System Access Failed ]* Access Denied'),
    group: Styles('*[ System Notice ]* Use this in group chat!'),
    private: Styles('*[ System Notice ]* Use this in private chat!'),
    bot: Styles('*[ System Notice ]* Only Bot user'),
    wait: Styles('*[ Loading ]* Tunggu bentar mek🗿🚬'),
    getdata: Styles('Scraping metadata . . .'),
    fail: Styles('Can\'t get metadata!'),
    error: Styles('*[ System Failed ]* Error, please contact the owner'),
    errorF: Styles('*[ System Failed ]* Sorry this feature is in error.'),
    endLimit: Styles('*[ System Failed ]* Limit Habis Tunggu Sampai Jam 00:00'),
}

// CPANEL SETTING

global.host = "https://host.digital-ham.web.id"
global.application = {
  api_key: "ptla_A3Rgxh9Dg539idrJEed5rK7yD7RrbS7XN1zc6LQp6s0",
  c_api_key: "ptlc_749GPYkN9LZIqSfBIpXHOw7ZsgHzZJKyCwttZrn142g"
}
global.eggs = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah by telegram 
global.location = '1' // id location by telegram 
global.serverCreate = {
  nestId: "5", //Nest Id panel lu
    eggId: "15", //Egg Id panel lu
  limits: {
    db: "1", //Mending ga usah diganti
    backups: "1", //Mending ga usah diganti
    allocation: "0" //Mending ga usah diganti
  },
  eggs: {
    environment: {
      "CMD_RUN": "npm start", //Sesuaiin sama eggs lu
      "GIT_ADDRESS": "",
      "BRANCH": "",
      "USERNAME": "",
      "ACCESS_TOKEN": ""
    }
  }
}

global.rpg = { // Serah Mau Diubah Apa Nggak
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
//————————————————————————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Succes Update : '${__filename}'`))
	delete require.cache[file]
	require(file)
})