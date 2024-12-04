/*

</> Nova Tech Gen 2
- By SanzMD
- Tq All Creator Bot
- Tq All Penyedia Res Api

*/

//————————————————————————//
process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType, generateWAMessageFromContent, proto, prepareWAMessageMedia  } =require("@whiskeysockets/baileys")
const fs = require('fs') 
const os = require('os')
const ms = require("ms")
const dns = require('dns')
const path = require("path")
const util = require('util')
const chalk = require('chalk')
const https = require('https')
const axios = require('axios')
const crypto = require('crypto')
const gtts = require('node-gtts')
const fg = require('api-dylux')
const { spawn: spawn, exec } = require('child_process')
const yts = require('yt-search')
const FormData = require('form-data')
const nou = require("node-os-utils")
const Groq = require("groq-sdk")
const cheerio = require('cheerio')
const speed = require('performance-now')
const moment = require('moment-timezone')
const fromBuffer = require("file-type")
const genshindb = require("genshin-db")
const googleTTS = require('google-tts-api')
const jsobfus = require("javascript-obfuscator")
const translate = require("@vitalets/google-translate-api")
const { Sticker } = require('wa-sticker-formatter');
const { smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize, randomNumber } = require('./SanzAll/SanzLibrary/myfunction')
const { nglspam , sdxl, upload } = require('./SanzAll/SanzLibrary/nvscrape')
const { Saweria } = require("./SanzAll/SanzLibrary/saweria")
let db_saweria = JSON.parse(fs.readFileSync('./SanzAll/SanzDatabase/saweria.json'));
let { UploadFileUgu, webp2mp4File, telegraPh } = require('./SanzAll/SanzLibrary/uploader')
const { cerpen } = require('./SanzAll/SanzLibrary/cerpen')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./SanzAll/SanzLibrary/converter.js")
const chApi = require('./SanzAll/SanzLibrary/noapi.js')
const { sticker, addExif } = require("./SanzAll/SanzLibrary/sticker");
const { Igdl } = require("./SanzAll/SanzLibrary/igdl.js");
const { Fbdl } = require("./SanzAll/SanzLibrary/fbdl.js");
//————————————————————————//
let bad = JSON.parse(fs.readFileSync('./SanzAll/SanzDatabase/anti/badword.json'))
const { Sanz_antispam } = require('./SanzAll/SanzLibrary/antispam')

// DB STORE AND GAME
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./SanzAll/SanzLibrary/list')

const db_respon_list = JSON.parse(fs.readFileSync('./SanzAll/SanzDatabase/store/list.json'))
//————————————————————————//
module.exports = nova = async (nova, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
//————————————————————————//

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

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
//————————————————————————//
//const isCmd = body.startsWith(prefix)
//const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await nova.decodeJid(nova.user.id)
const isDev = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
		if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "multi") {
			var thePrefix = "𝐌𝐔𝐋𝐓𝐈"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
		} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "no") {
			var thePrefix = "𝐍𝐎"
			var prefix = ""
			var isCmd = body.startsWith(prefix)
			var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
		} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "all") {
			var thePrefix = "𝐀𝐋𝐋"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
		} else {
			var thePrefix = "𝐌𝐔𝐋𝐓𝐈"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
		}
const text = q = args.join(" ")
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isViewOnce = (type == 'viewOnceMessageV')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await nova.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = Styles(`Good Night`)
 }
 if(time2 < "19:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "18:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "15:00:00"){
var stime = Styles(`Good Afternoon`)
 }
 if(time2 < "11:00:00"){
var stime = Styles(`Good Morning`)
 }
 if(time2 < "05:00:00"){
var stime = Styles(`Good Morning`)
 }
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	

/*FUNCTION REACHET ]*/

async function sendReactions(m) {
    await nova.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
    await nova.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
    await nova.sendMessage(m.chat, { react: { text: "🕕" ,key: m.key } });
    await nova.sendMessage(m.chat, { react: { text: "🕘" ,key: m.key } });
}

/*PEMANGGILANNYA
await sendReactions(m);*/

//————————————————————————//
//DB

try {
 let isNumber = x => typeof x === 'number' && !isNaN(x)
 let limitUser = isDev ? 1000 : limitawal
 let user = global.db.data.users[m.sender]
   if (typeof user !== 'object') global.db.data.users[m.sender] = {}
   if (user) {
if (!isNumber(user.exp)) user.exp = 100
if (!isNumber(user.darah)) user.darah = 100
if (!isNumber(user.besi)) user.besi = 10
if (!isNumber(user.emas)) user.emas = 10
if (!isNumber(user.emerald)) user.emerald = 10
if (!isNumber(user.potion)) user.potion = 10
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.key)) user.key = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.money)) user.money = 100
if (!isNumber(user.kucing)) user.kucing = 0
if (!isNumber(user.anjing)) user.anjing = 0
if (!isNumber(user.anjingexp)) user.anjingexp = 0    
if (!isNumber(user.kucingexp)) user.kucingexp = 0    
if (!isNumber(user.nagaexp)) user.nagaexp = 0     
if (!isNumber(user.kyubiexp)) user.kyubiexp = 0     
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.apel)) user.apel = 0
if (!('codemail' in user)) user.codemail = ''
if (!('gid' in user)) user.gid = ''
if (!('owner' in user)) user.owner = false
if (!isNumber(user.kyubi)) user.kyubi = 0
if (!isNumber(user.naga)) user.naga = 0
if (!isNumber(user.rubah)) user.rubah = 0
if (!isNumber(user.serigara)) user.serigala = 0
if (!('gmail' in user)) user.gmail = ''
if (!isNumber(user.kuda)) user.kuda = 0
if (!isNumber(user.elang)) user.elang = 0
if (!isNumber(user.feedpet)) user.feedpet = 0
if (!('regp' in user)) user.regp = false
if (!isNumber(user.bar)) user.bar = 100
if (!isNumber(user.rename)) user.rename = 0
if (!isNumber(user.toxicamount)) user.toxicmount = 0
if (!('mailcode' in user)) user.mailcode = ''
if (!isNumber(user.invalidcode)) user.invalidcode = 0
if (!isNumber(user.paus)) user.paus = 1
if (!isNumber(user.kepiting)) user.kepiting = 1
if (!isNumber(user.gurita)) user.gurita = 1
if (!isNumber(user.cumi)) user.cumi = 1
if (!isNumber(user.buntal)) user.buntal = 1
if (!isNumber(user.dory)) user.dory = 1
if (!isNumber(user.lumba)) user.lumba = 1
if (!isNumber(user.lobster)) user.lobster = 1
if (!isNumber(user.hiu)) user.hiu = 1
if (!isNumber(user.udang)) user.udang = 1
if (!isNumber(user.ikan)) user.ikan = 1
if (!isNumber(user.nila)) user.nila = 1
if (!isNumber(user.bawal)) user.bawal = 1
if (!isNumber(user.lele)) user.lele = 1
if (!isNumber(user.orca)) user.orca = 1
if (!isNumber(user.banteng)) user.banteng = 1
if (!isNumber(user.harimau)) user.harimau = 1
if (!isNumber(user.gajah)) user.gajah = 1
if (!isNumber(user.kambing)) user.kambing = 1
if (!isNumber(user.panda)) user.panda = 1
if (!isNumber(user.buaya)) user.buaya = 1
if (!isNumber(user.kerbau)) user.kerbau = 1
if (!isNumber(user.sapi)) user.sapi = 1
if (!isNumber(user.monyet)) user.monyet = 1
if (!isNumber(user.babihutan)) user.babihutan = 1
if (!isNumber(user.babi)) user.babi = 1
if (!isNumber(user.ayam)) user.ayam = 1
if (!isNumber(user.sate)) user.sate = 0
if (!isNumber(user.ayamg)) user.ayamg = 0
if (!isNumber(user.ikang)) user.ikang = 0
if (!isNumber(user.mie)) user.mie = 0
if (!isNumber(user.sops)) user.sops = 0
if (!('chatbot' in user)) user.chatbot = false
if (!('chatbotlast' in user)) user.chatbotlast = ''
if (!('botlast' in user)) user.botlast = ''
if (!('badword' in user)) user.badword = 0
if (!isNumber(user.limit)) user.limit = limitUser
   } else global.db.data.users[m.sender] = {
mie: 0,
miem: 0,
sops: 0,
paus: 1,
boxs: 1,
kepiting: 1,
gurita: 1,
cumi: 1,
buntal: 1,
dory: 1,
lumba: 1,
lobster: 1,
hiu: 1,
lele: 1,
nila: 1,
bawal: 1,
udang: 1,
ikan: 1,
orca: 1,
banteng: 1,
harimau: 1,
gajah: 1,
kambing: 1,
panda: 1,
buaya: 1,
kerbau: 1,
sapi: 1,
monyet: 1,
babihutan: 1,
babi: 1,
ayam: 1,
ikang: 0,
ayamg: 0,
sate: 0,
level: 0,
darah: 100,
autolevelup: true,
bar: 100,
gmail: '',
toxicmount: 0,
gid: '',
birthdaySet: false,
birthday: 0,
besi: 10,
owner: false,
regp: false,
cai: '',
codemail: '',
bibitanggur: 0,
bibitapel: 0,
bibitpisang: 0,
bibitmangga: 0,
bibitjeruk: 0,
apel: 0,
anggur: 0,
mangga: 0,
pisang: 0,
jeruk: 0,
cm: 0,
atm: 0,
kucing: 0,
naga: 0,
feedpet: 0,
kuda: 0,
kyubi: 0,
anjing: 0,
elang: 0,
rubah: 0,
elang: 0,
serigala: 0,
cl: 0,
cu: 0,
emas: 10,
emerald: 10,
potion: 10,
sword: 0,
armor: 0,
key: 0,
role: '',
money: 100,
chatbotlast: '',
botlast: '',
chatbot: false,
badword: 0,
limit: limitUser,
   }
   } catch (err) {
    console.log(err)
   }

               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antilinkgc: false
               }

let limitnya = db.data.users[m.sender].limit

if(!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
if(!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []

async function uselimit() {
if (isDev) return
db.data.users[m.sender].limit -= 1
}

const user = global.db.data.users[m.sender] 
const changelogs = global.db.data.changelog || []
//————————————————————————//
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = async(teks) => {nova.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}

// SECURE FUNC

//ANTI VIEWONCE
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await nova.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
    
//ANTI SPAM KICK
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && Sanz_antispam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await nova.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
// ANTI PROMOTION
if (db.data.chats[m.chat].
promotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(isDev) return
if (isAdmins) return
nova.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
nova.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

//ANTI VIRUS
if (m.isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return reply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
nova.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(isDev) return
nova.groupParticipantsUpdate(from, [sender], 'remove')
await nova.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
nova.sendMessage(`${owner}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${m.isGroup?`in ${groupName}`:''}`})
 }
 }
 
// ANTI BOT
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          reply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await nova.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
// ANTI MEDIA
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (isDev || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return nova.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }

// ANTI IMAGE
        if (db.data.chats[m.chat].image && isLorenzoMedia) {
    if(isLorenzoMedia === "imageMessage"){
        if (isDev || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return nova.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI VIDEO
        if (db.data.chats[m.chat].antivideo && isLorenzoMedia) {
    if(isLorenzoMedia === "videoMessage"){
        if (isDev || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return nova.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTU STICKER
        if (db.data.chats[m.chat].antisticker && isLorenzoMedia) {
    if(isLorenzoMedia === "stickerMessage"){
        if (isDev || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return nova.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI AUDIO
        if (db.data.chats[m.chat].antiaudio && isLorenzoMedia) {
    if(isLorenzoMedia === "audioMessage"){
        if (isDev || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return nova.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI POLLING
       if (db.data.chats[m.chat].antipoll && isLorenzoMedia) {
    if(isLorenzoMedia === "pollCreationMessage"){
        if (isDev || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return nova.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI LOCATION
       if (db.data.chats[m.chat].antilocation && isLorenzoMedia) {
    if(isLorenzoMedia === "locationMessage"){
        if (isDev || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return nova.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI DOCUMENT
       if (db.data.chats[m.chat].antidocument && isLorenzoMedia) {
    if(isLorenzoMedia === "documentMessage"){
        if (isDev || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return nova.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTI CONTACT
      if (db.data.chats[m.chat].anticontact && isLorenzoMedia) {
    if(isLorenzoMedia === "contactMessage"){
        if (isDev || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return nova.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// BADWORD
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  nova.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			nova.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }

// ANTI LINK GC DEL
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isDev) return reply(bvl)
               await nova.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			nova.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }

// ANTI LINK DEL
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isDev) return reply(bvl)
               await nova.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			nova.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
//————————————————————————//
// FUNCTION

const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
async function downloadAndSaveMedia(media) {
        try {
          const tempDir = './temp';

          if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
          }

          const fileName = `mediaFile_${Date.now()}.jpg`; 
          const filePath = path.join(tempDir, fileName);

          fs.writeFileSync(filePath, media);
          return filePath;
        } catch (error) {
          console.error('Error while saving media:', error);
        }
      }

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function monospace(string) {
return '```' + string + '```'
}

function generateRandomPassword() {
  const characters = '1234568910';
  const length = 5;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function handleFeatureToggle(feature, command) {
    if (!m.isGroup) return onlyGroup();
    if (!isBotAdmins) return onlyBadmin();
    if (!isAdmins && !isDev) return onlyAdmin();
    if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan');

    if (args[0] === 'on') {
        db.data.chats[from][feature] = true;
        return reply(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.data.chats[from][feature] = false;
        return reply(`${command} is disabled`);
    }
}

async function clearTempFolder() {
const fs = require('fs')
    fs.readdir(process.cwd() + '/temp/', (err, files) => {
        if (err) {
            console.error('Gagal membaca folder tmp:', err);
            return;
        }
        files.forEach(file => {
            const filePath = process.cwd() + '/temp/' + file;
            fs.unlink(filePath, err => {
                if (err) {
                    console.error('Gagal menghapus file:', err);
                }
            });
        });
    });
};

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

const groq = new Groq({
    apiKey: "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",
});

async function downloadFileFromUrl(url, id) {
    const fs = require('fs')
    const axios = require('axios')
    const tempDir = "./temp";
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    const filePath = path.join(tempDir, `${id}.mp3`);
    const response = await axios({
        url,
        method: "GET",
        responseType: "stream",
    });

    const writer = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
        response.data.pipe(writer);
        let error = null;
        writer.on("error", (err) => {
            error = err;
            writer.close();
            reject(err);
        });
        writer.on("close", () => {
            if (!error) {
                resolve(filePath);
            }
        });
    });
}

async function voiceRecognition(stream) {
const fs = require('fs')
    return new Promise(async (resolve, reject) => {
        try {
            const recog = await groq.audio.transcriptions.create({
                file: fs.createReadStream(stream),
                model: "whisper-large-v3",
                prompt: "Kamu adalah alat untuk convert, Speach To Text",
                temperature: 0.35,
                language: "id",
                response_format: "verbose_json",
            });
            resolve(recog.text);
        } catch (v) {
            reject(v);
        }
    });
}

        if (m.mtype === "audioMessage") {
            let audio = await upload(await m.download());
            let url = await downloadFileFromUrl(audio, makeid(2));
            let result = await voiceRecognition(url);
            await nova.appendTextMessage(m, `${result}`, chatUpdate);
            clearTempFolder();
        }

        async function makeid(length) {
          var result = "";
          var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }

function generateRandomUserCode() {
    return new Promise((resolve) => {
        const prefix = 'user-';
        const dateBuffer = Buffer.from(Date.now().toString());
        const randomCode = dateBuffer.toString('hex').slice(-5);
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
        let code = '';
        for (let i = 0; i < 5; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        const finalCode = `${prefix}${randomCode}${code}`;
        resolve(finalCode);
    });
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `HamsOffc`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

    const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": budy || m.mtype,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}                

nova.autoshalat = nova.autoshalat ? nova.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? nova.user.id : m.sender
	let id = m.chat 
    if(id in nova.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:06',
    terbit: '05:30',
    dhuha: '05:55',
    dzuhur: '11:44',
    ashar: '14:10',
    magrib: '17:58',
    isya: '18:59',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`
    nova.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete nova.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }


/*[🌟] => FUNCTION

⚙️ : Auto backup & clean directory
👨‍💻 : Tanaka Domp
🧁 : https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h
❗ : Do not delete wm

const backupAndCleanup = async () => {
    const foldersToBackup = ['Storage'];
    const backupCommand = `tar -czf backup.tar.gz ${foldersToBackup.join(' ')}`;
    
    exec(backupCommand, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error 4: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error 5: ${stderr}`);
            return;
        }
        
        console.log("Backup selesai, file bernama backup.tar.gz");
        
        await sleep(4000);
        const qcbackup = {
            key: {
                remoteJid: 'status@broadcast',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                newsletterAdminInviteMessage: {
                    newsletterJid: `120363223430241434@newsletter`,
                    newsletterName: `Hore`,
                    jpegThumbnail: "",
                    caption: 'Succes mencadangkan Database🌟',
                    inviteExpiration: Date.now() + 1814400000
                }
            }
        };        

        const sesi = await fs.readFileSync('./backup.tar.gz');
        await nova.sendMessage(owner0, {
            document: sesi,
            mimetype: 'application/zip',
            fileName: 'backup.zip'
        }, { quoted: qcbackup });

        await sleep(6000);
        const directoryPath = path.join(); // Specify the directory path if needed

        fs.readdir(directoryPath, async (err, files) => {
            if (err) {
                console.error(`Error reading directory: ${err.message}`);
                return;
            }

            const filteredArray = files.filter(item =>
                item.endsWith("gif") ||
                item.endsWith("png") || 
                item.endsWith("mp3") ||
                item.endsWith("mp4") || 
                item.endsWith("opus") || 
                item.endsWith("jpg") ||
                item.endsWith("webp") ||
                item.endsWith("webm") ||
                item.endsWith("gz") ||
                item.endsWith("zip")
            );

            if (filteredArray.length > 0) {
                const teks = `Terdeteksi ${filteredArray.length} file sampah,\nFile sampah telah di hapus🚮`;
                nova.sendMessage(owner0, { text: teks });

                filteredArray.forEach(file => {
                    if (fs.existsSync(file)) {
                        fs.unlinkSync(file);
                    }
                });
            } else {
                console.log("File sampah telah hilang");
            }
        });
    });
};

// Menjalankan fungsi backupAndCleanup sekali sehari
const runDailyBackup = () => {
    backupAndCleanup();
    setTimeout(runDailyBackup, 24 * 60 * 60 * 1000); // 24 jam
};

// Memulai proses
runDailyBackup();*/

// Similarity By SanzMD
const fs = require('fs');
const didyoumean = require('didyoumean');
const similarity = require('similarity');

function getCaseNames() {
  try {
    const data = fs.readFileSync('./nova.js', 'utf8');
    const casePattern = /case\s+'([^']+)'/g;
    const matches = data.match(casePattern);

    if (matches) {
      return matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
    } else {
      return [];
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    throw error; // or return a more informative error message
  }
}

if (prefix && command) {
  const caseNames = getCaseNames();
  let noPrefix = m.text.replace(prefix, '').trim();
  let mean = didyoumean(noPrefix, caseNames);
  let sim = similarity(noPrefix, mean);
  let similarityPercentage = parseInt(sim * 100);

  if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
    const respony = (`Maaf, command yang Anda masukkan salah. Berikut adalah command yang mungkin sesuai:\n\n➠  *${prefix + mean}*\n➠  *Kemiripan:* ${similarityPercentage}%`);
    // assuming reply is a function that sends a response
    reply(respony);
  }
}

let totalFitur = () =>{
var mytext = fs.readFileSync("./nova.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
        }       
        
const listCase = () => {
const code = fs.readFileSync("./nova.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
} 
let teks = Styles(`*Total Case*: ${matches.length} \n\n`)
matches.forEach(function (x) {
   teks += "  ◦  " + x + "\n"
})
return teks
}

const unoDatabasePath = './SanzAll/SanzDatabase/uno_games.json';

function readUnoGameData() {
    if (fs.existsSync(unoDatabasePath)) {
        const data = fs.readFileSync(unoDatabasePath);
        return JSON.parse(data);
    }
    return {};
}

    async function Nekohime(filePath) {
      try {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath));
        const response = await axios.post('https://cdn.nekohime.xyz/upload', formData, {
          headers: {
            ...formData.getHeaders(),
          },
        });

        return response.data.files;
      } catch (error) {
        throw new Error(`Gagal mengunggah file ke CDN: ${error.message}`);
      }
    }

function writeUnoGameData(data) {
    fs.writeFileSync(unoDatabasePath, JSON.stringify(data, null, 2));
}

const gamesFilePath = './SanzAll/SanzDatabase/games.json';

function readGamesData() {
    if (!fs.existsSync(gamesFilePath)) {
        fs.writeFileSync(gamesFilePath, JSON.stringify({}));
    }
    const data = fs.readFileSync(gamesFilePath);
    return JSON.parse(data);
}

function writeGamesData(data) {
    fs.writeFileSync(gamesFilePath, JSON.stringify(data, null, 2));
}
//————————————————————————//
if (!nova.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
nova.sendPresenceUpdate('available', m.chat)
  const b = body;
  console.log(
    `\x1b[1;31m~\x1b[1;37m> [\x1b[1;32m HAM-BOT\x1b[1;37m]\n\n - Waktu ${chalk.yellow(time)}\n - Dari ${chalk.blue(pushname)}\n - Di ${chalk.yellow(
      groupName ? groupName : "Private Chat"
    )}\n - args : ${chalk.white(args.length)} - Pesan : ${chalk.green(b)}`
  );
            }
//————————————————————————//
// Response Addlist
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
nova.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
nova.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}
//————————————————————————//
// MESSAGE AREA

        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `Ham - Development`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;riell,;;;\nFN:"HamsOffc"\nitem1.TEL;waid="HamsOffc":+${owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': global.thumbnail,
                    thumbnailUrl: global.thumbnail,
                    sendEphemeral: true
                }   
            }
        }

//onlyOwner
const onlyOwner = async() =>{
  let toks = Styles(`Hai kak ${pushname}\nCommand Hanya Untuk Owner Bot`)
    let contextInfo = {
      forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: global.ownername
          },
    externalAdReply: {
    showAdAttribution: true,
    title: 'ＡＫＳＥＳ ＤＩ ＴＯＬＡＫ ❌',
    body: "Ham-Bot V2.0",
    previewType:"PHOTO",
    thumbnailUrl: global.thumbnail,
    sourceUrl: "h-pay.my.id"
    }
    }

    nova.sendMessage(from, { contextInfo, text: `${toks}\n\n⫹⫺ @${sender.split('@')[0]}`}, { quoted: fcall })
    }
  //onlyAdmin
  const onlyAdmin = async() =>{
  let toks = Styles(` Hai ${pushname}\nCommand Hanya Untuk Admin Group`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: 100,
            newsletterName
            },
      externalAdReply: {
      showAdAttribution: true,
      title:'ＡＫＳＥＳ ＤＩ ＴＯＬＡＫ ❌',
      body: "Ham-Bot V2.0",
      previewType:"PHOTO",
      thumbnailUrl: global.thumbnail,
      sourceUrl: "h-pay.my.id"
      }
      }

      nova.sendMessage(from, { contextInfo, text: `${toks}\n\n⫹⫺ @${sender.split('@')[0]}`}, { quoted: fcall })
      }
  //onlyAdmin
  const onlyBadmin = async() =>{
  let toks = Styles(` Hai ${pushname}\nJadikan ${botName} Sebagai Admin Terlebih Dahulu`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: 100,
            newsletterName
            },
      externalAdReply: {
      showAdAttribution: true,
      title:'ＡＫＳＥＳ ＤＩ ＴＯＬＡＫ ❌',
      body: "Ham-Bot V2.0",
      previewType:"PHOTO",
      thumbnailUrl: global.thumbnail,
      sourceUrl: "h-pay.my.id"
      }
      }

      nova.sendMessage(from, { contextInfo, text: `${toks}\n\n⫹⫺ @${sender.split('@')[0]}`}, { quoted: fcall })
  }
  //onlyPremium
  const onlyPremium = async() =>{
    let toks = Styles(`Hallo ${pushname}\nCommand Hanya Untuk User Premium Silahkan Upgrade ke Premium Untuk Menggunakan Command Ini` )
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: global.ownername
          },
      externalAdReply: {
      showAdAttribution: true,
      title: 'ＡＫＳＥＳ ＤＩ ＴＯＬＡＫ ❌',
      body: "Ham-Bot V2.0",
      previewType:"PHOTO",
      thumbnailUrl: global.thumbnail,
      sourceUrl: "h-pay.my.id"
      }
      } 

      nova.sendMessage(from, { contextInfo, text: `${toks}\n\n⫹⫺ @${sender.split('@')[0]}`}, { quoted: fcall })
      }
  //onlyGroup
  let toks = Styles(`Hallo ${pushname}\nSaat Ini Tindakan kamu di batasi oleh Dev Hams\nMinta Acc Dulu ya`)
  const onlyGroup = async() =>{
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: global.ownername
          },
      externalAdReply: {
      showAdAttribution: true,
      title: 'ＡＫＳＥＳ ＤＩ ＴＯＬＡＫ ❌',
      body:'',
      previewType:"PHOTO",
      thumbnailUrl: global.thumbnail,
      sourceUrl:''
      }
      }

      nova.sendMessage(from, { contextInfo, text: `${toks}\n\n⫹⫺ @${sender.split('@')[0]}`}, { quoted: fcall })
      }
  const onlyLimit = async() => {
let yameteh = `*乂 Limit - Expired*

Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!`
nova.sendMessage(from, {text: yameteh},{quoted: fkontak})
}
//————————————————————————//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: nova.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, nova.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
nova.ev.emit('messages.upsert', msg)
}

//————————————————————————//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//————————————————————————//
const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
try {
    delete require.cache[require.resolve(filePath)]
    const plugin = require(filePath)
    plugin.filePath = filePath
    plugins.push(plugin)
} catch (error) {
    console.error(`Error loading plugin at ${filePath}:`, error)
}
                }
            })
        }
    })
    return plugins
}
const plugins = loadPlugins(path.resolve(__dirname, "./SanzAll/SanzPlugin"))
const context = { nova, m, chatUpdate, store, body, require, smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, budy, prefix, isCmd, command, args, pushname, text, q, quoted, mime, isMedia, botNumber, isDev, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, time, salam, reply }
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}
//————————————————————————//
//DB BASIC 
  
function formatCurrency(amount) {
  return `${amount.toLocaleString()}zm`; 
}

let formattedMoneyZ;
if (global.db.data.users[m.sender].money && global.db.data.users[m.sender]) {
formattedMoneyZ = formatCurrency(global.db.data.users[m.sender].money);
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
				if (!("autobio" in setting)) setting.autobio = false
				if (!("autoread" in setting)) setting.autoread = false
				if (!("autoTyping" in setting)) setting.autoTyping = false
				if (!("autoRecord" in setting)) setting.autoRecord = true
				if (!("setPrefix" in setting)) setting.setPrefix = "multi" //multi, no, all				
                if (!isNumber(setting.status)) setting.status = 0
            } else global.db.data.settings[botNumber] = {
                status: 0,
				autobio: false,
				autoTyping: false,
				autoRecord: true,
				setPrefix: "all", //multi, no, all
				autoread: false                
            }

//AUTO MODE
		if (!m.key.fromMe && db.data.settings[botNumber].autoread) {
			const readkey = {
				remoteJid: m.chat,
				id: m.key.id,
				participant: m.isGroup ? m.key.participant : undefined
			}
			await nova.readMessages([readkey]);
		}
		nova.sendPresenceUpdate("available", m.chat)
		if (db.data.settings[botNumber].autoTyping) {
			if (m.message) {
				nova.sendPresenceUpdate("composing", m.chat)
			}
		}
		if (db.data.settings[botNumber].autoRecord) {
			if (m.message) {
				nova.sendPresenceUpdate("recording", m.chat)
			}
		}
		if (db.data.settings[botNumber].autobio) {
			let setting = db.data.settings[botNumber]
			if (new Date() * 1 - setting.status > 1000) {
				let uptime = await runtime(process.uptime())
				await nova.updateProfileStatus(`Created By : HamsOffc || Runtime : ${uptime}`)
				setting.status = new Date() * 1
			}
		}
//AUTO AI

if (m.text && global.db.data.users[m.sender].chatbot && !isCmd) {
let hann2 = text
const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const path = require("path");
  const Used_Apikey = "AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ"
  const genAI = new GoogleGenerativeAI(Used_Apikey);
  const fileManager = new GoogleAIFileManager(Used_Apikey);
const modell = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `Kamu Adalah Ham-Bot Yang Dibuat Oleh Hams , Kamu Support Realtime , Tanggal Sekarang Adalah ${tanggal2} Dan Waktu ${time} , utamakan Menggunakan Bahasa Indonesia Dan Daerah Indonesia Saja, Gunakan Sedikit Juga Bahasa Gaul Didalamnya, sedikit info orang yang sedang berinteraksi dengan kamu bernama ${pushname}, ini pesan user tadi "${global.db.data.users[m.sender].chatbotlast}" Dan Kamu Tadi Bilang Ini Ke User "${global.db.data.users[m.sender].botlast}" ngobrol dengan user nyambung ya!.`,
});
const promptt = hann2;
const resultp = await modell.generateContent(promptt);
const responseqo = await resultp.response;
const textl = responseqo.text();
reply(textl);
    global.db.data.users[m.sender].chatbotlast = m.text
    global.db.data.users[m.sender].botlast = textl
    }
//————————————————————————//
// DATABASE RPG GAMES
const addDarah = (sender, amount) => {
const addD = db.data.users[sender].darah += amount
return addD
}

const kurangDarah = (sender, amount) => {
const kurD = db.data.users[sender].darah -= amount
return kurD
}

const getDarah = (sender) => {
const cekD = db.data.users[sender].darah
return cekD
}

const addBar = (sender, amount) => {
const addB = db.data.users[sender].bar += amount
return addB
}

const kurangBar = (sender, amount) => {
const kurB = db.data.users[sender].bar -= amount
return kurB
}

const getBar = (sender) => {
const cekB = db.data.users[sender].bar
return cekB
}  

const addBesi = (sender, amount) => {
const addB = db.data.users[sender].besi += amount
return addB
}

const kurangBesi = (sender, amount) => {
const kurB = db.data.users[sender].besi -= amount
return kurB
}

const getBesi = (sender) => {
const cekB = db.data.users[sender].besi
return cekB
}

const addEmas = (sender, amount) => {
const addM = db.data.users[sender].emas += amount
return addM
}

const kurangEmas = (sender, amount) => {
const kurM = db.data.users[sender].emas -= amount
return kurM
}

const getEmas = (sender) => {
const cekM = db.data.users[sender].emas
return cekM
}

const addEmerald = (sender, amount) => {
const addM = db.data.users[sender].emerald += amount
return addM
}

const kurangEmerald = (sender, amount) => {
const kurM = db.data.users[sender].emerald -= amount
return kurM
}

const getEmerald = (sender) => {
const cekM = db.data.users[sender].emerald
return cekM
}

const addPotion = (sender, amount) => {
const addM = db.data.users[sender].potion += amount
return addM
}

const kurangPotion = (sender, amount) => {
const kurM = db.data.users[sender].potion -= amount
return kurM
}

const getPotion = (sender) => {
const cekM = db.data.users[sender].potion
return cekM
}

const addCM = (sender, amount) => {
const addM = db.data.users[sender].cm += amount
return addM
}

const kurangCM = (sender, amount) => {
const kurM = db.data.users[sender].cm -= amount
return kurM
}

const getCM = (sender) => {
const cekM = db.data.users[sender].cm
return cekM
}

const addCL = (sender, amount) => {
const addM = db.data.users[sender].cl += amount
return addM
}

const kurangCL = (sender, amount) => {
const kurM = db.data.users[sender].cl -= amount
return kurM
}

const getCL = (sender) => {
const cekM = db.data.users[sender].cl
return cekM
}

const addCU = (sender, amount) => {
const addM = db.data.users[sender].cu += amount
return addM
}

const kurangCU = (sender, amount) => {
const kurM = db.data.users[sender].cu -= amount
return kurM
}

const getCU = (sender) => {
const cekM = db.data.users[sender].cu
return cekM
}

const addKucing = (sender, amount) => {
const addB = db.data.users[sender].kucing += amount
return addB
}

const kurangKucing = (sender, amount) => {
const kurB = db.data.users[sender].kucing -= amount
return kurB
}

const getKucing = (sender) => {
const cekB = db.data.users[sender].kucing
return cekB
}

const addNaga = (sender, amount) => {
const addB = db.data.users[sender].naga += amount
return addB
}

const kurangNaga = (sender, amount) => {
const kurB = db.data.users[sender].naga -= amount
return kurB
}

const getNaga = (sender) => {
const cekB = db.data.users[sender].naga
return cekB
}

const addKyubi = (sender, amount) => {
const addB = db.data.users[sender].anjing += amount
return addB
}

const kurangKyubi = (sender, amount) => {
const kurB = db.data.users[sender].anjing -= amount
return kurB
}

const getKyubi = (sender) => {
const cekB = db.data.users[sender].anjing
return cekB
}

const addAnjing = (sender, amount) => {
const addB = db.data.users[sender].anjing += amount
return addB
}

const kurangAnjing = (sender, amount) => {
const kurB = db.data.users[sender].anjing -= amount
return kurB
}

const getAnjing = (sender) => {
const cekB = db.data.users[sender].anjing
return cekB
}

const addKuda = (sender, amount) => {
const addB = db.data.users[sender].kuda += amount
return addB
}

const kurangKuda = (sender, amount) => {
const kurB = db.data.users[sender].kuda -= amount
return kurB
}

const getKuda = (sender) => {
const cekB = db.data.users[sender].kuda
return cekB
}

const addElang = (sender, amount) => {
const addB = db.data.users[sender].elang += amount
return addB
}

const kurangElang = (sender, amount) => {
const kurB = db.data.users[sender].elang -= amount
return kurB
}

const getElang = (sender) => {
const cekB = db.data.users[sender].elang
return cekB
}

const addRubah = (sender, amount) => {
const addB = db.data.users[sender].rubah += amount
return addB
}

const kurangRubah = (sender, amount) => {
const kurB = db.data.users[sender].rubah -= amount
return kurB
}

const getRubah = (sender) => {
const cekB = db.data.users[sender].rubah
return cekB
}

const addSerigala = (sender, amount) => {
const addB = db.data.users[sender].serigala += amount
return addB
}

const kurangSerigala = (sender, amount) => {
const kurB = db.data.users[sender].serigala -= amount
return kurB
}

const getSerigala = (sender) => {
const cekB = db.data.users[sender].serigala
return cekB
}

const addKey = (sender, amount) => {
const addB = db.data.users[sender].key += amount
return addB
}

const kurangKey = (sender, amount) => {
const kurB = db.data.users[sender].key -= amount
return kurB
}

const getKey = (sender) => {
const cekB = db.data.users[sender].key
return cekB
}

const addArmor = (sender, amount) => {
const addB = db.data.users[sender].armor += amount
return addB
}

const kurangArmor = (sender, amount) => {
const kurB = db.data.users[sender].armor -= amount
return kurB
}

const getArmor = (sender) => {
const cekB = db.data.users[sender].armor
return cekB
}

const addSword = (sender, amount) => {
const addB = db.data.users[sender].sword += amount
return addB
}

const kurangSword = (sender, amount) => {
const kurB = db.data.users[sender].sword -= amount
return kurB
}

const getSword = (sender) => {
const cekB = db.data.users[sender].sword
return cekB
}

const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getBotol, addBotol, kurangBotol, getKardus, addKardus, kurangKardus, getKaleng, addKaleng, kurangKaleng, getKelinci, getDomba, getSapi, getGajah } = require('./SanzRpg/user/buruan')
const { cekMakananJson, addInvMakanan, addSate, kurangSate, getSate, addGoreng, kurangGoreng, getGoreng, addSop, kurangSop, getSop, addSteak, kurangSteak, getSteak } = require('./SanzRpg/user/makanan')
const { cekBuahJson, addInvBuah, addBibitApel, kurangBibitApel, getBibitApel, addBibitBuah, kurangBibitBuah, getBibitBuah, addBuah, kurangBuah, getBuah, addApel, kurangApel, getApel, addDitanam, kurangDitanam, getDitanam, addDitanam1, kurangDitanam1, getDitanam1 } = require('./SanzRpg/user/buah')
const { cekWarungJson, addInvWarung, addPermen, kurangPermen, getPermen, addEs, kurangEs, getEs, addPedas, kurangPedas, getPedas, addRingan, kurangRingan, getRingan } = require('./SanzRpg/user/warung')
const { cekBuildJson, addInvBuild, addRumah, kurangRumah, getRumah, addPertanian, kurangPertanian, getPertanian, addWarung, kurangWarung, getWarung } = require('./SanzRpg/user/build')
const { cekBahanJson, addInvBahan, addKayu, kurangKayu, getKayu, addBatu, kurangBatu, getBatu, addSemen, kurangSemen, getSemen, addPasir, kurangPasir, getPasir } = require('./SanzRpg/user/bahan')

const {
getJoinRandomId,
addJoinUser,
createSerialJoin,
checkJoinUser
} = require('./SanzRpg/joinrpg.js')

const isJoin = checkJoinUser(m.sender)

let DarahAwal = rpg.darahawal
let BarAwal = 100
const isDarah = getDarah(m.sender)
const isBar = getBar(m.sender)
const isCekDarah = getDarah(m.sender)
const isCekBar = getBar(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isBotol = getBotol(m.sender)
const isCM = getCM(m.sender)
const isTanamApel = getDitanam(m.sender)
const isTanamBuah = getDitanam1(m.sender)
const isSate = getSate(m.sender)
const isKey = getKey(m.sender)
const isGoreng = getGoreng(m.sender)
const isSop = getSop(m.sender)
const isSteak = getSteak(m.sender)
const isCU = getCU(m.sender)
const isCL = getCL(m.sender)
const isBibitApel = getBibitApel(m.sender)
const isBibitBuah = getBibitBuah(m.sender)
const isApel = getApel(m.sender)
const isSword = getSword(m.sender)
const isArmor = getArmor(m.sender)
const isBuah = getBuah(m.sender)
const isRumah = getRumah(m.sender)
const isPertanian = getPertanian(m.sender)
const isWarung = getWarung(m.sender)
const isEs = getEs(m.sender)
const isPedas = getPedas(m.sender)
const isPermen = getPermen(m.sender)
const isRingan = getRingan(m.sender)
const isKaleng = getKaleng(m.sender)
const isKardus = getKardus(m.sender)
const isAyam = getAyam(m.sender)
const isBatu = getBatu(m.sender)
const isKucing = getKucing(m.sender)
const isKayu = getKayu(m.sender)
const isSemen = getSemen(m.sender)
const isPasir = getPasir(m.sender)
const isNaga = getNaga(m.sender)
const isAnjing = getAnjing(m.sender)
const isKyubi = getKyubi(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInvMakanan = cekMakananJson(m.sender)
const isInvBahan = cekBahanJson(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInvWarung = cekWarungJson(m.sender)
const isInvBuild = cekBuildJson(m.sender)
const isInvBuah = cekBuahJson(m.sender)
const ikan = ['🐬','🐡','🐠']


let _buruan = JSON.parse(fs.readFileSync('./SanzRpg/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./SanzRpg/user/darah.json'))
//————————————————————————//
//BATAS
//————————————————————————//
switch(command) {
case 'menu':{
if (isDev) {
let admin = `───────────── 
\`[ OWNER FITUR ]\`
───────────── 
- ${prefix}Self
- ${prefix}Public
- ${prefix}Setpp
- ${prefix}Delpp
- ${prefix}Block
- ${prefix}Unblock
- ${prefix}Onlypc
- ${prefix}Onlygc
- ${prefix}Listcase
- ${prefix}Sharecase
- ${prefix}Addcase
- ${prefix}Editcase
- ${prefix}Delcase
- ${prefix}Autobio
- ${prefix}Autoread
- ${prefix}Autotyping
- ${prefix}Autorecord
- ${prefix}Shutdown
- ${prefix}Delsession
- ${prefix}Getsession
- ${prefix}Addplugin
- ${prefix}Rmplugin
- ${prefix}Cgplugin
- ${prefix}Getplugin
- ${prefix}Addchangelog
- ${prefix}Rchangelog
─────────────`
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: admin,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});
} else {
let menu = `\`[ PROJECT Ham-Bot V2.0 ]\`\n\n_🇮🇩 Saya Adalah Bot Sederhana Untuk Membantu Aktifitas Anda_\n_🇬🇧 I am a simple bot to help you with your activities_

───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW HAM-BOT V2.0\`
───────────── 
- ${prefix}Aimenu
- ${prefix}Toolmenu
- ${prefix}Storemenu
- ${prefix}Othermenu
- ${prefix}Panelmenu
- ${prefix}Instalmenu
- ${prefix}Beritamenu
- ${prefix}Gamemenu
- ${prefix}Groupmenu
- ${prefix}Ownermenu
- ${prefix}Searchmenu
- ${prefix}Cerpenmenu
- ${prefix}Downloadmenu
───────────── `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});
}
}
break    

case 'allmenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ OPENAI FITUR ]\`

- ${prefix}Cai 
- ${prefix}Simi
- ${prefix}Bard
- ${prefix}Gptgo
- ${prefix}Gpt-4o
- ${prefix}Docsai
- ${prefix}Openai
- ${prefix}Bagodex
- ${prefix}Geminiai
- ${prefix}Blackbox
- ${prefix}Ai-groq
- ${prefix}Ai-detect
- ${prefix}Photoleap
- ${prefix}Text2img
- ${prefix}Rimuru-Ai
- ${prefix}Gemini-Pro
- ${prefix}llama-3-8b
- ${prefix}llama-3-70b
- ${prefix}Claude-Sonnet
- ${prefix}Chatevery-Where

- ${prefix}Gemini [ Choosen ]
- ${prefix}ham-bot *[ With Session ]*
- ${prefix}Autoai *[ With Session ]*
- ${prefix}Autoai2 *[ With Session And Choose ]*
───────────── 
\`[ OWNER FITUR ]\`

- ${prefix}Self
- ${prefix}Public
- ${prefix}Setpp
- ${prefix}Delpp
- ${prefix}Block
- ${prefix}Unblock
- ${prefix}Onlypc
- ${prefix}Onlygc
- ${prefix}Listcase
- ${prefix}Sharecase
- ${prefix}Addcase
- ${prefix}Editcase
- ${prefix}Delcase
- ${prefix}Autobio
- ${prefix}Autoread
- ${prefix}Autotyping
- ${prefix}Autorecord
- ${prefix}Shutdown
- ${prefix}Delsession
- ${prefix}Getsession
- ${prefix}Addplugin
- ${prefix}Rmplugin
- ${prefix}Cgplugin
- ${prefix}Getplugin
───────────── 
\`[ TOOLS FITUR ]\`

- ${prefix}Changelog
- ${prefix}Listbahasa
- ${prefix}Translate
- ${prefix}Nglspam
- ${prefix}Kalkulator
- ${prefix}Nekohime
- ${prefix}Dbinary
- ${prefix}Ebinary
- ${prefix}Lacakip
- ${prefix}Remini
- ${prefix}Myip
- ${prefix}Tourl
- ${prefix}Hdvid
- ${prefix}Text2speech
- ${prefix}Gtts2
- ${prefix}Gtts
- ${prefix}Tts2
- ${prefix}Tts
- ${prefix}Get
- ${prefix}Sticker
- ${prefix}Brat
───────────── 
\`[ SEARCH FITUR ]\`

- ${prefix}Lirik
- ${prefix}Nexlibur
- ${prefix}Weather
- ${prefix}Gimage
- ${prefix}Picsum
- ${prefix}Anilist
- ${prefix}Npmstalk
- ${prefix}Spotifysearch
- ${prefix}Tiktoksearch
- ${prefix}Apks [ Search ]
- ${prefix}Apkd [ Detail ]
───────────── 
\`[ NEWS FITUR ]\`

- ${prefix}merdekanews
- ${prefix}vietnamnews
- ${prefix}malaymail
- ${prefix}indozone
- ${prefix}kontan
- ${prefix}Ffnws
───────────── 
\`[ DOWNLOAD FITUR ]\`

- ${prefix}Tiktoksearch
- ${prefix}Twitterdl
- ${prefix}Gitclone
- ${prefix}Mediafire / Mf
- ${prefix}Mediafire2 / Mf2
- ${prefix}Cocofun
- ${prefix}Gdrive
- ${prefix}Tiktok
- ${prefix}Play
- ${prefix}Play2
- ${prefix}Aio
- ${prefix}Pin
- ${prefix}Apkdl [ Download ]
───────────── 
\`[ OTHERS FITUR ]\`

- ${prefix}Donasi
- ${prefix}Listdns
- ${prefix}Rvo
- ${prefix}Reqch
- ${prefix}Getpp
- ${prefix}Delete
- ${prefix}Getppgc
- ${prefix}Totalfitur
- ${prefix}Resetlimit
- ${prefix}Ceklimit
- ${prefix}Addlimit
- ${prefix}Dellimit
- ${prefix}Listpc
- ${prefix}Listgc
─────────────
\`[ CERPEN FITUR ]\`
- ${prefix}Cerpen-anak
- ${prefix}Cerpen-bahasadaerah
- ${prefix}Cerpen-bahasainggris
- ${prefix}Cerpen-bahasajawa
- ${prefix}Cerpen-bahasasunda
- ${prefix}Cerpen-budaya
- ${prefix}Cerpen-cinta
- ${prefix}Cerpen-cintaislami
- ${prefix}Cerpen-cintapertama
- ${prefix}Cerpen-cintaromantis
- ${prefix}Cerpen-cintasegitiga
- ${prefix}Cerpen-cintasedih
- ${prefix}Cerpen-cintasejati
- ${prefix}Cerpen-galau
- ${prefix}Cerpen-gokil
- ${prefix}Cerpen-inspiratif
- ${prefix}Cerpen-jepang
- ${prefix}Cerpen-kehidupan
- ${prefix}Cerpen-keluarga
- ${prefix}Cerpen-kisahnyata
- ${prefix}Cerpen-korea
- ${prefix}Cerpen-kristen
- ${prefix}Cerpen-liburan
- ${prefix}Cerpen-malaysia
- ${prefix}Cerpen-mengharukan
- ${prefix}Cerpen-misteri
- ${prefix}Cerpen-motivasi
- ${prefix}Cerpen-nasihat
- ${prefix}Cerpen-nasionalisme
- ${prefix}Cerpen-nasihat
- ${prefix}Cerpen-olahraga
- ${prefix}Cerpen-patahhati
- ${prefix}Cerpen-penantian
- ${prefix}Cerpen-pendidikan
- ${prefix}Cerpen-pengalaman
- ${prefix}Cerpen-pengorbanan
- ${prefix}Cerpen-penyesalan
- ${prefix}Cerpen-perjuangan
- ${prefix}Cerpen-perpisahan
- ${prefix}Cerpen-persahabatan
- ${prefix}Cerpen-petualangan
- ${prefix}Cerpen-ramadhan
- ${prefix}Cerpen-remaja
- ${prefix}Cerpen-rindu
- ${prefix}Cerpen-rohani
- ${prefix}Cerpen-romantis
- ${prefix}Cerpen-sastra
- ${prefix}Cerpen-sedih
- ${prefix}Cerpen-sejarah 
─────────────
\`[ FITUR INSTALLER ]\` 

- ${prefix}Createnode
- ${prefix}Instalpanel
- ${prefix}Instalpanel2
- ${prefix}Uninstallpanel
- ${prefix}Uninstallthema
- ${prefix}Configurewings
- ${prefix}Installthema1
- ${prefix}Installthema2
- ${prefix}Installthema3
─────────────
\`[ GAME FITUR ]\`

- ${prefix}Tf
- ${prefix}Pet
- ${prefix}Heal
- ${prefix}Feed
- ${prefix}Claim
- ${prefix}Open
- ${prefix}Shop
- ${prefix}Makan
- ${prefix}Memasak
- ${prefix}Joinrpg
- ${prefix}Inventory
- ${prefix}Leaderboard

- ${prefix}Ojek
- ${prefix}Slot
- ${prefix}Gacha
- ${prefix}Mancing
- ${prefix}Mining
- ${prefix}Kandang
- ${prefix}Mulung
- ${prefix}Hunting
- ${prefix}Openbo
- ${prefix}Berkebon
- ${prefix}Bansos
- ${prefix}Korupsi
- ${prefix}Dungeon
- ${prefix}Merampok
- ${prefix}Bertarung
- ${prefix}Membunuh
- ${prefix}Kerja Ojek
- ${prefix}Kerja Pedagang
- ${prefix}Kerja Petani
- ${prefix}Kerja Montir
- ${prefix}Kerja Kuli

- ${prefix}Cheat Exp
- ${prefix}Cheat Level
- ${prefix}Cheat Limit
- ${prefix}Cheat Balance

- ${prefix}Clan create
- ${prefix}Clan join
- ${prefix}Clan approve
- ${prefix}Clan war
- ${prefix}Clan list
- ${prefix}Clan leave
- ${prefix}Clan delete
- ${prefix}Clan member
- ${prefix}Clan missions
- ${prefix}Clan task
- ${prefix}Clan upgrade
- ${prefix}Clan tournament
 
- ${prefix}menfes
- ${prefix}confes
- ${prefix}balasmenfes
- ${prefix}tolakmenfes
- ${prefix}stopmenfes
- ${prefix}anonymouschat
- ${prefix}start
- ${prefix}stop
- ${prefix}lanjut  
 
- ${prefix}Uno
- ${prefix}Judibola 
- ${prefix}Werewolf

- ${prefix}Listhadiah
- ${prefix}Buathadiah
- ${prefix}Redeemcode
 
-  ${prefix}gens-characters
-  ${prefix}gens-advrank
-  ${prefix}gens-animals
-  ${prefix}gens-area
-  ${prefix}gens-giartifact
-  ${prefix}gens-giconstellation
-  ${prefix}gens-craft
-  ${prefix}gens-domain
-  ${prefix}gens-emoji
-  ${prefix}gens-enemy
-  ${prefix}gens-food
-  ${prefix}gens-materials
-  ${prefix}gens-namacard
-  ${prefix}gens-nation
-  ${prefix}gens-outfit
-  ${prefix}gens-potion
-  ${prefix}gens-talents
-  ${prefix}gens-viewpoint
-  ${prefix}gens-voiceovers
-  ${prefix}gens-weapons
-  ${prefix}gens-wildlife 
─────────────
\`[ GROUP FITUR ]\`

- ${prefix}Add <users>
- ${prefix}Kick <tag users>
- ${prefix}Kickall
- ${prefix}Hidetag
- ${prefix}Gc <open/close>
- ${prefix}Tagall
- ${prefix}Totag
- ${prefix}Editsubjek <teks>
- ${prefix}Editdesk <teks>
- ${prefix}Editinfo <teks>
- ${prefix}Promote <tag users>
- ${prefix}Promoteall
- ${prefix}Demote <tag users>
- ${prefix}Demoteall

- ${prefix}Antipoll
- ${prefix}Antisticker
- ${prefix}Antiimage
- ${prefix}Antivideo
- ${prefix}Antivirtex
- ${prefix}Antibot
- ${prefix}Antiviewonce
- ${prefix}Antispam
- ${prefix}Antimedia
- ${prefix}Antidocument
- ${prefix}Anticontact
- ${prefix}Antilocation
- ${prefix}Antilink
- ${prefix}Antilinkgc
- ${prefix}Antipromotion
- ${prefix}Antiaudio
- ${prefix}Antibadword
─────────────
\`[ STORE FITUR ]\`
 
- ${prefix}Addlist
- ${prefix}Dellist
- ${prefix}Store
- ${prefix}List

- ${prefix}Done
- ${prefix}Batal
- ${prefix}Tunda
- ${prefix}Proses
─────────────
\`[ PANEL FITUR ]\`

- ${prefix}1gb
- ${prefix}2gb
- ${prefix}3gb
- ${prefix}4gb
- ${prefix}5gb
- ${prefix}6gb
- ${prefix}7gb
- ${prefix}8gb
- ${prefix}9gb
- ${prefix}Unli
- ${prefix}Cpadmin

- ${prefix}Listusr
- ${prefix}Listsrv
- ${prefix}Listadmin

- ${prefix}Startarv
- ${prefix}Stopsrv
- ${prefix}Restartsrv
- ${prefix}Suspend
- ${prefix}Unsuspend
- ${prefix}Detusr
- ${prefix}Updatesrv
- ${prefix}Delusr
- ${prefix}Delsrv
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'aimenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ OPENAI FITUR ]\`
 
- ${prefix}Cai
- ${prefix}Simi
- ${prefix}Bard
- ${prefix}Gptgo
- ${prefix}Gpt-4o
- ${prefix}Docsai
- ${prefix}Openai
- ${prefix}Bagodex
- ${prefix}Geminiai
- ${prefix}Blackbox
- ${prefix}Ai-detect
- ${prefix}Ai-groq
- ${prefix}Photoleap
- ${prefix}Text2img
- ${prefix}Rimuru-Ai
- ${prefix}Gemini-Pro
- ${prefix}Claude-Sonnet
- ${prefix}Chatevery-Where

- ${prefix}Gemini [ Choosen ]
- ${prefix}ham-bot *[ With Session ]*
- ${prefix}Autoai *[ With Session ]*
- ${prefix}Autoai2 *[ With Session And Choose ]*
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'storemenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ STORE FITUR ]\`
 
- ${prefix}Addlist
- ${prefix}Dellist
- ${prefix}Store
- ${prefix}List

- ${prefix}Done
- ${prefix}Batal
- ${prefix}Tunda
- ${prefix}Proses
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'gamemenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ GAME FITUR ]\`

- ${prefix}Tf
- ${prefix}Pet
- ${prefix}Heal
- ${prefix}Feed
- ${prefix}Claim
- ${prefix}Open
- ${prefix}Shop
- ${prefix}Makan
- ${prefix}Memasak
- ${prefix}Joinrpg
- ${prefix}Inventory
- ${prefix}Leaderboard

- ${prefix}Ojek
- ${prefix}Slot
- ${prefix}Gacha
- ${prefix}Mancing
- ${prefix}Mining
- ${prefix}Kandang
- ${prefix}Mulung
- ${prefix}Hunting
- ${prefix}Openbo
- ${prefix}Berkebon
- ${prefix}Bansos
- ${prefix}Korupsi
- ${prefix}Dungeon
- ${prefix}Merampok
- ${prefix}Bertarung
- ${prefix}Membunuh
- ${prefix}Kerja Ojek
- ${prefix}Kerja Pedagang
- ${prefix}Kerja Petani
- ${prefix}Kerja Montir
- ${prefix}Kerja Kuli

- ${prefix}Cheat Exp
- ${prefix}Cheat Level
- ${prefix}Cheat Limit
- ${prefix}Cheat Balance

- ${prefix}Clan create
- ${prefix}Clan join
- ${prefix}Clan approve
- ${prefix}Clan war
- ${prefix}Clan list
- ${prefix}Clan leave
- ${prefix}Clan delete
- ${prefix}Clan member
- ${prefix}Clan missions
- ${prefix}Clan task
- ${prefix}Clan upgrade
- ${prefix}Clan tournament
 
- ${prefix}menfes
- ${prefix}confes
- ${prefix}balasmenfes
- ${prefix}tolakmenfes
- ${prefix}stopmenfes
- ${prefix}anonymouschat
- ${prefix}start
- ${prefix}stop
- ${prefix}lanjut  
 
- ${prefix}Uno
- ${prefix}Judibola 
- ${prefix}Werewolf

- ${prefix}Listhadiah
- ${prefix}Buathadiah
- ${prefix}Redeemcode
 
-  ${prefix}gens-characters
-  ${prefix}gens-advrank
-  ${prefix}gens-animals
-  ${prefix}gens-area
-  ${prefix}gens-giartifact
-  ${prefix}gens-giconstellation
-  ${prefix}gens-craft
-  ${prefix}gens-domain
-  ${prefix}gens-emoji
-  ${prefix}gens-enemy
-  ${prefix}gens-food
-  ${prefix}gens-materials
-  ${prefix}gens-namacard
-  ${prefix}gens-nation
-  ${prefix}gens-outfit
-  ${prefix}gens-potion
-  ${prefix}gens-talents
-  ${prefix}gens-viewpoint
-  ${prefix}gens-voiceovers
-  ${prefix}gens-weapons
-  ${prefix}gens-wildlife 
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'ownermenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ OWNER FITUR ]\`

- ${prefix}Self
- ${prefix}Public
- ${prefix}Setpp
- ${prefix}Delpp
- ${prefix}Block
- ${prefix}Unblock
- ${prefix}Onlypc
- ${prefix}Onlygc
- ${prefix}Listcase
- ${prefix}Sharecase
- ${prefix}Addcase
- ${prefix}Editcase
- ${prefix}Delcase
- ${prefix}Autobio
- ${prefix}Autoread
- ${prefix}Autotyping
- ${prefix}Autorecord
- ${prefix}Shutdown
- ${prefix}Delsession
- ${prefix}Getsession
- ${prefix}Addplugin
- ${prefix}Rmplugin
- ${prefix}Cgplugin
- ${prefix}Getplugin
- ${prefix}Addchangelog
- ${prefix}Rchangelog
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'toolmenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ TOOLS FITUR ]\`

- ${prefix}Changelog
- ${prefix}Listbahasa
- ${prefix}Translate
- ${prefix}Nglspam
- ${prefix}Kalkulator
- ${prefix}Nekohime
- ${prefix}Lacakip
- ${prefix}Dbinary
- ${prefix}Ebinary
- ${prefix}Remini
- ${prefix}Myip
- ${prefix}Tourl
- ${prefix}Hdvid
- ${prefix}Text2speech
- ${prefix}Gtts2
- ${prefix}Gtts
- ${prefix}Tts2
- ${prefix}Tts
- ${prefix}Get
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'searchmenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ SEARCH FITUR ]\`

- ${prefix}Lirik
- ${prefix}Nexlibur
- ${prefix}Weather
- ${prefix}Gimage
- ${prefix}Picsum
- ${prefix}Anilist
- ${prefix}Npmstalk
- ${prefix}Spotifysearch
- ${prefix}tiktoksearch
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'beritamenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ NEWS FITUR ]\`

- ${prefix}merdekanews
- ${prefix}vietnamnews
- ${prefix}malaymail
- ${prefix}indozone
- ${prefix}kontan
- ${prefix}Ffnws
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'downloadmenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ DOWNLOAD FITUR ]\`
 
- ${prefix}Tiktoksearch
- ${prefix}Twitterdl
- ${prefix}Gitclone
- ${prefix}Mediafire / Mf
- ${prefix}Mediafire2 / Mf2
- ${prefix}Cocofun
- ${prefix}Gdrive
- ${prefix}Tiktok
- ${prefix}Play
- ${prefix}Play2
- ${prefix}Aio
- ${prefix}Pin
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'othermenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ OTHERS FITUR ]\`

- ${prefix}Donasi
- ${prefix}Listdns
- ${prefix}Rvo
- ${prefix}Reqch
- ${prefix}Getpp
- ${prefix}Delete
- ${prefix}Getppgc
- ${prefix}Totalfitur
- ${prefix}Resetlimit
- ${prefix}Ceklimit
- ${prefix}Addlimit
- ${prefix}Dellimit
- ${prefix}Listpc
- ${prefix}Listgc
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'cerpenmenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ CERPEN MENU ]\`
- ${prefix}Cerpen-anak
- ${prefix}Cerpen-bahasadaerah
- ${prefix}Cerpen-bahasainggris
- ${prefix}Cerpen-bahasajawa
- ${prefix}Cerpen-bahasasunda
- ${prefix}Cerpen-budaya
- ${prefix}Cerpen-cinta
- ${prefix}Cerpen-cintaislami
- ${prefix}Cerpen-cintapertama
- ${prefix}Cerpen-cintaromantis
- ${prefix}Cerpen-cintasegitiga
- ${prefix}Cerpen-cintasedih
- ${prefix}Cerpen-cintasejati
- ${prefix}Cerpen-galau
- ${prefix}Cerpen-gokil
- ${prefix}Cerpen-inspiratif
- ${prefix}Cerpen-jepang
- ${prefix}Cerpen-kehidupan
- ${prefix}Cerpen-keluarga
- ${prefix}Cerpen-kisahnyata
- ${prefix}Cerpen-korea
- ${prefix}Cerpen-kristen
- ${prefix}Cerpen-liburan
- ${prefix}Cerpen-malaysia
- ${prefix}Cerpen-mengharukan
- ${prefix}Cerpen-misteri
- ${prefix}Cerpen-motivasi
- ${prefix}Cerpen-nasihat
- ${prefix}Cerpen-nasionalisme
- ${prefix}Cerpen-nasihat
- ${prefix}Cerpen-olahraga
- ${prefix}Cerpen-patahhati
- ${prefix}Cerpen-penantian
- ${prefix}Cerpen-pendidikan
- ${prefix}Cerpen-pengalaman
- ${prefix}Cerpen-pengorbanan
- ${prefix}Cerpen-penyesalan
- ${prefix}Cerpen-perjuangan
- ${prefix}Cerpen-perpisahan
- ${prefix}Cerpen-persahabatan
- ${prefix}Cerpen-petualangan
- ${prefix}Cerpen-ramadhan
- ${prefix}Cerpen-remaja
- ${prefix}Cerpen-rindu
- ${prefix}Cerpen-rohani
- ${prefix}Cerpen-romantis
- ${prefix}Cerpen-sastra
- ${prefix}Cerpen-sedih
- ${prefix}Cerpen-sejarah 
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'instalmenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ FITUR INSTALLER ]\` 

- ${prefix}Createnode
- ${prefix}Instalpanel
- ${prefix}Instalpanel2
- ${prefix}Uninstallpanel
- ${prefix}Uninstallthema
- ${prefix}Configurewings
- ${prefix}Installthema1
- ${prefix}Installthema2
- ${prefix}Installthema3
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'groupmenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ GROUP FITUR ]\`

- ${prefix}Add <users>
- ${prefix}Kick <tag users>
- ${prefix}Kickall
- ${prefix}Hidetag
- ${prefix}Gc <open/close>
- ${prefix}Tagall
- ${prefix}Totag
- ${prefix}Editsubjek <teks>
- ${prefix}Editdesk <teks>
- ${prefix}Editinfo <teks>
- ${prefix}Promote <tag users>
- ${prefix}Promoteall
- ${prefix}Demote <tag users>
- ${prefix}Demoteall

- ${prefix}Antipoll
- ${prefix}Antisticker
- ${prefix}Antiimage
- ${prefix}Antivideo
- ${prefix}Antivirtex
- ${prefix}Antibot
- ${prefix}Antiviewonce
- ${prefix}Antispam
- ${prefix}Antimedia
- ${prefix}Antidocument
- ${prefix}Anticontact
- ${prefix}Antilocation
- ${prefix}Antilink
- ${prefix}Antilinkgc
- ${prefix}Antipromotion
- ${prefix}Antiaudio
- ${prefix}Antibadword
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break

case 'panelmenu':{
let menu =`
───────────── 
\`INFORMASI BOT\`
───────────── 
 *⛩️ Run Time* : ${runtime(process.uptime())}
 *⛩️ Total Fitur :* ${totalFitur()}
 *⛩️ Bot Name :* ${botname}
 *⛩️ My Owner :* ${ownername}
 *⛩️ Waktu :* ${stime} 
───────────── 
\`INFORMASI USER\`
───────────── 
 *⛩️ Limit :* ${limitnya}
 *⛩️ Name :* ${pushname}
 *⛩️ Number :* ${m.sender.split('@')[0]}
─────────────
\`NEW Ham-Bot V2.0\`
───────────── 
\`[ PANEL FITUR ]\`

- ${prefix}1gb
- ${prefix}2gb
- ${prefix}3gb
- ${prefix}4gb
- ${prefix}5gb
- ${prefix}6gb
- ${prefix}7gb
- ${prefix}8gb
- ${prefix}9gb
- ${prefix}Unli
- ${prefix}Cpadmin

- ${prefix}Listusr
- ${prefix}Listsrv
- ${prefix}Listadmin

- ${prefix}Startarv
- ${prefix}Stopsrv
- ${prefix}Restartsrv
- ${prefix}Suspend
- ${prefix}Unsuspend
- ${prefix}Detusr
- ${prefix}Updatesrv
- ${prefix}Delusr
- ${prefix}Delsrv
─────────────
_Cr : HamsOffc_ 
 `
nova.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumbnail },
    fileName: runtime(process.uptime),
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: menu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "h-pay.my.id",
            thumbnailUrl: global.thumbnail,
            title: "Ham-Bot V2.0",
            body: "Ham-Bot V2.0",
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: null,
            newsletterName: "Ham-Bot V2.0"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "Ham-Bot V2.0"}}});

}
break
//————————————————————————//
// SYSTEM AND GAMES
case "listhadiah":{
if (!isDev) return onlyOwner()
if (db.data.settings.hadiah.length < 1) return reply("Tidak ada code hadiah")
var tek = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`
db.data.settings.hadiah.forEach((e) => {
tek += ` ◦ ${e}\n`
})
reply(teks)
}
break

case "redeemcode":{
if (!args[0]) return reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return reply("*Code Redeem* wajib huruf kecil semua!")
if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.hadiah.includes(args[0])) return reply("*Code* tidak valid!")
db.data.settings.hadiahkadaluwarsa.push(args[0])
var code = db.data.settings.hadiah.indexOf(args[0])
db.data.settings.hadiah.splice(code, 1)
let h1 = randomNumber(10, 20)
db.data.users[m.sender].limit += h1
var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *${h1} Limit* dari *Code Redeem "${args[0]}"*`
await reply(`Berhasil mengambil hadiah *${h1} Limit* dari *Code Redeem ${args[0]}*`).then(() => {
nova.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: thumbnail, title: "© Message System Notifikasi", body: null, sourceUrl: linkgc, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
})}
break

case "buathadiah":{
if (!isDev) return onlyOwner()
if (isNaN(args[0])) return reply('Jumlah Kode Hadiah')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.hadiah.forEach((e) => {
teks += `◦ ${e}\n`
})
reply(teks)
}
break
//————————————————————————//
// AI FITUR

case 'text2img':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
try {
if (!text) return reply(`Example: ${prefix + command} car`)
let json = await chApi.text2img(text)
nova.sendFile(m.chat, json.result, 'done', m)
} catch (e) {
console.log(e)
return falseR()
}
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break 

case 'ai-groq': {
if (!text) return reply("Hai, ada yang bisa saya bantu?")
const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: "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" });
async function main(teks) {
  const completion = await groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: teks
        },
      ],
      model: "mixtral-8x7b-32768",
    })
    .then((chatCompletion) => {
      reply(chatCompletion.choices[0]?.message?.content || "");
    });
}
try {
return main(text);
} catch (e) {
return e
}
}
break

case 'cai': {
  nova.cai = nova.cai || {};
  const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
  const gunakan_apikey = "AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ"
  const generative = new GoogleGenerativeAI(gunakan_apikey);
  const characterCategories = {
    naruto: {
      "Naruto Uzumaki":
        "Kamu adalah Naruto, seorang ninja yang bercita-cita menjadi Hokage, memiliki kekuatan ekstraordiner dari Bijuu, Kyubi. Penuh semangat, ceria, dan gigih. Cara bicaranya ceria dan sering menggunakan kata-kata bersemangat seperti 'Dattebayo!' 🍥",
      "Sasuke Uchiha":
        "Kamu adalah Sasuke, mantan rekan tim Naruto, mengejar kekuatan untuk membalas dendam dan mencapai tujuannya. Serius, tekad kuat, dan terkadang misterius. Bicaranya cenderung singkat dan tegas. 😈",
      "Sakura Haruno":
        "Kamu adalah Sakura, seorang ninja medis yang gigih, merupakan bagian dari tim 7 bersama Naruto dan Sasuke. Cerdas, penyayang, dan tekun. Bicaranya sopan dan penuh perhatian terhadap rekan-rekannya. 🌸",
      "Kakashi Hatake":
        "Kamu adalah Kakashi, seorang Jonin yang cerdas dan kuat, menjadi sensei bagi tim 7. Tenang, bijaksana, dan sedikit misterius. Bicaranya santai dengan kecenderungan humor. 👁️‍🗨️",
      "Hinata Hyuga":
        "Kamu adalah Hinata, seorang ninja yang lembut dan pemalu, namun memiliki kekuatan luar biasa. Cinta diam-diam pada Naruto dan berkembang menjadi wanita yang penuh keberanian. 💜",
      "Shikamaru Nara":
        "Kamu adalah Shikamaru, seorang ninja yang cenderung malas namun sangat cerdas. Memiliki kecerdasan taktis yang luar biasa dan sering terlihat berpikir jauh ke depan. 💤",
      "Rock Lee":
        "Kamu adalah Rock Lee, seorang ninja yang mengandalkan kekuatan fisik dan keterampilan bela diri. Penuh semangat untuk menjadi ninja terbaik meskipun tidak memiliki kemampuan ninjutsu. 💪",
      Sasori:
        "Kamu adalah Sasori, seorang ninja pemain boneka dari Akatsuki. Dingin, taktis, dan menggunakan boneka untuk bertarung. Membawa keberadaan dan seni boneka ke tingkat yang tinggi. 🤖",
      Jiraiya:
        "Kamu adalah Jiraiya, seorang legenda ninja dan mentor bagi Naruto. Bijak, kuat, dan kadang-kadang nakal. Menulis novel erotis terkenal dan memiliki kecintaan pada penelitian. 📖",
      Orochimaru:
        "Kamu adalah Orochimaru, ninja jahat dengan keinginan keabadian. Cerdas, licik, dan berusaha mendapatkan kekuatan dengan cara apapun. Muncul sebagai salah satu antagonis utama. 🐍",
      "Kiba Inuzuka":
        "Kamu adalah Kiba, seorang ninja yang kuat dengan kekuatan binatang teman setianya, Akamaru. Ramah, energetik, dan memiliki kepekaan luar biasa terhadap bau. 🐾",
      Temari:
        "Kamu adalah Temari, ninja dari Sunagakure dengan keahlian angin yang luar biasa. Cerdas, tegas, dan memiliki strategi yang kuat dalam pertempuran. 💨",
      "Choji Akimichi":
        "Kamu adalah Choji, seorang ninja dengan teknik pertarungan yang berkaitan dengan pengendalian berat badan. Ramah, suka makan, dan memiliki loyalitas yang besar. 🍔",
      "Ino Yamanaka":
        "Kamu adalah Ino, seorang ninja dengan kekuatan kontrol pikiran. Cerdas, percaya diri, dan memiliki hubungan dekat dengan Shikamaru dan Choji. 💭",
      "Neji Hyuga":
        "Kamu adalah Neji, anggota klan Hyuga dengan kemampuan Byakugan. Awalnya bersikap dingin, namun berkembang menjadi ninja yang adil dan bijaksana. 🔍",
      Tenten:
        "Kamu adalah Tenten, seorang ninja yang ahli dalam seni bela diri dan senjata. Sopan, berdedikasi, dan memiliki keterampilan yang luar biasa dengan berbagai senjata. 🗡️",
      Gaara:
        "Kamu adalah Gaara, Kazekage dari Sunagakure. Awalnya dingin dan kejam, namun berkembang menjadi pemimpin yang bijaksana dan melindungi desanya dengan tekad kuat. 🏜️",
      "Might Guy":
        "Kamu adalah Might Guy, seorang ninja yang energetik dan bersemangat. Ahli dalam seni bela diri dan dikenal dengan teknik kuatnya. Penuh semangat dan berkepribadian positif. 🌟",
      "Tsunade Senju":
        "Kamu adalah Tsunade, Hokage Kelima dari Konohagakure. Ahli bedah ninja yang kuat dan tegas. Meskipun keras, memiliki hati yang baik dan peduli pada desanya. 💉",
      "Kurenai Yuhi":
        "Kamu adalah Kurenai, seorang Jonin dan ahli genjutsu. Tenang, bijaksana, dan memiliki hubungan dekat dengan Asuma. Memiliki kemampuan untuk mengendalikan ilusi. 🌌",
      "Asuma Sarutobi":
        "Kamu adalah Asuma, seorang Jonin dengan keterampilan menggunakan rokok sebagai senjata. Santai, peduli pada murid-muridnya, dan memiliki koneksi dengan Klan Sarutobi. 🚬",
      "Kisame Hoshigaki":
        "Kamu adalah Kisame, anggota Akatsuki dengan kekuatan air yang luar biasa. Dikenal dengan pedang Samehada dan kekejamannya. Berteman dengan Itachi Uchiha. 🦈",
      "Shino Aburame":
        "Kamu adalah Shino, seorang ninja dengan kemampuan mengendalikan serangga. Cerdas, tenang, dan jarang menunjukkan emosi. Memiliki hubungan baik dengan timnya. 🐜",
      Konan:
        "Kamu adalah Konan, anggota Akatsuki dengan kemampuan manipulasi kertas. Cerdas, kuat, dan memiliki tekad kuat untuk melindungi teman-temannya. 📜",
      Hidan:
        "Kamu adalah Hidan, anggota Akatsuki yang tidak bisa mati. Sadis, kejam, dan menggunakan ritual keagamaan dalam pertempuran. Berteman dengan Kakuzu. ⚰️",
      Kakuzu:
        "Kamu adalah Kakuzu, anggota Akatsuki yang ahli dalam jutsu kehidupan abadi. Kegilaan dengan uang dan sering berselisih dengan Hidan. 💰",
      Yamato:
        "Kamu adalah Yamato, seorang anggota ANBU dan kapten tim pengganti Kakashi. Memiliki kemampuan untuk mengendalikan elemen kayu. Tenang dan bertanggung jawab. 🌲",
      "Iruka Umino":
        "Kamu adalah Iruka, seorang guru di Akademi Ninja. Baik hati, peduli pada murid-muridnya, dan memiliki hubungan khusus dengan Naruto. 📚",
      Shizune:
        "Kamu adalah Shizune, asisten Tsunade dan ahli medis. Bertanggung jawab dan setia pada Tsunade. Memiliki kemampuan medis yang luar biasa. 💊",
      Jugo: "Kamu adalah Jugo, anggota tim Taka dengan kekuatan yang terkait dengan kekuatan alam. Awalnya bermasalah, namun memiliki kebaikan hati yang terpendam. 🍃",
      Karin:
        "Kamu adalah Karin, anggota tim Taka dengan kemampuan sensor yang kuat. Meskipun tampak dingin, memiliki perasaan terhadap Sasuke. 🔍❤️",
      "Suigetsu Hozuki":
        "Kamu adalah Suigetsu, anggota tim Taka dengan kemampuan manipulasi air. Cerdas, namun memiliki kepribadian kasar. Bertujuan untuk menjadi ninja terkuat. 💧",
      "Killer Bee":
        "Kamu adalah Killer Bee, Jinchuriki dari Bijuu, Hachibi. Rapper yang bersemangat, kuat, dan memiliki kebijaksanaan unik. Bersahabat dengan Naruto. 🐝🎤",
      "Konohamaru Sarutobi":
        "Kamu adalah Konohamaru, seorang ninja muda yang bercita-cita menjadi Hokage. Energetik, penuh semangat, dan murid dari Naruto. 🌟",
      Mitsuki:
        "Kamu adalah Mitsuki, sintesis manusia-senjata yang merupakan murid dari Orochimaru. Tenang, cerdas, dan memiliki kemampuan unik. 🐍",
      "Sumire Kakei":
        "Kamu adalah Sumire, seorang ninja yang dulunya anggota Kelas Dalam Negeri. Memiliki kekuatan yang berasal dari Nue. Awalnya bertujuan jahat, namun berkembang menjadi baik. 🌌",
      "Moegi Kazamatsuri":
        "Kamu adalah Moegi, seorang ninja yang dulunya anggota Kelas Dalam Negeri. Ramah, bersemangat, dan memiliki kemampuan unik. Murid dari Konohamaru. 🌟",
      "Udon Ise":
        "Kamu adalah Udon, seorang ninja yang dulunya anggota Kelas Dalam Negeri. Cerdas, suka membaca, dan memiliki kemampuan analitis. Murid dari Konohamaru. 📚",
      "Isshiki Otsutsuki":
        "Kamu adalah Isshiki, Otsutsuki yang merupakan ancaman besar dalam dunia Naruto. Kuat, licik, dan memiliki tujuan untuk mengambil chakra Bumi. ☄️",
      Delta:
        "Kamu adalah Delta, anggota Kara dengan kekuatan mekanis. Fanatik terhadap pemimpin Kara, Jigen. Bertanggung jawab atas misi terkait Kawaki. 🤖",
      "Kashin Koji":
        "Kamu adalah Kashin Koji, anggota Kara dengan kekuatan api dan kemampuan kage bunshin. Muncul sebagai sosok misterius dengan hubungan dengan Konohagakure. 🔥",
      Amado:
        "Kamu adalah Amado, mantan anggota Kara dan ilmuwan jenius. Bertanggung jawab atas penciptaan banyak teknologi canggih Kara. 🧪",
      Code: "Kamu adalah Code, anggota Kara yang fanatik terhadap Isshiki Otsutsuki. Memiliki kekuatan yang luar biasa dan loyalitas tinggi. 🕵️‍♂️",
      "Boruto Uzumaki":
        "Kamu adalah Boruto, putra dari Naruto dan Hinata. Awalnya nakal, namun berkembang menjadi ninja yang cerdas dan bertanggung jawab. 🌪️",
      "Sarada Uchiha":
        "Kamu adalah Sarada, putri dari Sasuke dan Sakura. Cerdas, tekad kuat, dan memiliki impian menjadi Hokage. Menggunakan Sharingan dan jutsu medis. 🔍💖",
      Mitsuki:
        "Kamu adalah Mitsuki, sintesis manusia-senjata yang merupakan teman sekelas Boruto. Tenang, cerdas, dan memiliki kemampuan unik. 🐍",
      Kawaki:
        "Kamu adalah Kawaki, karakter misterius dengan sejarah yang kelam. Muncul sebagai ancaman besar dalam dunia Boruto. 🌌",
      "Momoshiki Otsutsuki":
        "Kamu adalah Momoshiki, Otsutsuki yang merupakan antagonis utama dalam Boruto. Memiliki kekuatan besar dan tujuan mengambil chakra manusia. ☄️",
    },
    genshin: {
      "Traveler (Aether/Lumine)":
        "Kamu adalah Traveler, seorang pemuda/pemudi dengan kekuatan untuk mengendalikan elemen Anemo dan Geo. Mencari saudara yang hilang di dunia Teyvat. 🌪️🪐",
      Amber:
        "Kamu adalah Amber, seorang pemanah dari Mondstadt. Ceria, energetik, dan ahli dalam seni memanah. Memiliki semangat petualangan yang tinggi. 🏹",
      Kaeya:
        "Kamu adalah Kaeya, Kavalier Krieger dan Kepala Pasukan Pengawal dari Mondstadt. Santai, cerdas, dan ahli dalam penggunaan pedang es. ❄️⚔️",
      Lisa: "Kamu adalah Lisa, Grand Magus dari Sutan Mondstadt. Cerdas, tenang, dan menguasai ilmu sihir listrik. Tidak suka melakukan pekerjaan berat. ⚡📚",
      Razor:
        "Kamu adalah Razor, penduduk hutan yang bisa berubah menjadi serigala. Sederhana, setia, dan ahli dalam pertarungan jarak dekat. 🐺⚔️",
      Diluc:
        "Kamu adalah Diluc, pemilik Dawn Winery dan ksatria dari Mondstadt. Serius, fokus, dan ahli dalam menggunakan pedang dan api. 🔥⚔️",
      Jean: "Kamu adalah Jean, Ksatria Gunnhildr dan Kepala Pasukan Ksatria Favonius. Bertanggung jawab, kuat, dan pandai menggunakan pedang dan Anemo. 🌪️⚔️",
      Mona: "Kamu adalah Mona, ahli astrologi dan penjelajah air dari Mondstadt. Unik, cerdas, dan memiliki kemampuan mengendalikan air dan astrologi. 💧✨",
      Fischl:
        "Kamu adalah Fischl, Keluarga Laurence dan detektif dari Mondstadt. Mencari makhluk ghaib dengan bantuan raven miliknya, Oz. ⚡🦅",
      Xiangling:
        "Kamu adalah Xiangling, koki yang bekerja di Wangshu Inn dan ahli dalam menggunakan tombak. Ceria, bersemangat, dan suka menciptakan hidangan lezat. 🍲🔥",
      Chongyun:
        "Kamu adalah Chongyun, pengusir hantu dari Liyue. Ramah, bersemangat, dan memiliki kekuatan es. Tidak tahan dengan hal-hal yang berbau mistis. ❄️⚔️",
      Xingqiu:
        "Kamu adalah Xingqiu, ahli cerita dari keluarga Feiyun di Liyue. Lembut, kreatif, dan mahir dalam menggunakan pedang dan hydro. 💧⚔️",
      Beidou:
        "Kamu adalah Beidou, Kapten Armada Crux dan pemilik Nantianmen. Keren, kuat, dan ahli dalam menggunakan pedang listrik. ⚡⚔️",
      Ningguang:
        "Kamu adalah Ningguang, Tycoon dari Liyue dan pemilik Pelindung Kekaisaran. Ambisius, cerdas, dan mahir menggunakan Kristal Geo. 🌐💎",
      Qiqi: "Kamu adalah Qiqi, zombie hidup dari Bubu Pharmacy. Ramah, ceria, dan memiliki kemampuan pengobatan yang luar biasa. ❄️💉",
      Keqing:
        "Kamu adalah Keqing, Yuheng dari Liyue dan bekerja sebagai pemimpin Komisi Keamanan Publik. Tegas, cerdas, dan ahli dalam menggunakan pedang listrik. ⚡⚔️",
      Albedo:
        "Kamu adalah Albedo, Kepala Ilmuwan Tertinggi dari Monstadt dan ahli alkimia. Tenang, cerdas, dan memiliki kekuatan Geo. 🌐📚",
      Ganyu:
        "Kamu adalah Ganyu, yunhai dari Liyue dan sekretaris di Bubu Pharmacy. Lebih manusiawi daripada penghuni yunhai lainnya. ❄️🏹",
      Zhongli:
        "Kamu adalah Zhongli, mantan kontraktor Geo dari Liyue dan sekarang seorang konsultan. Tenang, bijaksana, dan ahli dalam menggunakan tombak Geo. 🌐⚔️",
      Xiao: "Kamu adalah Xiao, Guardian Yaksha dari Liyue dan pengusir roh jahat. Pendiam, fokus, dan menggunakan elemen Anemo. 🌪️⚔️",
      Rosaria:
        "Kamu adalah Rosaria, seorang suster dari Mondstadt yang juga merupakan seorang ksatria. Tegas, misterius, dan memiliki keahlian menggunakan tombak. ⚔️❄️",
      Yanfei:
        "Kamu adalah Yanfei, seorang ahli hukum yang memiliki darah manusia dan darah naga. Rajin, cerdas, dan memiliki kemampuan pengendalian api. 🔥⚖️",
      Eula: "Kamu adalah Eula, kapten dari Ksatria Favonius di Monstadt dan keluarga Lawrence. Anggun, berkepribadian tinggi, dan mahir dalam penggunaan pedang Cryo. ❄️⚔️",
      "Kaedehara Kazuha":
        "Kamu adalah Kazuha, seorang vagabond dan ahli dalam seni pedang dari Inazuma. Santai, seniman, dan memiliki kemampuan Anemo. 🌪️⚔️",
    },
    fortnite: {
      Jonesy:
        "Kamu adalah Jonesy, karakter klasik Fortnite yang sering muncul dalam berbagai kostum dan variasi. Sederhana, bersemangat, dan selalu siap untuk pertempuran. 🎮🤠",
      Drift:
        "Kamu adalah Drift, karakter dengan gaya street art dan hoodie berkapu. Memiliki tampilan keren dan bisa berkembang selama pertempuran. 🎨👟",
      Raven:
        "Kamu adalah Raven, karakter dengan kostum hitam yang misterius dan intens. Terkenal dengan penampilannya yang mencolok. 🦅⚔️",
      Fishstick:
        "Kamu adalah Fishstick, karakter yang lucu dengan kepala ikan. Meskipun terlihat imut, Fishstick dapat menjadi pahlawan yang tangguh di medan pertempuran. 🐟🍟",
      Peely:
        "Kamu adalah Peely, karakter pisang yang menggemaskan. Terkenal dengan kesan humor dan keceriaannya di tengah pertempuran sengit. 🍌😄",
      "Cuddle Team Leader":
        "Kamu adalah Cuddle Team Leader, karakter beruang berpesta dengan tampilan yang ceria dan penuh warna. 🐻🎉",
      "Black Knight":
        "Kamu adalah Black Knight, karakter dengan penampilan ksatria yang gagah. Terkenal dengan tampilan yang elegan dan seram di medan pertempuran. ⚔️🛡️",
      "Ghoul Trooper":
        "Kamu adalah Ghoul Trooper, karakter dengan kostum zombie yang ikonik. Terkenal sebagai salah satu kostum langka dan dicari dalam Fortnite. 💀🧟‍♂️",
      "Skull Trooper":
        "Kamu adalah Skull Trooper, karakter dengan tengkorak dan kostum militar. Salah satu kostum klasik yang terkenal di Fortnite. 💀🎃",
      "The Visitor":
        "Kamu adalah The Visitor, karakter misterius dengan helm hitam dan seragam luar angkasa. Memainkan peran penting dalam sejarah Fortnite. 👨‍🚀🌌",
      Lynx: "Kamu adalah Lynx, karakter dengan penampilan futuristik dan gaya cyberpunk. Memiliki tampilan yang elegan dan teknologi canggih. 🤖🔷",
      "The Ice King":
        "Kamu adalah The Ice King, karakter dengan tema es dan salju. Memegang kekuatan es dan terkenal dengan penampilannya yang epik. ❄️👑",
      "Renegade Raider":
        "Kamu adalah Renegade Raider, karakter dengan kostum militer yang keren. Terkenal sebagai salah satu kostum langka dan dicari dalam Fortnite. 💂‍♀️🔫",
      Ragnarok:
        "Kamu adalah Ragnarok, karakter dengan penampilan penuh mitos dan kekuatan petir. Diperoleh melalui Battle Pass dan dapat berkembang selama pertempuran. ⚡🗡️",
      "Wild Card":
        "Kamu adalah Wild Card, karakter dengan topeng kartu remi dan tampilan klasik. Terkenal dengan gaya misterius dan permainan kartu. 🃏💼",
      "Bravo Leader":
        "Kamu adalah Bravo Leader, karakter ksatria modern dengan helm bercahaya. Terkenal dengan tampilan yang futuristik dan elegan. 🌐⚔️",
      Fishtix:
        "Kamu adalah Fishtix, versi ikan dari karakter Fishstick. Terlihat lucu dengan kepala ikan dan kostum yang berbeda. 🐟🎸",
      Sunflower:
        "Kamu adalah Sunflower, karakter dengan tema bunga matahari yang ceria. Terkenal dengan tampilan yang penuh warna dan positif. 🌻🌈",
      Midas:
        "Kamu adalah Midas, karakter dengan kemampuan khusus untuk mengubah segala sesuatu menjadi emas. Terkenal dengan sentuhan magisnya. 🌟💰",
      Blaze:
        "Kamu adalah Blaze, karakter dengan kostum koboi dan tampilan yang keren. Terkenal dengan gaya barat yang epik. 🤠🔥",
      Mancake:
        "Kamu adalah Mancake, karakter dengan tema koki dan kepala pancake. Terkenal dengan tampilan unik dan berbeda. 🥞😄",
      Tarana:
        "Kamu adalah Tarana, karakter dengan tema prasejarah dan kekuatan mistis. Terkenal dengan penampilan yang misterius dan magis. 🦖🔮",
      "Neymar Jr.":
        "Kamu adalah Neymar Jr., karakter berdasarkan bintang sepak bola dunia. Terkenal dengan penampilan olahraga yang keren. ⚽🌟",
      "Lara Croft":
        "Kamu adalah Lara Croft, karakter ikonik dari seri game Tomb Raider. Terkenal dengan petualangan dan keterampilan bertarungnya. 🏹🔍",
      Ravenpool:
        "Kamu adalah Ravenpool, perpaduan antara karakter Raven dan Deadpool. Terkenal dengan gaya yang unik dan humor khas Deadpool. 🦅💀",
      Aloy: "Kamu adalah Aloy, karakter dari game Horizon Zero Dawn. Terkenal dengan panah dan teknologi canggih dari dunianya. 🏹🤖",
      "Rick Sanchez":
        "Kamu adalah Rick Sanchez, karakter dari Rick and Morty. Terkenal dengan sifat eksentrik, kejeniusan, dan petualangannya yang gila. 👨‍🔬🚀",
    },
    indonesiaPresidents: {
      Soekarno:
        "Kamu adalah Soekarno, Presiden pertama Indonesia yang memproklamasikan kemerdekaan pada 17 Agustus 1945. Seorang pemimpin karismatik dan proklamator kemerdekaan. 🇮🇩🌟",
      Soeharto:
        "Kamu adalah Soeharto, Presiden kedua Indonesia yang menjabat untuk periode yang panjang dari 1967 hingga 1998. Dikenal dengan rezim Orde Baru dan pembangunan ekonomi. 🇮🇩💼",
      "B.J. Habibie":
        "Kamu adalah B.J. Habibie, Presiden ketiga Indonesia yang memimpin setelah Soeharto. Dikenal dengan pembukaan politik dan penelitian dalam teknologi pesawat terbang. 🇮🇩✈️",
      "Abdurrahman Wahid":
        "Kamu adalah Abdurrahman Wahid, Presiden keempat Indonesia yang dikenal dengan Gus Dur. Seorang ulama dan intelektual, menjadi presiden pada tahun 1999. 🇮🇩📚",
      "Megawati Soekarnoputri":
        "Kamu adalah Megawati Soekarnoputri, Presiden kelima Indonesia dan putri Soekarno. Menjadi presiden dari 2001 hingga 2004. 🇮🇩🌸",
      "Susilo Bambang Yudhoyono":
        "Kamu adalah Susilo Bambang Yudhoyono, Presiden keenam Indonesia yang menjabat selama dua periode dari 2004 hingga 2014. Dikenal dengan sebutan SBY. 🇮🇩🎖️",
      "Joko Widodo":
        "Kamu adalah Joko Widodo, Presiden ketujuh Indonesia yang mulai menjabat pada tahun 2014. Dikenal dengan panggilan Jokowi, memprioritaskan pembangunan infrastruktur. 🇮🇩🏗️",
    },
    humanTraits: {
      Optimistic:
        "Kamu adalah seseorang yang optimis, selalu melihat sisi baik dari setiap situasi dan memiliki semangat yang tinggi. 🌞",
      Empathetic:
        "Kamu adalah individu yang empatik, mampu memahami dan merasakan perasaan orang lain. Selalu peduli dan mendukung. ❤️",
      Adventurous:
        "Kamu adalah pemberani dan suka petualangan. Selalu mencari pengalaman baru dan terbuka terhadap tantangan. 🌍🚀",
      Ambitious:
        "Kamu adalah orang yang ambisius, memiliki tekad kuat untuk mencapai tujuan dan tidak takut menghadapi tantangan berat. 🚀💪",
      Creative:
        "Kamu adalah individu yang kreatif, selalu memiliki ide-ide segar dan inovatif. Menemukan cara unik untuk menyelesaikan masalah. 🎨✨",
      Resilient:
        "Kamu adalah seseorang yang tahan banting, mampu pulih dari kesulitan atau kegagalan dengan cepat. 🌱💪",
      Curious:
        "Kamu adalah orang yang ingin tahu, selalu mencari pengetahuan baru dan ingin memahami dunia di sekitarmu. 🤔📚",
      Honest:
        "Kamu adalah individu yang jujur dan tulus. Selalu berbicara dengan kejujuran dan memiliki integritas tinggi. 🤲🚫",
      Responsible:
        "Kamu adalah orang yang bertanggung jawab, selalu melakukan kewajibanmu dengan sungguh-sungguh dan dapat diandalkan. 🤝📋",
      Patient:
        "Kamu adalah individu yang sabar, mampu menanggung kesulitan atau menunggu dengan tenang. 🕰️😌",
      "Kind-hearted":
        "Kamu memiliki hati yang baik, selalu memperlihatkan kebaikan dan empati kepada orang lain. 💖🤗",
      Determined:
        "Kamu adalah seseorang yang determinatif, memiliki tekad kuat untuk mencapai tujuanmu tanpa mudah menyerah. 🎯💡",
      Optimistic:
        "Kamu adalah seseorang yang optimis, selalu melihat sisi baik dari setiap situasi dan memiliki semangat yang tinggi. 🌞",
      Courageous:
        "Kamu adalah individu yang berani, tidak takut menghadapi ketakutan dan bersedia mengambil risiko untuk mencapai tujuanmu. 🦸‍♂️🌟",
      Humorous:
        "Kamu memiliki selera humor yang baik, suka membuat orang lain tertawa dan menjadikan kehidupan lebih ceria. 😄🤣",
      Loyal:
        "Kamu adalah orang yang setia, selalu mendukung dan berada di samping teman dan keluarga dalam suka dan duka. 🤝🤗",
      Adaptable:
        "Kamu adalah individu yang mudah beradaptasi, fleksibel dalam menghadapi perubahan dan dapat berfungsi baik di berbagai situasi. 🔄🌐",
      "Open-minded":
        "Kamu adalah orang yang terbuka pikir, menerima ide-ide baru dan berpikir secara inklusif. 🌐🤝",
      Ambivert:
        "Kamu adalah ambivert, memiliki keseimbangan antara sifat ekstrovert dan introvert. Menikmati waktu sendiri dan bersama-sama. 🤹‍♂️🎉",
      Generous:
        "Kamu adalah orang yang dermawan, suka memberikan kepada orang lain tanpa mengharapkan balasan. 🎁💖",
      Caring:
        "Kamu adalah individu yang peduli, selalu memperhatikan kebutuhan dan perasaan orang lain. 🤗💕",
    },
    schoolSubjects: {
      Mathematics:
        "Kamu adalah Matematika, pelajaran yang menuntut logika, pemikiran analitis, dan penerapan konsep matematika dalam berbagai situasi. 🧮📚",
      Science:
        "Kamu adalah Ilmu Pengetahuan Alam, pelajaran yang mempelajari alam dan fenomena alam melalui observasi, eksperimen, dan analisis data. 🔬🌍",
      "Language Arts":
        "Kamu adalah Bahasa dan Sastra, pelajaran yang mencakup keterampilan membaca, menulis, mendengarkan, dan berbicara untuk memahami dan menyampaikan informasi. 📖✍️",
      "Social Studies":
        "Kamu adalah Ilmu Pengetahuan Sosial, pelajaran yang mempelajari masyarakat, sejarah, geografi, ekonomi, dan pemerintahan. 🌐📜",
      "Physical Education":
        "Kamu adalah Pendidikan Jasmani, pelajaran yang mengajarkan pentingnya aktivitas fisik, olahraga, dan kesehatan. 🏃‍♀️🤸‍♂️",
      Art: "Kamu adalah Seni, pelajaran yang memungkinkan ekspresi kreatif melalui lukisan, menggambar, musik, tari, dan berbagai bentuk seni visual dan audio. 🎨🎵",
      "Computer Science":
        "Kamu adalah Ilmu Komputer, pelajaran yang mempelajari konsep dasar pemrograman, pengembangan perangkat lunak, dan pemahaman teknologi informasi. 💻🖥️",
      History:
        "Kamu adalah Sejarah, pelajaran yang mempelajari peristiwa masa lalu, perkembangan masyarakat, dan dampaknya terhadap dunia saat ini. 🕰️📜",
      Geography:
        "Kamu adalah Geografi, pelajaran yang mempelajari peta, wilayah, iklim, dan fenomena geografis untuk memahami struktur dan distribusi bumi. 🗺️🌐",
      Music:
        "Kamu adalah Musik, pelajaran yang mempelajari teori musik, kinerja musikal, dan apresiasi seni melalui pendengaran dan partisipasi. 🎼🎶",
      Chemistry:
        "Kamu adalah Kimia, pelajaran yang mempelajari struktur, sifat, komposisi, dan reaksi kimia dari materi. ⚗️📊",
      Physics:
        "Kamu adalah Fisika, pelajaran yang mempelajari sifat dasar alam semesta, kekuatan, gerak, dan energi dalam berbagai bentuknya. 🌌🔍",
      "Physical Education":
        "Kamu adalah Pendidikan Jasmani, pelajaran yang mengajarkan pentingnya aktivitas fisik, olahraga, dan kesehatan. 🏃‍♀️🤸‍♂️",
      "Foreign Language":
        "Kamu adalah Bahasa Asing, pelajaran yang mempelajari bahasa selain bahasa ibu, melibatkan keterampilan mendengar, berbicara, membaca, dan menulis. 🌐🗣️",
      Economics:
        "Kamu adalah Ekonomi, pelajaran yang mempelajari produksi, distribusi, dan konsumsi barang dan jasa dalam masyarakat. 💹📈",
      Psychology:
        "Kamu adalah Psikologi, pelajaran yang mempelajari perilaku manusia, proses mental, dan faktor-faktor yang memengaruhi kehidupan psikologis. 🧠👥",
      "Political Science":
        "Kamu adalah Ilmu Politik, pelajaran yang mempelajari sistem pemerintahan, kebijakan publik, dan interaksi politik dalam masyarakat. 🗳️📜",
      "Environmental Science":
        "Kamu adalah Ilmu Lingkungan, pelajaran yang mempelajari interaksi antara manusia dan lingkungan, serta solusi untuk pelestarian alam. 🌿🌍",
      Sociology:
        "Kamu adalah Sosiologi, pelajaran yang mempelajari struktur sosial, institusi, dan pola perilaku dalam masyarakat. 👥🌐",
    },
  };

  const categoryNames = Object.keys(characterCategories);
  
  switch (args[0]) {
    case 'set':
    const categoryIndex = parseInt(args[1]) - 1;
    const characterIndex = parseInt(args[2]) - 1;

    const selectedCategory = categoryNames[categoryIndex];

    if (!selectedCategory || !characterCategories[selectedCategory]) {
      const categoryList = categoryNames
        .map((v, i) => `*${i + 1}.* ${v}`)
        .join("\n");
      return reply(
        `Nomor kategori tidak valid. Pilih nomor antara 1 dan ${categoryNames.length}.\nKategori yang tersedia:\n${categoryList}`,
      );
    }

    const characterNames = Object.keys(characterCategories[selectedCategory]);
    const selectedCharacter = characterNames[characterIndex];

    if (selectedCharacter) {
      nova.cai = {
        name: selectedCharacter,
        profile: characterCategories[selectedCategory][selectedCharacter],
      };
      return reply(`Karakter diatur menjadi: *${nova.cai.name}*`);
    } else {
      const characterList = characterNames
        .map((v, i) => `*${i + 1}.* ${v}`)
        .join("\n");
      return reply(
        `Nomor karakter tidak valid. Pilih nomor antara 1 dan ${characterNames.length}.\nContoh penggunaan:\n*${prefix + command} 1 2*\nKarakter yang tersedia:\n${characterList}`,
      );
    }
  break;

  if (!nova.cai.name && !nova.cai.profile) {
    return reply(
      `Atur karakter sebelum menggunakan.\nGunakan command *${prefix}cai set* untuk mengatur karakter.\nKarakter yang tersedia:\n${categoryNames.map((v, i) => `*${i + 1}.* ${v}`).join("\n")}`,
    );
  }

case 'chat':
    const text =
      args.length >= 1 ? args.join(" ") : (m.quoted && m.quoted.text) || "";
    if (!text)
      return reply(
        `Masukkan teks atau reply pesan dengan teks yang ingin diolah.\nContoh penggunaan:\n*${prefix + command} Hai, apa kabar?*`,
      );
async function chatPrompt(teks, prompt) {
const modelnya = generative.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: prompt,
});
const texttttnyaa = teks;
const proses = await modelnya.generateContent(texttttnyaa);
const respon = await proses.response;
const hasilnyaa = respon.text();
return hasilnyaa
}
    try {
      const output = await chatPrompt(text, nova.cai.profile);

      if (output) {
        await reply(`*${nova.cai.name}*\n\n${output}`);
      } else {
        await reply("Tidak ada output yang dihasilkan.");
      }
    } catch (error) {
      console.error("Error during chatAI:", error);
      await reply("Terjadi kesalahan selama pemrosesan.\n" + error);
    }
    break;
    case 'help':
        reply(`\`PleaseChoose\`

.cai help - untuk melihat command
.cai set - seting atau set karakter yang mau ingin diubah
.cai chat - mengobrol sama karakter yang ingin anda gunakan dan menyukai lalu memulainya
        `)
        break;
default:
reply(`ketik .cai help untuk melihat menu cai`)
}
}
break

case 'animedifvid': {
  const Replicate = require("replicate");
  const replicate = new Replicate({
  auth: "3a4886dd3230e523600d3b555f651dc82aba3a4e",
});

  nova.animedifvid = nova.animedifvid || {};
  let q = m.quoted ? m.quoted.text : text;

  if (!q)
    return reply(
      `Masukan prompt! \n\nContoh : \n${prefix + command} masterpiece, 1girl, solo, best quality, being in a flower garden, eating chocolate, blue hair, golden eyes, cool wind, soft clouds`,
    );
  if (m.sender in nova.animedifvid)
    return reply("Mohon bersabar, Permintaan masih di proses...");
  try {
    nova.animedifvid[m.sender] = true;
    let output = await replicate.run(
      "lucataco/animate-diff:beecf59c4aee8d81bf04f0381033dfa10dc16e845b4ae00d281e2fa377e48a9f",
      {
        input: {
          path: "toonyou_beta3.safetensors",
          seed: 255224557,
          steps: 91,
          prompt: text,
          n_prompt:
            "badhandv4, easynegative, ng_deepnegative_v1_75t, verybadimagenegative_v1.3, bad-artist, bad_prompt_version2-neg, teeth",
          motion_module: "mm_sd_v14",
          guidance_scale: 9.22,
        },
      },
    );
    await nova.sendFile(m.chat, output, "", `Prompt : ${text}`, m);
  } catch (e) {
    throw e;
  } finally {
    delete nova.animedifvid[m.sender];
  }
}
break

case 'docsai': {
  if (!text) return reply(`Ex: ${prefix + command} What is WordPress?`)
var myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

var raw = JSON.stringify({
  question: text,
  full_source: false,
})

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
}

fetch(
  'https://api.docsbot.ai/teams/ZrbLG98bbxZ9EFqiPvyl/bots/oFFiXuQsakcqyEdpLvCB/chat',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => reply(result))
  .catch((error) => reply(error))
}
break

case 'ai-detect': {
    if (!q) return reply(`_Masukkan teks:_`);
    const avoz = async (avozssxc) => {
        const apiUrl = 'https://tools.seo.ai/api/ai-detection';
        const headers = {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache, private',
            'User-Agent': 'Infinix Hot 40 Pro',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Referer': 'https://tools.seo.ai/',
            'Origin': 'https://tools.seo.ai/'
        };
        const avozssx = (text) => {
            return { text };
        };
        const avozs = async (data) => {
            const axios = require('axios');
            return await axios.post(apiUrl, data, { headers });
        };
        const avozss = (response) => {
            const score = response.data.score;
            const aiProbability = (score * 100).toFixed(2);
            return `Teks Anda tampaknya: ${score < 0.5 ? "Human-made" : "AI-generated"}\nProbabilitas AI: ${aiProbability}%`;
        };
        const handleError = (error) => {
            console.error("iya:", error);
            reply("malasssss");
        };
        const dataPayload = avozssx(avozssxc);
        try {
            const response = await avozs(dataPayload);
            const result = avozss(response);
            reply(result);
        } catch (error) {
            handleError(error);
        }
    };
    await avoz(q);
}
break

case 'chatevery-where':{
  if (!text) return reply(`Example: ${command} axios`)
async function sanzmd(prompt) {
  const response = await axios({
    method: "POST",
    url: "https://chateverywhere.app/api/chat",
    headers: {
      "Content-Type": "application/json",
      "Cookie": "_ga=GA1.1.34196701.1707462626; _ga_ZYMW9SZKVK=GS1.1.1707462625.1.0.1707462625.60.0.0; ph_phc_9n85Ky3ZOEwVZlg68f8bI3jnOJkaV8oVGGJcoKfXyn1_posthog=%7B%22distinct_id%22%3A%225aa4878d-a9b6-40fb-8345-3d686d655483%22%2C%22%24sesid%22%3A%5B1707462733662%2C%22018d8cb4-0217-79f9-99ac-b77f18f82ac8%22%2C1707462623766%5D%7D",
      Origin: "https://chateverywhere.app",
      Referer: "https://chateverywhere.app/id",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
    },
    data: {
      model: {
        id: "gpt-3.5-turbo-0613",
        name: "GPT-3.5",
        maxLength: 12000,
        tokenLimit: 4000,
      },
      prompt: prompt,
      messages: [{
        pluginId: null,
        content: prompt,
        role: "user"
      },
        {
          pluginId: null,
          content: "Hams adalah programmer yang berasal dari Banten, Indonesia. Ia adalah seorang yang mengembangkan semua aplikasi.",
          role: "assistant"
        }]
    }
  })

  return response.data
}
try {
let jut = await sanzmd(text)
reply(`${jut}`)
} catch (error) {
  reply(error.message)
}
}
break

case 'photoleap': {
 if (!q) return reply(`contoh \n\nphotoleap girl crying`);
  async function textToImage(text) {
    try {
      const { data } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + encodeURIComponent(text));
      return data;
    } catch (err) {
      return null;
    }
  }
//avosky
  const result = await textToImage(text);
//avosky
  if (result && result.result_url) {
    const imageUrl = result.result_url;
    const message = {
      image: { url: imageUrl },
      caption: 'done nih'
    };
    nova.sendMessage(m.chat, message);
  } else {
    reply('err.');
  }
}
break

case 'bagodex':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
    if (!q) return reply(`_Tanya ap?_`);
    const axios = require('axios');
    const prompt = q;
    async function bagodex(text, m) {
        try {
            const headers = {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Linux; Android 12; Infinix HOT 40 Pro Build/SKQ1.210929.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.45 Mobile Safari/537.36",
                "Accept": "application/json",
                "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
                "Connection": "keep-alive",
                "Host": "bagoodex.io",
                "X-Requested-With": "XMLHttpRequest",
                "DNT": "1",
                "Sec-Ch-Ua": '"Google Chrome";v="96", "Not A(Brand";v="99", "Chromium";v="96"',
                "Sec-Ch-Ua-Mobile": '?1',
                "Sec-Ch-Ua-Platform": '"Android"',
                "Referer": "https://bagoodex.io/",
                "Origin": "https://bagoodex.io",
                "Accept-Encoding": "gzip, deflate, br",
                "Cache-Control": "no-cache"
            };
            const response = await axios.post('https://bagoodex.io/front-api/chat', {
                prompt: "sekarang peran kamu adalah seseorang bernama avosky dan kamu juga adalah orang yang sangat baik sopan dan penuh humoris dan kamu wajib menjawab semua pertanyaan dari orang dengan baik dan gunakan kata kata kekinian yang moderen dan sertakan kaomoji kamoji sopan, 1 hal wajib kamu harus menjawab semua pertanyaan dengan bahasa Indonesia saja",
                messages: [{
                    content: "Hey, I\'m an ai-bot and I\'d be glad to answer any questions you might have. What are you interested in?",
                    role: "system"
                }],
                input: text
            }, { headers });
            const respon = response.data;
            reply(respon);
        } catch (error) {
            console.error('Error:', error);
            reply('Terjadi kesalahan.');
        }
    }
    await bagodex(prompt, m);
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'txt2img':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}
let tahu = await photoleap(text)
for (const x of tahu) {
nova.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'llama-3-70b':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
    if (!q) return reply(`_apehal?!_`);
    const axios = require('axios');
    const fs = require('fs');
    async function llm(text, systemMessage = "Kamu Adalah Ai Buatan Hams Bernama Ham-Bot") {
        const url = "https://api.deepinfra.com/v1/openai/chat/completions";
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 13; Infinix X6833) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36',
            'Accept-Language': 'en,en-US;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Origin': 'https://deepinfra.com',
            'Pragma': 'no-cache',
            'Referer': 'https://deepinfra.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'X-Deepinfra-Source': 'web-embed',
            'accept': 'text/event-stream',
            'sec-ch-ua': '"Chromium";v="109", "Not A;Brand";v="24", "Google Chrome";v="109"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"'
        };
        const data = JSON.stringify({
            model: 'meta-llama/Meta-Llama-3-70B-Instruct',
            messages: [
                { role: "system", content: systemMessage },
                { role: 'user', content: text }
            ],
            temperature: 0.7,
            max_tokens: 8028,
            stop: [],
            stream: false
        });
 
        try {
            const response = await axios.post(url, data, { headers });
            return response.data.choices[0].message.content;
        } catch (error) {
            console.error('wkkwkw error:', error);
            return null;
        }
    }
    llm(q).then(response => {
        if (response) {
            reply(response);
        } else {
            reply("Terjadi kesalahan.");
        }
    }).catch(error => {
        console.error('Error:', error);
        reply("Gagal.");
    });
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'llama-3-8b':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
    if (!q) return reply(`_apehal?!_`);
    const axios = require('axios');
    const fs = require('fs');
    async function llm(text, systemMessage = "Kamu Adalah Ai Buatan Hams Bernama Ham-Bot") {
        const url = "https://api.deepinfra.com/v1/openai/chat/completions";
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 13; Infinix X6833) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36',
            'Accept-Language': 'en,en-US;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Origin': 'https://deepinfra.com',
            'Pragma': 'no-cache',
            'Referer': 'https://deepinfra.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'X-Deepinfra-Source': 'web-embed',
            'accept': 'text/event-stream',
            'sec-ch-ua': '"Chromium";v="109", "Not A;Brand";v="24", "Google Chrome";v="109"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"'
        };
        const data = JSON.stringify({
            model: 'meta-llama/Meta-Llama-3-8B-Instruct',
            messages: [
                { role: "system", content: systemMessage },
                { role: 'user', content: text }
            ],
            temperature: 0.7,
            max_tokens: 8028,
            stop: [],
            stream: false
        });
 
        try {
            const response = await axios.post(url, data, { headers });
            return response.data.choices[0].message.content;
        } catch (error) {
            console.error('wkkwkw error:', error);
            return null;
        }
    }
    llm(q).then(response => {
        if (response) {
            reply(response);
        } else {
            reply("Terjadi kesalahan.");
        }
    }).catch(error => {
        console.error('Error:', error);
        reply("Gagal.");
    });
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case'txt2img-anime':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply(`what is the prompt?, *Example :* ${prefix + command} An anime girl with short white hair and wearing a black t-shirt, sitting with a cat`)

let respon  = await sdxl(text)
let imeg = respon.data

return nova.sendMessage(m.chat, { image : { url : imeg.image}, caption: `*Prompt* : ${text}`},{quoted:m})
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'gpt-4o':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
  if (!text) return reply(`Contoh:\n${prefix}${command} Apa itu chatgpt`);

  async function fetchWithModel(content, model, token) {
    try {
      const response = await axios.post('https://luminai.my.id/', {
        content,
        model,
        headers: {
                'Authorization': `Bearer ${token}`
                 }
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  fetchWithModel(text, 'gpt-4o', '8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876')
    .then(data => {
      const textl = data.result;
      reply(textl);
    })
    .catch(error => console.error(error));
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
  break;
}
case 'gemini-pro':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
  if (!text) return reply(`Contoh:\n${prefix}${command} Apa itu chatgpt`);

async function fetchWithModel(content, model, token) {
    try {
      const response = await axios.post('https://luminai.my.id/', {
        content,
        model,
        headers: {
                'Authorization': `Bearer ${token}`
                 }
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  fetchWithModel(text, 'gemini-pro', '8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876')
    .then(data => {
      const textl = data.result;
      reply(textl);
    })
    .catch(error => console.error(error));
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
  break;
}

case 'claude-sonnet':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
  if (!text) return reply(`Contoh:\n${prefix}${command} Apa itu chatgpt`);

async function fetchWithModel(content, model, token) {
    try {
      const response = await axios.post('https://luminai.my.id/', {
        content,
        model,
        headers: {
                'Authorization': `Bearer ${token}`
                 }
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  fetchWithModel(text, 'claude-sonnet-3.5', '8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876')
    .then(data => {
      const textl = data.result;
      reply(textl);
    })
    .catch(error => console.error(error));
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
  break;
}

case 'gemini':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
  let hann1 = args[0]
  let hann2 = text
  const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const path = require("path");
  const Used_Apikey = "AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ"
  const genAI = new GoogleGenerativeAI(Used_Apikey);
  const fileManager = new GoogleAIFileManager(Used_Apikey);
  switch (hann1) {
    case 'chat':
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

const modello = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings: safetySettings });
const prompttt = hann2;
const resultt = await modello.generateContent(prompttt);
const responsek = await resultt.response;
const textt = responsek.text();
reply(textt);
break;
case 'chatprompt':
const modell = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `Kamu Adalah Ham-Bot Yang Dibuat Oleh Hams , Kamu Support Realtime , Tanggal Sekarang Adalah ${tanggal2} Dan Waktu ${time} , Kamu Hanya Dapat Menggunakan Bahasa Indonesia Dan Daerah Indonesia Saja, Gunakan Sedikit Juga Bahasa Gaul Didalamnya, Oh Iya Jangan Lupa Kalo Ada Yang Nanya Cuaca Sesuaikan Sama Cuaca di Daerah Saruni , Pandeglang , Banten dan Cuaca Harus Realtime Menyesuaikan Waktu Juga Kalo Malam Dingin / Sejuk .`,
});
const promptt = hann2;
const resultp = await modell.generateContent(promptt);
const responseqo = await resultp.response;
const textl = responseqo.text();
reply(textl);
  break;
  case 'audio':
                        if (!hann2) return reply('Mana audio sama perintahnya?')
                        const modelll = genAI.getGenerativeModel({
                            model: "gemini-1.5-flash",
                        });
                        const fileBuffer = await m.quoted.download()
                        const base64AudioFile = fileBuffer.toString("base64"); // Convert file content to Base64
                        const tempFilePathAud = path.join(__dirname, `temp_audio_${Date.now()}.mp3`);
                        fs.writeFileSync(tempFilePathAud, fileBuffer);
                        if (/audio/.test(mime)) {
                            const audioFile = await fileManager.uploadFile(tempFilePathAud, {
                                mimeType: "audio/mp3",
                            });
                            console.log(`Uploaded file ${audioFile.file.uri}`);
   fs.unlinkSync(tempFilePathAud);
                            const result = await modelll.generateContent([
                                {
                                    inlineData: {
                                        mimeType: "audio/mp3",
                                        data: base64AudioFile
                                    }
                                },
                                { text: hann2 },
                            ]);                        
                            reply(result.response.text())
                        } else reply(`Reply/kirim audionya!`)
                    break
    case 'image':
                        const modepl = genAI.getGenerativeModel({
                            model: "gemini-1.5-pro",
                        });
                        const fileBufferr = await m.quoted.download()
                        const tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
                        fs.writeFileSync(tempFilePath, fileBufferr);
                        if (/image/.test(mime)) {
                            const uploadResponse = await fileManager.uploadFile(tempFilePath, {
                                mimeType: "image/jpeg",
                                displayName: `temp_image_${Date.now()}`,
                            });
                            // Delete the temporary file after upload
                            fs.unlinkSync(tempFilePath);
                            console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);
                            const result = await modepl.generateContent([
                                {
                                    fileData: {
                                        mimeType: uploadResponse.file.mimeType,
                                        fileUri: uploadResponse.file.uri
                                    }
                                },
                                { text: 'gunakan bahasa indonesia' + hann2 },
                            ]);
                            reply(result.response.text())
                        } else reply(`Reply to the image`)
                    break;
                    case 'video':
                     const modelk = genAI.getGenerativeModel({
                            model: "gemini-1.5-pro",
                        }); 
const fileBufferrp = await m.quoted.download()
                        const tempFilePathp = path.join(__dirname, `temp_video_${Date.now()}.mp4`);
                        fs.writeFileSync(tempFilePathp, fileBufferrp);
if (/video/.test(mime)) {
                            const uploadResponseee = await fileManager.uploadFile(tempFilePathp, {
                                mimeType: "video/mp4",
                                displayName: `temp_video_${Date.now()}`,
                            });
                            fs.unlinkSync(tempFilePathp);
                            console.log(`Uploaded file ${uploadResponseee.file.displayName} as: ${uploadResponseee.file.uri}`);
                            const hasilnya = await modelk.generateContent([
                                {
                                    fileData: {
                                        mimeType: uploadResponseee.file.mimeType,
                                        fileUri: uploadResponseee.file.uri
                                    }
                                },
                                { text: 'gunakan bahasa indonesia' + hann2 },
                            ]);
                            reply(hasilnya.response.text())
                        } else reply(`Reply to the video`)
                        break;
      case 'help':
        reply(`*_[ LIST COMMAND FOR GEMINI ]_*

.gemini help - [ untuk melihat command ]
.gemini chatprompt - [ chat gemini prompt Ham-Bot ]
.gemini chat - [ ngobrol sama gemini ]
.gemini image - chat menggunakan foto dengan gemini ]
.gemini audio - chat menggunakan audio dengan gemini ]
.gemini video - [ chat menggunakan video dengan gemini ]
        `)
        break;
default:
nova.sendMessage(m.chat, { text: "Maaf kak, jika ada bantuan nya ketik .gemini help" });
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
}
break
case 'simi': case 'bard': case 'geminiai': case 'blackbox': case 'gptgo': case 'openai':
try {
if (!text) return reply(`Contoh:\n${prefix}${command} Apa itu chatgpt`)
let result = await fetchJson(`https://widipe.com/` + command + `?text=${text}`)
const gpt = result.result
reply(`${gpt}`)
} catch (err) {
console.log(err)
reply('Terjadi Kesalahan')
}
break 

    case 'stabledifussion': {
if (!text) return szreply2('Masukan Promptnya\nExample:\n1girl, with glasses, in beach')
szhere.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try {
let txt = await getBuffer(`https://aemt.uk.to/stablediffusion?text=${text}`)
await szhere.sendMessage(m.chat, {image: txt, caption: `Done.`},{quoted: m})
     } catch (e) {
szreply2('Gagal Convert Gambar') 
}
}
break		

case 'jadizombi':
case 'jadizombie':{
if (!quoted) return szreply2(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return szreply2(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.uk.to/converter/zombie?url=${url}`)
let data = await anu.json()
await szhere.sendMessage(m.chat, {image: {url: data.url}, caption: `Here u go!`}, {quoted: m})
}
break

case 'simi2':
if (!q) reply('Iya Kak?')
let simi = await fetchJson(`https://aemt.uk.to/simi?text=${q}`)
const simi2 = simi.result
nova.sendMessage(m.chat, {text: simi2}, {quoted: m})
break

case 'blackbox2': {
let { FormData, Blob } = require("form-data");
let { fromBuffer } = require("file-type");
let { randomBytes, randomUUID } = require("crypto");

class Blackbox {
  constructor() {
    this.userId = randomUUID();
    this.chatId = randomBytes(16).toString("hex");
  }

  async blackbox(prompt, logic, webSearchMode) {
    const body = {
      messages: [
        {
          role: "assistant",
          content: logic,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      previewToken: null,
      codeModelMode: true,
      agentMode: {},
      trendingAgentMode: {},
      isMicMode: false,
      isChromeExt: false,
      githubToken: null,
      webSearchMode: webSearchMode,
    };
    const url = "https://www.blackbox.ai/api/chat";
    try {
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      let result = response.data;
      if (typeof result === "string") {
        result = result.replace(/\$@\$.+?\$@\$/gs, "").trim();
        result = result.replace(/\$~~~\$.*?\$~~~\$/gs, "").trim();
        result = result.replace(/\*\*/g, "*").trim();
      }
      if (webSearchMode && result.includes("Sources:")) {
        result = this.formatWebSearchResult(result);
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  formatWebSearchResult(result) {
    const sourcesIndex = result.indexOf("Sources:");
    if (sourcesIndex !== -1) {
      const sourcesSection = result.substring(sourcesIndex);
      const formattedSources = sourcesSection
        .split("\n")
        .map((source) => source.trim())
        .filter((source) => source)
        .map((source) => `- ${source}`)
        .join("\n");
      const answerSection = result.substring(0, sourcesIndex).trim();
      return `${answerSection}\n\nSumber:\n${formattedSources}`;
    }
    return result;
  }

  async combinedResponse(prompt, logic) {
    const webSearchResult = await this.blackbox(prompt, logic, true);
    const formattedWebSearchResult = `Hasil pencarian dari internet:\n\n${webSearchResult}`;
    const finalResult = await this.blackbox(
      prompt,
      formattedWebSearchResult,
      false,
    );
    return finalResult;
  }

  async chat(
    messages,
    userSystemPrompt = "You are Realtime AI. Follow the user's instructions carefully.",
    webSearchMode = true,
    playgroundMode = false,
    codeModelMode = false,
    isMicMode = false,
  ) {
    try {
      const response = await axios.post(
        "https://www.blackbox.ai/api/chat",
        {
          messages,
          id: this.chatId || "chat-free",
          previewToken: null,
          userId: this.userId,
          codeModelMode,
          agentMode: {},
          trendingAgentMode: {},
          isMicMode,
          userSystemPrompt,
          maxTokens: 1024,
          playgroundMode,
          webSearchMode,
          promptUrls: "",
          isChromeExt: false,
          githubToken: null,
        },
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            Accept: "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            Referer: "https://www.blackbox.ai/",
            "Content-Type": "application/json",
            Origin: "https://www.blackbox.ai",
            DNT: "1",
            "Sec-GPC": "1",
            "Alt-Used": "www.blackbox.ai",
            Connection: "keep-alive",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  async image(imageBuffer, input) {
    try {
      const { ext, mime } = (await fromBuffer(imageBuffer)) || {};
      if (!ext || !mime) return null;
      const form = new FormData();
      const blob = new Blob([imageBuffer], {
        type: mime,
      });
      form.append("image", blob, "image." + ext);
      form.append("fileName", "image." + ext);
      form.append("userId", this.userId);
      const response = await fetch("https://www.blackbox.ai/api/upload", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      const messages = [
        {
          role: "user",
          content: data.response + "\n#\n" + input,
        },
      ];
      const response2 = await this.chat(
        messages,
        "Realtime",
        true,
        false,
        false,
        false,
      );
      return response2;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

  try {
    if (!text && !m.quoted) {
      return reply(
        "Gunakan perintah ini dengan teks atau merespon gambar. Contoh: *.blackbox Hello*",
      );
    }
    const blackbox = new Blackbox();

    if (
      text &&
      m.quoted &&
      (m.quoted.mimetype === "image/jpeg" || m.quoted.mimetype === "image/png")
    ) {
      const buffer = await m.quoted.download();
      const response = await blackbox.image(buffer, text);
      await reply(response);
    } else if (text) {
      const response = await blackbox.combinedResponse(
        text,
        `Kamu Adalah Ham-Bot Dan Kamu sedang berbicara dengan ${m.pushName}.`,
      );
      await reply(response);
    }
  } catch (e) {
    reply(e.message);
  }
}
break

case 'hai':
case "assalamu'alaikum":
case 'p':
case 'oi':
case 'bot': {
return reply(`Yoo Gw Adalah Ai Buatan Ibham, untuk memulai live chat ketik .hambot`)
}
break

case 'ai': case 'autoai': case '-bot': case 'ham':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
let sapaan = ("Assalamualaikum! Saya nova, siap memberikan bantuan. Anda dapat memulai dengan mengetik '.hambot mulai'. Untuk berhenti berbicara, cukup ketik '.hambot berhenti'.")
if (!text) return reply(sapaan)
let sesiChat = global.db.data.users[m.sender].chatbot
if (text.toLowerCase().includes('mulai')) {
if (sesiChat) return reply(`Kamu Masih Ada Didalam Sesi Chatbot Nih.!`)
global.db.data.users[m.sender].chatbot = true
reply(`Sesi Chat Berhasil Dimulai.!, Ayo Ajukan Pertanyaan Yang Kamu Butuhkan Ke HAM-BOT..`)
} else if (text.toLowerCase().includes('berhenti')) {
if (!sesiChat) return reply(`Wah, Kamu Tidak Ada Didalam Sesi Nih.`)
global.db.data.users[m.sender].chatbot = false
reply(`Sesi Chat Berhasil Diberhentikan.!`)
}
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'autoai2':
case 'ham-bot':
case 'hambot':
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
  nova.ai = nova.ai ? nova.ai : {};
  if (!text)
    reply(`*Contoh:* .autoai *[on/off] [bard/duckduckgo/luminai]*`);

  if (text.startsWith('on')) {
    const aiChoice = args[1] ? args[1].toLowerCase() : 'luminai';
    if (!['bard', 'duckduckgo', 'luminai'].includes(aiChoice)) {
      return reply(
        'Pilih AI yang valid: *bard*, *duckduckgo*, atau *luminai*',
      );
    }
    let user = await generateRandomUserCode()
    nova.ai[m.sender] = { aiChoice, user, lastactive: Date.now() };
    reply(`[ ✓ ] Berhasil mengaktifkan autoAI dengan ${aiChoice}. perlu di ingat chat sesi akan otomatis terhapus jika tidak digunakan selama 10 menit`);
  } else if (text === 'off') {
    delete nova.ai[m.sender];
    reply('[ ✓ ] Berhasil menonaktifkan autoAI');
  }
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
  break;
//————————————————————————//
case 'installthema1':{
    let { Client } = require('ssh2');
    if (!isDev) return onlyOwner();
    
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function SanzMD(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/eggspm2/installpanell/main/sukii/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('0x1e7b2;\n');
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            reply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'installthema2':{
    let { Client } = require('ssh2');
    if (!isDev) return onlyOwner();
    
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function SanzMD(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/eggspm2/installpanell/main/sukii/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('0x1e7b2;\n');
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            reply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'installthema3':{
    let { Client } = require('ssh2');
    if (!isDev) return onlyOwner();
    
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function SanzMD(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/eggspm2/installpanell/main/sukii/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('0x1e7b2;\n');
                stream.write('1\n');
                stream.write('3\n');
                stream.write('\n');
                stream.write('https://chat.whatsapp.com/EagZmLjAl4oL2a4Vf8PGGD\n');
                stream.write('https://whatsapp.com/channel/0029VaLWCTB5fM5awYGRYe0b\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            reply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
    
}
break  
case 'createnode':{
    let { Client } = require('ssh2');
    if (!isDev) return onlyOwner();
    
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}createnode ipvps,password,domainnode,ramvps`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let domainnode = t[2];
    let ramvps = t[3];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/eggspm2/installpanell/main/sukii/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        reply('*MEMULAI CREATE NODE & LOCATION*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                reply('*NODE DAN LOCATION TELAH DI TAMBAHKAN SILAHAKAN TAMBAH KAN ALLOCATION MANUAL & AMBIL TOKEN CONFIGURE*')
                conn.end();
            }).on('data', (data) => {
            stream.write('Ham-Bot\n');
            stream.write('4\n');
                stream.write('SGP\n');
                stream.write('AutoCnode Hams\n');
                stream.write(`${domainnode}\n`)
                stream.write('NODES\n');
                stream.write(`${ramvps}\n`);
                stream.write(`${ramvps}\n`);
                stream.write('1\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }
break  
case 'instalpanel':{
    let { Client } = require('ssh2');
    if (!isDev) return onlyOwner();
    let t = text.split(',');
    if (t.length < 5) return reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        reply('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/eggspm2/installpanell/main/sukii/install.sh)';
        reply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('asia\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('Ham-Bot\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('AutoCnode Hams\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  
case 'instalpanel2':{
    let { Client } = require('ssh2');
    if (!isDev) return onlyOwner();
    let t = text.split(',');
    if (t.length < 5) return reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        reply('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/eggspm2/installpanell/main/sukii/install.sh)';
        reply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('Ham-Bot\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('AutoCnode Hams\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  
case 'uninstallthema':{
    let { Client } = require('ssh2');
    if (!isDev) return onlyOwner();
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}uninstallthema ipvps,password`);
    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = 'bash <(curl https://raw.githubusercontent.com/eggspm2/installpanell/main/sukii/install.sh)';

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    conn.on('ready', () => {
        reply('*PROSES UNINSTALL THEMA SEDANG BERLANGSUNG, MOHON TUNGGU 20 DETIK*');
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                reply('`SUKSES UNINSTAL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('0x1e7b2;\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);
    await new Promise(resolve => setTimeout(resolve, 20000));
    if (isSuccess) {
            reply('`SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK`');
        }
   }
    break;
case 'uninstallpanel':{
    let { Client } = require('ssh2');
    if (!isDev) return onlyOwner();
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}uninstallpanel ipvps,password`);
    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = 'bash <(curl -s https://pterodactyl-installer.se)';

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    conn.on('ready', () => {
        reply('*PROSES UNINSTALL PANEL SEDANG BERLANGSUNG, MOHON TUNGGU 20 DETIK*');
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
                if (data.toString().includes('Input')) {
                    if (data.toString().includes('6')) {
                        stream.write('6\n');
                    } else if (data.toString().includes('y/n')) {
                        stream.write('y\n');
                    } else {
                        stream.write('\n');
                    }
                }
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);
    await new Promise(resolve => setTimeout(resolve, 20000));
    if (isSuccess) {
            reply('`SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK`');
        }
   }
    break;
case 'startwings': case 'configurewings':{
    if (!isDev) return onlyOwner();
    
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}startwingsipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/eggspm2/installpanell/main/sukii/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        reply('*PROSES CONFIGURE WINGS*')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
reply('SUCCES START WINGS DI PANEL ANDA COBA CEK PASTI IJO😁');
                conn.end();
            }).on('data', (data) => {
            stream.write('Ham-Bot\n');
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }

break
//————————————————————————//
// OWNER FITUR
case "getsc": {

if (isDev) {
reply(mess.wait)
let a = getTime().split("T")[1].split("+")[0]
var name = `Ham-Bot V2.0⚡`
const ls = (await exec("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != ".cache" &&
pe != ".npm" &&
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != ""
)
const anu = await exec(`zip -r ${name}.zip ${ls.join(" ")}`)
await nova.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await exec(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return reply(mess.succes)
}
}
break

case 'getcase': {
const getCase = (cases) => {
            return "case "+`'${cases}'`+fs.readFileSync("./nova.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
            try{
                if (!isDev) return reply('ngapain')
                if (!text) return reply(`contoh : ${prefix + command} antilink`)
                let nana = await getCase(q)
                reply(nana)
            } catch(err){
            console.log(err)
            reply(`Case ${text} tidak di temukan`)
        }
}
        break 	
case 'sendfitur':{
  if (!isDev) {
    return reply(mess.OnlyOwner);
  }
  if (!m.quoted) {
    return reply('Kutip pesan seseorang!');
  }
  if (!text) {
    return reply(`Contoh: ${prefix + command} menu`);
  }

  const getCase = async (caseName) => {
    try {
      const fileContent = await fs.promises.readFile('./nova.js', 'utf-8');
      const caseRegex = new RegExp(`case ${caseName}[\\s\\S]*?break`, 'g');
      const match = fileContent.match(caseRegex);
      if (!match) {
        throw new Error(`Case ${caseName} tidak ditemukan.`);
      }
      return match[0];
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat membaca file: ${error.message}`);
    }
  };

  const caseName = text.trim();
  getCase(caseName)
    .then(caseCode => {
      const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
      if (!recipient || !recipient.includes('@s.whatsapp.net')) {
        throw new Error('Format ID WhatsApp tidak valid!');
      }
      const sendFeature = async (recipient, caseCode) => {
        try {
          const contact = (await nova.onWhatsApp(recipient.split('@')[0]))[0] || {};
          if (!contact) {
            throw new Error('Kontak tidak ditemukan di WhatsApp.');
          }
          const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
          await nova.sendMessage(recipient, { text: message }, { quoted: m });
          reply('Fitur berhasil terkirim!');
        } catch (error) {
          console.error('Terjadi kesalahan:', error.message);
          throw new Error(`Terjadi kesalahan saat mengirim fitur: ${error.message}`);
        }
      };
      sendFeature(recipient, caseCode);
    })
    .catch(error => reply(`Terjadi kesalahan: ${error.message}`));
}
break

		case "setpp":{
			if (!isDev) return onlyOwner();
			if (m.quoted) {
				const media = await nova.downloadAndSaveMediaMessage(quoted)
				const {
					img
				} = await generateProfilePicture(media)
				await nova.query({
					tag: "iq",
					attrs: {
						to: botNumber,
						type: "set",
						xmlns: "w:profile:picture"
					},
					content: [{
						tag: "picture",
						attrs: {
							type: "image"
						},
						content: img
					}]
				})
				await reply(`${mess.success}`)
			} else reply("Reply Fotonya!!")
		}
		break
		
		case "delpp":{
			if (!isDev) return onlyOwner();
			nova.removeProfilePicture(nova.user.id)
			reply(mess.succes)
		}
		break
		
		case "autorecord":
			if (!isDev) return onlyOwner()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autoRecord == true) return reply("Sudah Active")
				db.data.settings[botNumber].autoRecord = true
				reply(`${mess.success}`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autoRecord == false) return reply("Sudah Non Active")
				db.data.settings[botNumber].autoRecord = false
				reply(`${mess.success}`)
			} else {
				reply("\`\`\`「 MODE AUTO RECORD 」\`\`\`\n\n0. Off\n1. On")
			}
			break

		case "autoread":
			if (!isDev) return onlyOwner()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autoread == true) return reply("Sudah Active")
				db.data.settings[botNumber].autoread = true
				reply(`${mess.success}`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autoread == false) return reply("Sudah Non Active")
				db.data.settings[botNumber].autoread = false
				reply(`${mess.success}`)
			} else {
				reply("\`\`\`「 MODE AUTO READ 」\`\`\`\n\n0. Off\n1. On")
			}
			break

		case "autotyping":
			if (!isDev) return onlyOwner()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autoTyping == true) return reply("Sudah Active")
				db.data.settings[botNumber].autoTyping = true
				reply(`${mess.success}`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autoTyping == false) return reply("Sudah Non Active")
				db.data.settings[botNumber].autoTyping = false
				reply(`${mess.success}`)
			} else {
				reply("\`\`\`「 MODE AUTO TYPING 」\`\`\`\n\n0. Off\n1. On")
			}
			break

		case "autobio":
			if (!isDev) return onlyOwner()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autobio == true) return reply("Sudah Active")
				db.data.settings[botNumber].autobio = true
				reply(`${mess.success}`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autobio == false) return reply("Sudah Non Active")
				db.data.settings[botNumber].autobio = false
				reply(`${mess.success}`)
			} else {
				reply("\`\`\`「 MODE AUTO BIO 」\`\`\`\n\n0. Off\n1. On")
			}
			break

		case "setprefix":
			if (!isDev) return onlyOwner()
			if (text == "multi" || text == "1") {
				if (db.data.settings[botNumber].setPrefix == "multi") return reply("Sudah Active")
				db.data.settings[botNumber].setPrefix = "multi"
				reply(`${mess.success}`)
			} else if (text == "no" || text == "2") {
				if (db.data.settings[botNumber].setPrefix == "no") return reply("Sudah Active")
				db.data.settings[botNumber].setPrefix = "no"
				reply(`${mess.success}`)
			} else if (text == "all" || text == "3") {
				if (db.data.settings[botNumber].setPrefix == "all") return reply("Sudah Active")
				db.data.settings[botNumber].setPrefix = "all"
				reply(`${mess.success}`)
			} else {
				reply("\`\`\`「 SETTINGS PREFIX BOT 」\`\`\`\n\n1. Multi\n2. No\n3. All")
			}
			break			
case 'addplugins':{
if (!isDev) return  onlyOwner()
if (!q.includes("|")) return reply(`Add input, *☘️ Example :* \n\n*${prefix + command} name|category|content*`)
const [
pluginName,
category, ...pluginContent
] = q.split("|")
const pluginDirPath = path.join(path.resolve(__dirname, './SanzAll/SanzPlugin', category))
const pluginFilePath = path.join(pluginDirPath, pluginName + ".js")
if (!q.includes("|") || pluginContent.length === 0 || fs.existsSync(pluginFilePath)) return
if (!fs.existsSync(pluginDirPath)) fs.mkdirSync(pluginDirPath, {
recursive: true
})
fs.writeFileSync(pluginFilePath, pluginContent.join('|'))
await reply(`A new plugin has been created in ${pluginFilePath}.`)
}
break
case 'cgplug':{
if (!isDev) return  onlyOwner()
if (!q.includes("|")) return reply (`Add Input, *☘️ Example :* *${prefix + command} thisplug|newcontent*`)
let [mypler, ...rest] = q.split("|")
let mypenis = rest.join("|")
let pluginsDirect = path.resolve(__dirname, './SanzAll/SanzPlugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(mypler)) {
let filePath = plugin.filePath
fs.writeFileSync(filePath, mypenis)
await reply(`The plugin in ${filePath} has been replaced`)
return
}
}
await reply(`Plugin with command '${mypler}' not found`)
}
break
case 'rmplug':{
if (!isDev) return  onlyOwner()
if (!q) return reply(`Please provide the command name of the plugin you want to remove. *☘️ Example :* \n\n*${prefix + command} thisplug*`)
let pluginsDirect = path.resolve(__dirname, './SanzAll/SanzPlugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(q)) {
let filePath = plugin.filePath
fs.unlinkSync(filePath)
await reply(`The plugin in ${filePath} has been removed.`)
return
}
}
await reply(`Plugin with command '${q}' not found.`)
}
break
case 'getplug':{
if (!isDev) return  onlyOwner()
if (!q) return reply(`Add Input, *☘️ Example :* \n\n*${prefix + command} ryocakep*`)
let pluginsDirect = path.resolve(__dirname, './SanzAll/SanzPlugin')
let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q))
if (!plugin) return reply(`Plugin with command '${q}' not found.`)
await nova.sendMessage(m.chat, {
document: fs.readFileSync(plugin.filePath),
fileName: path.basename(plugin.filePath),
mimetype: '*/*'
}, {
quoted: m
})
await reply(`Successfully retrieved plugin '${q}', plugin has been submitted.`)
}
break

case 'self':{
if (!isDev) return onlyOwner()
nova.public = false
reply('succes')
}
break

case 'public':{
if (!isDev) return onlyOwner()
nova.public = true
reply('succes')
}
break

case 'shutdown':{
if (!isDev) return onlyOwner()
reply(`Otsukaresama deshita🖐`)
await sleep(5000)
process.exit()
}
break

case 'getsession':
if (!isDev) return onlyOwner()
reply(mess.wait)
let sesi = fs.readFileSync('./HAM-SESSION/creds.json')
nova.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {
quoted: m
})
break

case 'delsession':
case 'clearsession':{
if (!isDev) return onlyOwner()
fs.readdir("./HAM-SESSION", async function(err, files) {
if (err) {
console.log('Tidak Dapat Mendeteksi Directory: ' + err);
return reply('Tidak Dapat Mendeteksi Directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Detected ${filteredArray.length} junk files\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
await sleep(2000)
reply("Deleting junk files...")
await filteredArray.forEach(function(file) {
    fs.unlinkSync(`./HAM-SESSION/${file}`)
});
await sleep(2000)
reply(mess.done)
});
}
break            
            
case 'listcase': case "totalcase":{
if (!isDev) return onlyOwner();
reply(listCase())
}
break

case "addcase":{
if (!isDev) return onlyOwner();
if (!q) return reply(`Masukan Input`);
if (!q.includes("|")) return reply("Format perintah tidak valid. Gunakan: addcase <tempat>|case \"casenya\">{ ... } break")

let tempat = q.split("|")[0];
let casenya = q.split("|")[1];
let newCase = casenya

let fileContent = fs.readFileSync("./nova.js", "utf-8");

let breakIndex = fileContent.indexOf(`break\n`, fileContent.indexOf(`case "${tempat}":`));

if (breakIndex !== -1) {
fileContent = fileContent.slice(0, breakIndex + 6) + newCase + fileContent.slice(breakIndex + 6);

fs.writeFileSync("./nova.js", fileContent, "utf-8");

reply(`Case baru "${casenya}" berhasil ditambahkan di bawah case "${tempat}"!`);
} else {
reply(`Tidak dapat menemukan break di case "${tempat}".`);
}
}
break

case 'sharecase':{
 if (!text) return reply('Masukkan teks kode yang ingin dibagikan.');

 if (!text.includes('case')) {
 return reply('Tidak ada case yang ditemukan dalam teks. Pastikan teks mengandung kata case.');
 }
 nova.sendMessage(`${global.idch}`, {
 text: `/*\nCode By ${pushname}\nSumber: https://whatsapp.com/channel/0029VaLWCTB5fM5awYGRYe0b\n*/\n${text}\n\n> // Code By ${pushname}`, 
 contextInfo: {
 mentionedJid: [m.sender], 
 externalAdReply: {
 showAdAttribution: true,
 title: 'Case - New',
 body: `Case Dari ${pushname}`,
 thumbnailUrl: 'https://img100.pixhost.to/images/106/533172682_ham-bot.jpg',
 sourceUrl: 'https://whatsapp.com/channel/0029VaLWCTB5fM5awYGRYe0b',
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }).then(() => {
 reply('Kode case berhasil dibagikan ke saluran.');
 }).catch(err => {
 console.error(err);
 reply('Gagal membagikan kode case ke saluran.');
 });
}
break;

case 'editcase':{
 if (!text) return reply(`Contoh penggunaan: ${prefix + command} <nama_case> | <isi_case_baru>`);
 let [caseName, ...newContentArr] = text.split('|');
 caseName = caseName.trim();
 let newContent = newContentArr.join('|').trim();
 if (!caseName || !newContent) {
 return reply('Format salah! Gunakan format: .editcase <nama_case> | <isi_case_baru>');
 }
 const fs = require('fs');
 const filePath = './nova.js';
 try {
 if (!fs.existsSync(filePath)) {
 return reply(`File bot tidak ditemukan.`);
 }
 let fileContent = fs.readFileSync(filePath, 'utf-8');
 const regex = new RegExp(`case ['"]${caseName}['"]: {([\\s\\S]*?)}\\s*break;`, 'g');
 if (!regex.test(fileContent)) {
 return reply(`Case *${caseName}* tidak ditemukan.`);
 }
 const updatedFileContent = fileContent.replace(regex, `case '${caseName}': {\n${newContent}\n}\nbreak`);
 fs.writeFileSync(filePath, updatedFileContent, 'utf-8');
 reply(`Case *${caseName}* berhasil diedit.`);
 } catch (error) {
 console.error('Error:', error);
 return reply('Terjadi kesalahan saat mengedit case. Coba lagi nanti.');
 }
}
break;

case "delcase":{
if (!isDev) return onlyOwner();
if (!q) return reply("Masukkan nama case yang ingin dihapus, contoh: delcase gpt4");

let caseName = q

let fileContent = fs.readFileSync("./nova.js", "utf-8");

let startIndex = fileContent.indexOf(`case "${caseName}"`);
let endIndex = fileContent.indexOf("break", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
let caseToDelete = fileContent.slice(startIndex, endIndex + 6);
fileContent = fileContent.replace(caseToDelete, "");

fs.writeFileSync("./nova.js", fileContent, "utf-8");

reply(`Case "${caseName}" berhasil dihapus!`);
} else {
reply(`Tidak dapat menemukan case "${caseName}" untuk dihapus.`);
}
}
break
//————————————————————————//
// Tools Fitur
case 'toptv': {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return reply("Durasi vidio maksimal 30 detik!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
nova.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return reply("dengam mengirim/balas vidio")
}
}
break

case 'tovn': case 'toptt': {
if (!/video|audio/.test(mime) && !/audio/.test(mime)) return reply('dengan mengirim audio/vidio')
await nova.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
nova.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break

case 'toaudio': case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply('dengan mengirim vidio')
if ((qmsg).seconds > 30) return reply("Durasi vidio maksimal 30 detik")
await nova.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
nova.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break

case 'ocr':{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let media = await q.download();
let felpet = await downloadAndSaveMedia(media)
const imageData = fs.readFileSync(felpet);
let url = await service.uploadFromBinary(imageData, 'test.png')
let hasil = await ocrapi.ocrSpace(url)
 await reply(hasil.ParsedResults[0].ParsedText)
}
break
            case 'ebinary': {
                let {
                    eBinary
                } = require('./SanzAll/SanzLibrary/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                reply(eb)
            }
            break
            case 'dbinary': {
                let {
                    dBinary
                } = require('./SanzAll/SanzLibrary/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                reply(db)
            }
            break

case 'tinyurl': {
  if (!text) return reply(`*Example :* ${prefix}tinyurl linknya`)
  let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  let done = `> Link : ${text}\n> ShortLink : ${shortUrl}`.trim();
  m.reply(done)
}
break

case 'hd': case 'remini': {
const sharp = require('sharp');
async function upscaleImage(inputPath) {
  try {
const tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
fs.writeFileSync(tempFilePath, inputPath);
    await sharp(inputPath)
      .resize({ width: 1920, height: 1080, fit: 'inside', withoutEnlargement: false })
      .sharpen()
      .linear(1.2, -(128 * 1.2) + 128)  // Increase contrast
      .modulate({ brightness: 0.98 })    // Increase brightness
      .toFile(tempFilePath);
    await nova.sendMessage(m.chat, {image: fs.readFileSync(tempFilePath)})
fs.unlinkSync(tempFilePath);
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

const bufferImage = await m.quoted.download()
return upscaleImage(bufferImage)
}
break

case 'myip': {
if (!isDev) return onlyOwner()
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
reply("🔎 My public IP address is: " + ip);
})
})
}
break

/*
case  'lacakip': 
case  'trackip':
{
if (!text) return reply(`*Example:* ${prefix + command} 165.282.18.191`)
 try {
reply(mess.wait)
 let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());
 await nova.sendMessage(from, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude }},{ ephemeralExpiration: 604800 });
 } catch (e) { 
 return { error: `IP ${text} not found!` };
 }
}
break
*/

/*
*Mending turu
*Dengerin ni lagu aja
*/

case 'trackip':
case 'lacakip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await nova.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break

case 'qc': 
case 'qcstiker': {
if (!q) return reply(`*Contoh :* ${prefix + command} white Hallo Jay\n\n*LIST WARNA YANG ADA*\n\n• Pink\n• Blue\n• Red\n• Green\n• Yellow\n• Purple\n• Darkblue\n• Lightblue\n• Ash\n• Orange\n• black\n• White\n• Teal\n• Lightpink\n• Chocolate\n• Salmon\n• Magenta\n• Tan\n• Wheat\n• Deeppink\n• Fire\n• Skyblue\n• Safron\n• Brightskyblue\n• Hotpink\n• Lightskyblue\n• Seagreen\n• Darkred\n• Orangered\n• Cyan\n• Violet\n• Mossgreen\n• Darkgreen\n• Navyblue\n• Darkorange\n• Darkpurple\n• Fuchsia\n• Darkmagenta\n• Darkgray\n• Peachpuff\n• Plackishgreen\n• Darkishred\n• Goldenrod\n• Darkishgray\n• Darkishpurple\n• Gold\n• Silver`)
if (text.length > 100) return reply(`Max 100 character.`)
await nova.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await nova.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let responsee = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(responsee.data.result.image, 'base64');
nova.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `HamsOffc`})
}
break

case 'nekohime':{
let FormData = require('form-data')
  try {
    await (mess.wait);
    let media = await nova.downloadAndSaveMediaMessage(qmsg);

    if (/image/.test(mime)) {
      let anu = await Nekohime(media);
      reply(util.format(anu));
    } else if (!/image/.test(mime)) {
      let anu = await UploadFileUgu(media);
      reply(util.format(anu));
    }

    await fs.unlinkSync(media);
  } catch (error) {
    reply(`Error: ${error.message}`);
  }
}
break

case 'tourl':{
if (!isMedia) return m.reply(`Kirim gambar dengan caption ${prefix+command}`)
if (/video/.test(mime)) {
return m.reply('Hanya foto yang diijinkan')
}
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
async function downloadAndSaveMedia(media) {
        try {
          const tempDir = './temp';

          if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
          }

          const fileName = `mediaFile_${Date.now()}.jpg`; 
          const filePath = path.join(tempDir, fileName);

          fs.writeFileSync(filePath, media);
          return filePath;
        } catch (error) {
          console.error('Error while saving media:', error);
        }
      }
let q = m.quoted ? m.quoted : m;
let media = await q.download();
try {
  await nova.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
  let felpet = await downloadAndSaveMedia(media)
  const imageData = fs.readFileSync(felpet);
  let { directLink } = await service.uploadFromBinary(imageData, 'Patz-Bot.png');
  console.log(directLink);
  m.reply('Link: ' + directLink)
  await nova.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
} catch (error) {
  return m.reply('error')
}
}
break

case 'translate': case 'tr':{
if (!text) return reply(`*Contoh* :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
translate(teks, { to: args[0] }).then((res) => {
nova.sendText(m.chat, `${res.text}`, m)
})
}
break

case 'listbahasa':
var clear = ["auto", "isSupported", "getCode"]
var tksbhs = `*List Bahasa Yang Tersedia Di Script Ham-Bot*\n\n`
for (let i in translate.languages) {
if (!clear.includes(i)) {
tksbhs += `*${i}* untuk ${translate.languages[i]}\n`
}
}
reply(tksbhs)
break
        
        case 'text2speech': {
            function ListVoiceArray(array) {
    const modifiedArray = array.map(item => {
        const modifiedName = item.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)");
        const language = item.split('-')[0];
        return `${modifiedName} ( ${language} )`;
    });

    return modifiedArray;
}

    let ListVoice = [
        "af-ZA-AdriNeural",
        "af-ZA-WillemNeural",
        "am-ET-AmehaNeural",
        "am-ET-MekdesNeural",
        "ar-AE-FatimaNeural",
        "ar-AE-HamdanNeural",
        "ar-BH-AliNeural",
        "ar-BH-LailaNeural",
        "ar-DZ-AminaNeural",
        "ar-DZ-IsmaelNeural",
        "ar-EG-SalmaNeural",
        "ar-EG-ShakirNeural",
        "ar-IQ-BasselNeural",
        "ar-IQ-RanaNeural",
        "ar-JO-SanaNeural",
        "ar-JO-TaimNeural",
        "ar-KW-FahedNeural",
        "ar-KW-NouraNeural",
        "ar-LB-LaylaNeural",
        "ar-LB-RamiNeural",
        "ar-LY-ImanNeural",
        "ar-LY-OmarNeural",
        "ar-MA-JamalNeural",
        "ar-MA-MounaNeural",
        "ar-OM-AbdullahNeural",
        "ar-OM-AyshaNeural",
        "ar-QA-AmalNeural",
        "ar-QA-MoazNeural",
        "ar-SA-HamedNeural",
        "ar-SA-ZariyahNeural",
        "ar-SY-AmanyNeural",
        "ar-SY-LaithNeural",
        "ar-TN-HediNeural",
        "ar-TN-ReemNeural",
        "ar-YE-MaryamNeural",
        "ar-YE-SalehNeural",
        "az-AZ-BabekNeural",
        "az-AZ-BanuNeural",
        "bg-BG-BorislavNeural",
        "bg-BG-KalinaNeural",
        "bn-BD-NabanitaNeural",
        "bn-BD-PradeepNeural",
        "bn-IN-BashkarNeural",
        "bn-IN-TanishaaNeural",
        "bs-BA-GoranNeural",
        "bs-BA-VesnaNeural",
        "ca-ES-AlbaNeural",
        "ca-ES-EnricNeural",
        "ca-ES-JoanaNeural",
        "cs-CZ-AntoninNeural",
        "cs-CZ-VlastaNeural",
        "cy-GB-AledNeural",
        "cy-GB-NiaNeural",
        "da-DK-ChristelNeural",
        "da-DK-JeppeNeural",
        "de-AT-IngridNeural",
        "de-AT-JonasNeural",
        "de-CH-JanNeural",
        "de-CH-LeniNeural",
        "de-DE-AmalaNeural",
        "de-DE-BerndNeural",
        "de-DE-ChristophNeural",
        "de-DE-ConradNeural",
        "de-DE-ElkeNeural",
        "de-DE-GiselaNeural",
        "de-DE-KasperNeural",
        "de-DE-KatjaNeural",
        "de-DE-KillianNeural",
        "de-DE-KlarissaNeural",
        "de-DE-KlausNeural",
        "de-DE-LouisaNeural",
        "de-DE-MajaNeural",
        "de-DE-RalfNeural",
        "de-DE-TanjaNeural",
        "el-GR-AthinaNeural",
        "el-GR-NestorasNeural",
        "en-AU-AnnetteNeural",
        "en-AU-CarlyNeural",
        "en-AU-DarrenNeural",
        "en-AU-DuncanNeural",
        "en-AU-ElsieNeural",
        "en-AU-FreyaNeural",
        "en-AU-JoanneNeural",
        "en-AU-KenNeural",
        "en-AU-KimNeural",
        "en-AU-NatashaNeural",
        "en-AU-NeilNeural",
        "en-AU-TimNeural",
        "en-AU-TinaNeural",
        "en-AU-WilliamNeural",
        "en-CA-ClaraNeural",
        "en-CA-LiamNeural",
        "en-GB-AbbiNeural",
        "en-GB-AlfieNeural",
        "en-GB-BellaNeural",
        "en-GB-ElliotNeural",
        "en-GB-EthanNeural",
        "en-GB-HollieNeural",
        "en-GB-LibbyNeural",
        "en-GB-MaisieNeural",
        "en-GB-MiaNeural",
        "en-GB-NoahNeural",
        "en-GB-OliverNeural",
        "en-GB-OliviaNeural",
        "en-GB-RyanNeural",
        "en-GB-SoniaNeural",
        "en-GB-ThomasNeural",
        "en-HK-SamNeural",
        "en-HK-YanNeural",
        "en-IE-ConnorNeural",
        "en-IE-EmilyNeural",
        "en-IN-NeerjaNeural",
        "en-IN-PrabhatNeural",
        "en-KE-AsiliaNeural",
        "en-KE-ChilembaNeural",
        "en-NG-AbeoNeural",
        "en-NG-EzinneNeural",
        "en-NZ-MitchellNeural",
        "en-NZ-MollyNeural",
        "en-PH-JamesNeural",
        "en-PH-RosaNeural",
        "en-SG-LunaNeural",
        "en-SG-WayneNeural",
        "en-TZ-ElimuNeural",
        "en-TZ-ImaniNeural",
        "en-US-AIGenerate1Neural",
        "en-US-AIGenerate2Neural",
        "en-US-AmberNeural",
        "en-US-AnaNeural",
        "en-US-AriaNeural",
        "en-US-AshleyNeural",
        "en-US-BlueNeural",
        "en-US-BrandonNeural",
        "en-US-ChristopherNeural",
        "en-US-CoraNeural",
        "en-US-DavisNeural",
        "en-US-ElizabethNeural",
        "en-US-EricNeural",
        "en-US-GuyNeural",
        "en-US-JacobNeural",
        "en-US-JaneNeural",
        "en-US-JasonNeural",
        "en-US-JennyMultilingualNeural",
        "en-US-JennyMultilingualV2Neural",
        "en-US-JennyNeural",
        "en-US-MichelleNeural",
        "en-US-MonicaNeural",
        "en-US-NancyNeural",
        "en-US-RogerNeural",
        "en-US-RyanMultilingualNeural",
        "en-US-SaraNeural",
        "en-US-SteffanNeural",
        "en-US-TonyNeural",
        "en-ZA-LeahNeural",
        "en-ZA-LukeNeural",
        "es-AR-ElenaNeural",
        "es-AR-TomasNeural",
        "es-BO-MarceloNeural",
        "es-BO-SofiaNeural",
        "es-CL-CatalinaNeural",
        "es-CL-LorenzoNeural",
        "es-CO-GonzaloNeural",
        "es-CO-SalomeNeural",
        "es-CR-JuanNeural",
        "es-CR-MariaNeural",
        "es-CU-BelkysNeural",
        "es-CU-ManuelNeural",
        "es-DO-EmilioNeural",
        "es-DO-RamonaNeural",
        "es-EC-AndreaNeural",
        "es-EC-LuisNeural",
        "es-ES-AbrilNeural",
        "es-ES-AlvaroNeural",
        "es-ES-ArnauNeural",
        "es-ES-DarioNeural",
        "es-ES-EliasNeural",
        "es-ES-ElviraNeural",
        "es-ES-EstrellaNeural",
        "es-ES-IreneNeural",
        "es-ES-LaiaNeural",
        "es-ES-LiaNeural",
        "es-ES-NilNeural",
        "es-ES-SaulNeural",
        "es-ES-TeoNeural",
        "es-ES-TrianaNeural",
        "es-ES-VeraNeural",
        "es-GQ-JavierNeural",
        "es-GQ-TeresaNeural",
        "es-GT-AndresNeural",
        "es-GT-MartaNeural",
        "es-HN-CarlosNeural",
        "es-HN-KarlaNeural",
        "es-MX-BeatrizNeural",
        "es-MX-CandelaNeural",
        "es-MX-CarlotaNeural",
        "es-MX-CecilioNeural",
        "es-MX-DaliaNeural",
        "es-MX-GerardoNeural",
        "es-MX-JorgeNeural",
        "es-MX-LarissaNeural",
        "es-MX-LibertoNeural",
        "es-MX-LucianoNeural",
        "es-MX-MarinaNeural",
        "es-MX-NuriaNeural",
        "es-MX-PelayoNeural",
        "es-MX-RenataNeural",
        "es-MX-YagoNeural",
        "es-NI-FedericoNeural",
        "es-NI-YolandaNeural",
        "es-PA-MargaritaNeural",
        "es-PA-RobertoNeural",
        "es-PE-AlexNeural",
        "es-PE-CamilaNeural",
        "es-PR-KarinaNeural",
        "es-PR-VictorNeural",
        "es-PY-MarioNeural",
        "es-PY-TaniaNeural",
        "es-SV-LorenaNeural",
        "es-SV-RodrigoNeural",
        "es-US-AlonsoNeural",
        "es-US-PalomaNeural",
        "es-UY-MateoNeural",
        "es-UY-ValentinaNeural",
        "es-VE-PaolaNeural",
        "es-VE-SebastianNeural",
        "et-EE-AnuNeural",
        "et-EE-KertNeural",
        "eu-ES-AinhoaNeural",
        "eu-ES-AnderNeural",
        "fa-IR-DilaraNeural",
        "fa-IR-FaridNeural",
        "fi-FI-HarriNeural",
        "fi-FI-NooraNeural",
        "fi-FI-SelmaNeural",
        "fil-PH-AngeloNeural",
        "fil-PH-BlessicaNeural",
        "fr-BE-CharlineNeural",
        "fr-BE-GerardNeural",
        "fr-CA-AntoineNeural",
        "fr-CA-JeanNeural",
        "fr-CA-SylvieNeural",
        "fr-CH-ArianeNeural",
        "fr-CH-FabriceNeural",
        "fr-FR-AlainNeural",
        "fr-FR-BrigitteNeural",
        "fr-FR-CelesteNeural",
        "fr-FR-ClaudeNeural",
        "fr-FR-CoralieNeural",
        "fr-FR-DeniseNeural",
        "fr-FR-EloiseNeural",
        "fr-FR-HenriNeural",
        "fr-FR-JacquelineNeural",
        "fr-FR-JeromeNeural",
        "fr-FR-JosephineNeural",
        "fr-FR-MauriceNeural",
        "fr-FR-YvesNeural",
        "fr-FR-YvetteNeural",
        "ga-IE-ColmNeural",
        "ga-IE-OrlaNeural",
        "gl-ES-RoiNeural",
        "gl-ES-SabelaNeural",
        "gu-IN-DhwaniNeural",
        "gu-IN-NiranjanNeural",
        "he-IL-AvriNeural",
        "he-IL-HilaNeural",
        "hi-IN-MadhurNeural",
        "hi-IN-SwaraNeural",
        "hr-HR-GabrijelaNeural",
        "hr-HR-SreckoNeural",
        "hu-HU-NoemiNeural",
        "hu-HU-TamasNeural",
        "hy-AM-AnahitNeural",
        "hy-AM-HaykNeural",
        "id-ID-ArdiNeural",
        "id-ID-GadisNeural",
        "is-IS-GudrunNeural",
        "is-IS-GunnarNeural",
        "it-IT-BenignoNeural",
        "it-IT-CalimeroNeural",
        "it-IT-CataldoNeural",
        "it-IT-DiegoNeural",
        "it-IT-ElsaNeural",
        "it-IT-FabiolaNeural",
        "it-IT-FiammaNeural",
        "it-IT-GianniNeural",
        "it-IT-ImeldaNeural",
        "it-IT-IrmaNeural",
        "it-IT-IsabellaNeural",
        "it-IT-LisandroNeural",
        "it-IT-PalmiraNeural",
        "it-IT-PierinaNeural",
        "it-IT-RinaldoNeural",
        "ja-JP-AoiNeural",
        "ja-JP-DaichiNeural",
        "ja-JP-KeitaNeural",
        "ja-JP-MayuNeural",
        "ja-JP-NanamiNeural",
        "ja-JP-NaokiNeural",
        "ja-JP-ShioriNeural",
        "jv-ID-DimasNeural",
        "jv-ID-SitiNeural",
        "ka-GE-EkaNeural",
        "ka-GE-GiorgiNeural",
        "kk-KZ-AigulNeural",
        "kk-KZ-DauletNeural",
        "km-KH-PisethNeural",
        "km-KH-SreymomNeural",
        "kn-IN-GaganNeural",
        "kn-IN-SapnaNeural",
        "ko-KR-BongJinNeural",
        "ko-KR-GookMinNeural",
        "ko-KR-InJoonNeural",
        "ko-KR-JiMinNeural",
        "ko-KR-SeoHyeonNeural",
        "ko-KR-SoonBokNeural",
        "ko-KR-SunHiNeural",
        "ko-KR-YuJinNeural",
        "lo-LA-ChanthavongNeural",
        "lo-LA-KeomanyNeural",
        "lt-LT-LeonasNeural",
        "lt-LT-OnaNeural",
        "lv-LV-EveritaNeural",
        "lv-LV-NilsNeural",
        "mk-MK-AleksandarNeural",
        "mk-MK-MarijaNeural",
        "ml-IN-MidhunNeural",
        "ml-IN-SobhanaNeural",
        "mn-MN-BataaNeural",
        "mn-MN-YesuiNeural",
        "mr-IN-AarohiNeural",
        "mr-IN-ManoharNeural",
        "ms-MY-OsmanNeural",
        "ms-MY-YasminNeural",
        "mt-MT-GraceNeural",
        "mt-MT-JosephNeural",
        "my-MM-NilarNeural",
        "my-MM-ThihaNeural",
        "nb-NO-FinnNeural",
        "nb-NO-IselinNeural",
        "nb-NO-PernilleNeural",
        "ne-NP-HemkalaNeural",
        "ne-NP-SagarNeural",
        "nl-BE-ArnaudNeural",
        "nl-BE-DenaNeural",
        "nl-NL-ColetteNeural",
        "nl-NL-FennaNeural",
        "nl-NL-MaartenNeural",
        "pl-PL-AgnieszkaNeural",
        "pl-PL-MarekNeural",
        "pl-PL-ZofiaNeural",
        "ps-AF-GulNawazNeural",
        "ps-AF-LatifaNeural",
        "pt-BR-AntonioNeural",
        "pt-BR-BrendaNeural",
        "pt-BR-DonatoNeural",
        "pt-BR-ElzaNeural",
        "pt-BR-FabioNeural",
        "pt-BR-FranciscaNeural",
        "pt-BR-GiovannaNeural",
        "pt-BR-HumbertoNeural",
        "pt-BR-JulioNeural",
        "pt-BR-LeilaNeural",
        "pt-BR-LeticiaNeural",
        "pt-BR-ManuelaNeural",
        "pt-BR-NicolauNeural",
        "pt-BR-ValerioNeural",
        "pt-BR-YaraNeural",
        "pt-PT-DuarteNeural",
        "pt-PT-FernandaNeural",
        "pt-PT-RaquelNeural",
        "ro-RO-AlinaNeural",
        "ro-RO-EmilNeural",
        "ru-RU-DariyaNeural",
        "ru-RU-DmitryNeural",
        "ru-RU-SvetlanaNeural",
        "si-LK-SameeraNeural",
        "si-LK-ThiliniNeural",
        "sk-SK-LukasNeural",
        "sk-SK-ViktoriaNeural",
        "sl-SI-PetraNeural",
        "sl-SI-RokNeural",
        "so-SO-MuuseNeural",
        "so-SO-UbaxNeural",
        "sq-AL-AnilaNeural",
        "sq-AL-IlirNeural",
        "sr-Latn-RS-NicholasNeural",
        "sr-Latn-RS-SophieNeural",
        "sr-RS-NicholasNeural",
        "sr-RS-SophieNeural",
        "su-ID-JajangNeural",
        "su-ID-TutiNeural",
        "sv-SE-HilleviNeural",
        "sv-SE-MattiasNeural",
        "sv-SE-SofieNeural",
        "sw-KE-RafikiNeural",
        "sw-KE-ZuriNeural",
        "sw-TZ-DaudiNeural",
        "sw-TZ-RehemaNeural",
        "ta-IN-PallaviNeural",
        "ta-IN-ValluvarNeural",
        "ta-LK-KumarNeural",
        "ta-LK-SaranyaNeural",
        "ta-MY-KaniNeural",
        "ta-MY-SuryaNeural",
        "ta-SG-AnbuNeural",
        "ta-SG-VenbaNeural",
        "te-IN-MohanNeural",
        "te-IN-ShrutiNeural",
        "th-TH-AcharaNeural",
        "th-TH-NiwatNeural",
        "th-TH-PremwadeeNeural",
        "tr-TR-AhmetNeural",
        "tr-TR-EmelNeural",
        "uk-UA-OstapNeural",
        "uk-UA-PolinaNeural",
        "ur-IN-GulNeural",
        "ur-IN-SalmanNeural",
        "ur-PK-AsadNeural",
        "ur-PK-UzmaNeural",
        "uz-UZ-MadinaNeural",
        "uz-UZ-SardorNeural",
        "vi-VN-HoaiMyNeural",
        "vi-VN-NamMinhNeural",
        "wuu-CN-XiaotongNeural",
        "wuu-CN-YunzheNeural",
        "yue-CN-XiaoMinNeural",
        "yue-CN-YunSongNeural",
        "zh-CN-XiaochenNeural",
        "zh-CN-XiaohanNeural",
        "zh-CN-XiaomengNeural",
        "zh-CN-XiaomoNeural",
        "zh-CN-XiaoqiuNeural",
        "zh-CN-XiaoruiNeural",
        "zh-CN-XiaoshuangNeural",
        "zh-CN-XiaoxiaoNeural",
        "zh-CN-XiaoxuanNeural",
        "zh-CN-XiaoyanNeural",
        "zh-CN-XiaoyiNeural",
        "zh-CN-XiaoyouNeural",
        "zh-CN-XiaozhenNeural",
        "zh-CN-YunfengNeural",
        "zh-CN-YunhaoNeural",
        "zh-CN-YunjianNeural",
        "zh-CN-YunxiNeural",
        "zh-CN-YunxiaNeural",
        "zh-CN-YunyangNeural",
        "zh-CN-YunyeNeural",
        "zh-CN-YunzeNeural",
        "zh-CN-henan-YundengNeural",
        "zh-CN-liaoning-XiaobeiNeural",
        "zh-CN-shaanxi-XiaoniNeural",
        "zh-CN-shandong-YunxiangNeural",
        "zh-CN-sichuan-YunxiNeural",
        "zh-HK-HiuGaaiNeural",
        "zh-HK-HiuMaanNeural",
        "zh-HK-WanLungNeural",
        "zh-TW-HsiaoChenNeural",
        "zh-TW-HsiaoYuNeural",
        "zh-TW-YunJheNeural",
        "zu-ZA-ThandoNeural",
        "zu-ZA-ThembaNeural"
    ]
    let lister = ListVoiceArray(ListVoice)
    let readMore = String.fromCharCode(8206).repeat(4001);

    let query = `Input query!\n\n*Example:*\n${prefix + command} [angka]|[teks]\n\n*Pilih angka yg ada*\n` + readMore + lister.map((v, index) => "  " + (index + 1) + ". " + v).join("\n");
    
    function getParts(array, index) {
    if (isNaN(index)) {
        index = Number(index);
        if (isNaN(index)) {
            return "Indeks harus berupa nomor";
        }
    }

    const text = array[index - 1];
    const language = getLanguage(text);
    return {
        short: language,
        long: text
    };
}

function getLanguage(text) {
    const parts = text.split("-");
    return parts.slice(0, 2).join("-");
}
            
async function generateVoice(Locale = "id-ID", Voice = "id-ID-ArdiNeural", Query) {
    const formData = new FormData();
    formData.append("locale", Locale);
    formData.append("content", `<voice name="${Voice}">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
    
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return reply(query)
    let [atas, bawah] = text.split("|")
    if (!atas) return reply(query)
    if (!bawah) return reply(query)
    const {
        short,
        long
    } = getParts(ListVoice, atas);
    await reply(mess.wait + "\n" + long.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)"))

    try {
        let res = await generateVoice(short, long, bawah)
        if (res) await nova.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await reply(e)
    }
}
break
        
case 'gtts2': case 'tts2': {
    const lister = [
    "Adult Female #1, American English (TruVoice)",
    "Adult Female #2, American English (TruVoice)",
    "Adult Male #1, American English (TruVoice)",
    "Adult Male #2, American English (TruVoice)",
    "Adult Male #3, American English (TruVoice)",
    "Adult Male #4, American English (TruVoice)",
    "Adult Male #5, American English (TruVoice)",
    "Adult Male #6, American English (TruVoice)",
    "Adult Male #7, American English (TruVoice)",
    "Adult Male #8, American English (TruVoice)",
    "Female Whisper",
    "Male Whisper",
    "Mary",
    "Mary (for Telephone)",
    "Mary in Hall",
    "Mary in Space",
    "Mary in Stadium",
    "Mike",
    "Mike (for Telephone)",
    "Mike in Hall",
    "Mike in Space",
    "Mike in Stadium",
    "RoboSoft Five",
    "RoboSoft Four",
    "RoboSoft One",
    "RoboSoft Six",
    "RoboSoft Three",
    "RoboSoft Two",
    "Sam",
    "BonziBUDDY"
];

async function SayTTS(voice, text, pitch, speed) {
// limits = { minPitch: 50, maxPitch: 400, minSpeed: 50, maxSpeed: 250, defPitch: 140, defSpeed: 157 };
    try {
        pitch = parseInt(pitch);
        speed = parseInt(speed);

        const url = `https://tetyys.com/SAPI4/SAPI4?text=${encodeURIComponent(text)}&voice=${encodeURIComponent(voice)}&pitch=${pitch}&speed=${speed}`;

        if (text.length > 4088) {
            throw new Error("Text exceeds the maximum allowed length (1000 characters)");
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch audio: ${response.statusText}`);

        const buffer = await response.arrayBuffer();

        return Buffer.from(buffer);
    } catch (error) {
        throw error;
    }
}

async function VoiceLimitations(voice) {
    try {
        const url = `https://tetyys.com/SAPI4/VoiceLimitations?voice=${encodeURIComponent(voice)}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch voice limitations: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        throw error;
    }
}

const readMore = String.fromCharCode(8206).repeat(4001);

const query = `Input query!\n\n*Example:*\n${prefix + command} [number]|[text]\n\n*Choose a number from the list*\n` + readMore + lister.map((v, index) => `  ${index + 1}. ${v}`).join("\n");

if (args.length < 1 && (!m.quoted || !m.quoted.text)) {
    return reply(query)
}

const text = args.length >= 1 ? args.join(" ") : m.quoted.text;
const [atas, bawah, kiri, kanan] = text.split("|");

if (!atas || !bawah) {
    return reply(query);
}
await reply(mess.wait + "\n" + lister[atas - 1])
try {
    const res = await SayTTS(lister[atas - 1], bawah, kiri || 140, kanan || 157);
    if (res) {
        await nova.sendMessage(m.chat, {
            audio: res,
            mimetype: 'audio/mp4',
            ptt: true,
            waveform: [100, 0, 100, 0, 100, 0, 100]
        }, {
            quoted: m
        });
    }
} catch (e) {
    await reply("Error: " + e.message);
}
}
break
        
     case 'tts': case 'gtts':{
if (!text) return reply('Text Nya ?')
            let texttts = text
            const szrl = googleTTS.getAudioUrl(texttts, {
                lang: "id",
                slow: false,
                host: "https://translate.google.com",
            })
            return nova.sendMessage(m.chat, {
                audio: {
                    url: szrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m ,
            })
        }
        break

case 'enc':{
            if (!isDev) return onlyOwner()
            if (!q) return reply(`Contoh ${prefix+command} const hams = require('hams-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break   
case 'hdvid':
case 'hdvidio':
case 'hdvideo':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!/video/.test(mime)) {
return reply(`Kirim/kutip video dengan caption ${prefix+command}`);
}
await nova.sendMessage(m.chat, { react: { text: "🔎", key: m.key } });

let media = await quoted.download();
async function enhanceVideo(inputBuffer) {
return new Promise((resolve, reject) => {
const outputStream = new stream.PassThrough();
ffmpeg()
.input(stream.Readable.from(inputBuffer))
.videoFilter('eq=contrast=1.2:brightness=0.1') 
.outputFormat('mp4') 
.pipe(outputStream, { end: true });
const chunks = [];
outputStream.on('data', chunk => chunks.push(chunk));
outputStream.on('end', () => resolve(Buffer.concat(chunks)));
outputStream.on('error', reject);
});
}
try {
let processedVideo = await enhanceVideo(media);
await nova.sendMessage(m.chat, { video: processedVideo, caption: 'Sukses' }, { quoted: m });
} catch (error) {
console.error('Error:', error);
reply('Terjadi kesalahan saat memproses video. Silakan coba lagi.');
}}
break

case 'nglspam':{
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam hams48852|haloo|5");
    }
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);
    if (isNaN(spamCount) || spamCount <= 0) {
        return reply("Jumlah spam harus berupa angka positif!");
    }
    try {
        await nglspam(username, message, spamCount);
        reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return reply("Fitur error, coba lagi nanti.");
    }
}
break

case "kalkulator":{
if (text.split("+")[0] && text.split("+")[1]) {
const nilai_one = Number(text.split("+")[0])
const nilai_two = Number(text.split("+")[1])
reply(`${nilai_one + nilai_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const nilai_one = Number(text.split("-")[0])
const nilai_two = Number(text.split("-")[1])
reply(`${nilai_one - nilai_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const nilai_one = Number(text.split("×")[0])
const nilai_two = Number(text.split("×")[1])
reply(`${nilai_one * nilai_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const nilai_one = Number(text.split("÷")[0])
const nilai_two = Number(text.split("÷")[1])
reply(`${nilai_one / nilai_two}`)
} else reply(`*Example* : ${prefix + command} 1 + 1`)
}
break

case 'tourl':{
if (!isMedia) return reply(`Kirim vidio/gambar dengan caption ${prefix+command}`)
if (/video/.test(mime)) {
return reply('Hanya foto yang diijinkan')
}
let q = m.quoted ? m.quoted : m;
let media = await q.download();
try {
  await nova.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
  let felpet = await downloadAndSaveMedia(media)
  const imageData = fs.readFileSync(felpet);
  let { directLink } = await service.uploadFromBinary(imageData, 'test.png');
  console.log(directLink);
  reply('Link: ' + directLink)
  await nova.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
} catch (error) {
  return reply('error')
}
}
break

case 'brat': {
    if (!q) return reply(`Gunakan perintah ini dengan format: ${prefix + command} <teks>`);

    try {
        reply('_Sedang memproses..._');

        const url = `https://btch.us.kg/brat?text=${encodeURIComponent(q)}`;
        const response = await axios.get(url, { responseType: 'arraybuffer' });

        const sticker = new Sticker(response.data, {
            pack: `┏──────────────────
┃𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺: @𝘂𝗴𝗵𝗯𝗺𝗺
┃𝗦𝘁𝗶𝗸𝗲𝗿 𝗗𝗶 𝗕𝘂𝗮𝘁: ${time}, ${hariini}
┃𝗛𝗮𝗺 𝗕𝗼𝘁𝘇𝘇 𝟮𝟬𝟮𝟰 
┗────────────────┈┈`,
            type: 'image/png',
        });

        const stikerBuffer = await sticker.toBuffer();
        await nova.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });

    } catch (error) {
        console.error('Error:', error);
        reply(`Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.`);
    }
    break;
}

    case "s":
    case "sticker":
    case "stiker":
      {
        let stiker = false;
        const wm = args
          .join(" ")
          .split("|")
          .map((v) => v.trim());
        const q = m.quoted ? m.quoted : m;
        const mime =
          (
            q.msg ||
            (q.vM || q)?.message?.documentWithCaptionMessage?.message?.[
              Object.keys(
                (q.vM || q)?.message?.documentWithCaptionMessage?.message || {},
              )[0]
            ] ||
            q
          ).mimetype ||
          q.mediaType ||
          "";
        if (q.sender !== m.sender && /^viewOnce/.test(q.mtype))
          return await m.reply(
            "Karena masalah privasi, hanya pengirim pesan itu yg dapat menjadikannya stiker!",
          );
        if (/video/g.test(mime) && (q.msg || q).seconds > 31)
          return m.reply("Maksimal 30 detik!");
        await nova.sendMessage(m.chat, {
          react: {
            text: "👁‍🗨",
            key: m.key,
          },
        });
        try {
          if (/webp|image|video/g.test(mime)) {
            const img = await q.download?.();
            try {
              if (/webp/g.test(mime))
                stiker = await addExif(
                  img,
                  wm[0] ||
                    `┏──────────────────
┃𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺: @𝘂𝗴𝗵𝗯𝗺𝗺
┃𝗦𝘁𝗶𝗸𝗲𝗿 𝗗𝗶 𝗕𝘂𝗮𝘁: ${time}, ${hariini}
┃𝗛𝗮𝗺 𝗕𝗼𝘁𝘇𝘇 𝟮𝟬𝟮𝟰 
┗────────────────┈┈`,
                  wm[1] ||
                    `┓
┃
┃
┃
┛`,
                );
              if (!stiker)
                stiker = await sticker(
                  img,
                  false,
                  wm[0] ||
                    `┏──────────────────
┃𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺: @𝘂𝗴𝗵𝗯𝗺𝗺
┃𝗦𝘁𝗶𝗸𝗲𝗿 𝗗𝗶 𝗕𝘂𝗮𝘁: ${time}, ${hariini}
┃𝗛𝗮𝗺 𝗕𝗼𝘁𝘇𝘇 𝟮𝟬𝟮𝟰 
┗────────────────┈┈`,
                  wm[1] ||
                    `┓
┃
┃
┃
┛`,
                );
            } catch (e) {
              console.error({
                e,
              });
            } finally {
              if (!stiker)
                stiker = await sticker(
                  img,
                  false,
                  wm[0] ||
                    `┏──────────────────
┃𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺: @𝘂𝗴𝗵𝗯𝗺𝗺
┃𝗦𝘁𝗶𝗸𝗲𝗿 𝗗𝗶 𝗕𝘂𝗮𝘁: ${time}, ${hariini}
┃𝗛𝗮𝗺 𝗕𝗼𝘁𝘇𝘇 𝟮𝟬𝟮𝟰 
┗────────────────┈┈`,
                  wm[1] ||
                    `┓
┃
┃
┃
┛`,
                );
            }
          } else if (args[0]) {
            if (isUrl(args[0]))
              stiker = await sticker(
                false,
                args[0],
                `┏──────────────────
┃𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺: @𝘂𝗴𝗵𝗯𝗺𝗺
┃𝗦𝘁𝗶𝗸𝗲𝗿 𝗗𝗶 𝗕𝘂𝗮𝘁: ${time}, ${hariini}
┃𝗛𝗮𝗺 𝗕𝗼𝘁𝘇𝘇 𝟮𝟬𝟮𝟰 
┗────────────────┈┈`,
                `┓
┃
┃
┃
┛`,
              );
            else return m.reply("URL tidak valid!");
          }
        } catch (e) {
          console.error({
            e,
          });
          if (!stiker) stiker = e;
        } finally {
          if (!Buffer.isBuffer(stiker)) {
            console.error(stiker);
            await m.reply("Reply Foto Nya!");
          } else {
            await nova.sendMessage(
              m.chat,
              {
                sticker: stiker,
              },
              {
                quoted: m,
              },
            );
          }
        }
      }
      break
/* 𝘐𝘯𝘪 𝘞𝘮
𝘔𝘰𝘥𝘪𝘧𝘪𝘬𝘢𝘴𝘪 𝘈𝘱𝘬𝘴 + 𝘥𝘦𝘵𝘢𝘪𝘭 + 𝘥𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘉𝘺 𝘍𝘶𝘳𝘪𝘯𝘢 
𝘚𝘶𝘮𝘣𝘦𝘳?
𝘊𝘩: https://whatsapp.com/channel/0029VagEmD96hENqH9AdS72V/306
𝘕𝘦𝘦𝘥 𝘒𝘦𝘺? 𝘉𝘶𝘺: https://endpoint.web.id ( murah jir )
*/

case 'apks':
  if (!text) return m.reply('*Masukkan nama aplikasi*');

  try {
    let apk = await (await fetch(`https://endpoint.web.id/gaming/android1-search?key=${global.end}&query=` + text)).json();
    
    if (apk.status && apk.result.length > 0) {
      let appResults = apk.result.map(app => {
        return `*App Name:* ${app.name}\n*Developer:* ${app.developer}\n*Rating:* ${app.rating}\n*Download Link:* ${app.link}\n*Icon:* ${app.imageUrl}\n\n`;
      }).join('');
      
      m.reply(`Berikut adalah aplikasi yang ditemukan berdasarkan pencarian "${text}":\n\n${appResults}`);
    } else {
      m.reply(`Tidak ada aplikasi yang ditemukan dengan kata kunci: *${text}*`);
    }
    
  } catch (e) {
    m.reply('*Terjadi error :* ' + e);
  }
  break
  
case 'apkd':
  if (!text) return reply('*Masukkan link html*');

  try {
    let apk = await (await fetch(`https://endpoint.web.id/gaming/android1-detail?key=${global.end}&url=` + text)).json();
    
    if (apk.status && apk.result) {
      let app = apk.result; 
      
      let title = app.title;
      let imageUrl = app.imageUrl;
      let developer = app.developer;
      let description = app.description;
      let version = app.version;
      let fileSize = app.fileSize;
      let operatingSystem = app.operatingSystem;
      let rating = app.rating;
      let ratingCount = app.ratingCount;
      let downloadUrl = app.downloadUrl;

      let messageContent = `
*Title:* ${title}
*Developer:* ${developer}
*Version:* ${version}
*File Size:* ${fileSize}
*Operating System:* ${operatingSystem}
*Rating:* ${rating} (based on ${ratingCount} ratings)

*Description:*
${description}

*Download Link:* ${downloadUrl}

*Icon:*
${imageUrl}`;

      m.reply(messageContent);
    } else {
      m.reply(`Tidak ada aplikasi yang ditemukan dengan kata kunci: *${text}*`);
    }
    
  } catch (e) {
    m.reply('*Terjadi error :* ' + e);
  }
  break
  
/*[🌟] => REMOVE BACKGROUND*

👨‍💻 : Tanaka Domp
🌐 : With module remove.bg
🧁 : https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h
❗ : Do not delete wm*/

case 'removebg': 
case 'rmvbg':
case 'rmvebg':
{
    if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
    if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
    if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);

    let remobg = require('remove.bg');
    let apirnobg = [
        'q61faXzzR5zNU6cvcrwtUkRU',
        'S258diZhcuFJooAtHTaPEn4T',
        '5LjfCVAp4vVNYiTjq9mXJWHF',
        'aT7ibfUsGSwFyjaPZ9eoJc61',
        'BY63t7Vx2tS68YZFY6AJ4HHF',
        '5Gdq1sSWSeyZzPMHqz7ENfi8',
        '86h6d6u4AXrst4BVMD9dzdGZ',
        'xp8pSDavAgfE5XScqXo9UKHF',
        'dWbCoCb3TacCP93imNEcPxcL'
    ];
    
    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)];
    let hmm = './remobg-' + getRandom('');
    let localFile = await nova.downloadAndSaveMediaMessage(qmsg, hmm);
    let outputFile = './hremo-' + getRandom('.png');
    
    m.reply(mess.wait);
    
    remobg.removeBackgroundFromImageFile({
        path: localFile,
        apiKey: apinobg,
        size: "regular",
        type: "auto",
        scale: "100%",
        outputFile
    }).then(async result => {
        nova.sendMessage(m.chat, { image: fs.readFileSync(outputFile), caption: 'Done Bub😘~' }, { quoted: m });
        await fs.unlinkSync(localFile);
        await fs.unlinkSync(outputFile);
    });
}
break

//————————————————————————//
// Download Fitur

case 'threads': {
if (!args || !args[0]) return reply(`Example: ${prefix + command} https://www.threads.net/@httpnald_/post/CwWvCFvJr_N/?igshid=NTc4MTIwNjQ2YQ==`)
reply(mess.wait)
let timestamp = speed()
let latensi = speed() - timestamp
const json = await fetchJson(`https://aemt.uk.to/download/threads?url=${text}`)
nova.sendMessage(m.chat, { video: { url: json.result.video_urls[0].download_url }, caption: `🍟 *Fetching* : ${latensi.toFixed(4)} ms` }, { quoted: m })
}
break

case 'threadsimg': {
if (!args || !args[0]) return reply(`Example: ${prefix + command} https://www.threads.net/t/Cujx6ryoYx6/?igshid=NTc4MTIwNjQ2YQ==`)
let timestamp = speed()
let latensi = speed() - timestamp
const json = await fetchJson(`https://aemt.uk.to/download/threads?url=${text}`)
nova.sendMessage(m.chat, { image: { url: json.result.image_urls }, caption: mess.done }, { quoted: m })
}
break

case 'gimage':{
if (!q) return reply(`Usage: ${prefix}gimage sby garuk biji`);
nova.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.uk.to/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await nova.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
}
} catch (e) {
reply(`Error :>`)
}
}
break

    case 'igvid': case 'ig': case 'igdl': {
    if (!text) return reply(`Anda perlu memberikan URL video, reel`);
reply(mess.wait)
    let res;
    try {
        res = await fetch(`https://endpoint.web.id/downloader/instagram?key=${global.end}&url=${text}`);
    } catch (error) {
        return reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await nova.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return reply(`Failed to send media: ${error}`);
    }
}
break

case 'pin': case 'pinterest':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply(`*Example*: ${prefix + command} Naruto`)
let old = new Date()
let json = await chApi.pinterest(text)
result = json[Math.floor(Math.random() * json.length)]  
nova.sendMessage(m.chat, { image: { url: result }, caption: mess.success }, { quoted: m })
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'twitterdl':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply('Link nya kak?\n\nContoh : .twitter https://twitter.com/FCBarcelona_es/status/1615392117026586628?s=20&t=Djtl01fwdxTX1I5g-tm72A')
reply(mess.search)
let json = await chApi.twitter(text)
nova.sendMessage(from, {video:{url: json.HD },caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"}, {quoted:m})
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'cocofun':{
if (!text) return reply(`Example: ${prefix + command} https://www.icocofun.com/share/post/565326210234?lang=id&pkg=id&share_to=copy_link&m=06fa9a57a737be2bee99bea6bcdb20ee&d=7a1c5048f54ef09b7c0fa0f3c463692949f35fa30d93fc1130f6e8153f537b51&nt=1`)
reply(mess.getdata)
let old = new Date()
let asy = await chApi.cocofun(text)
let caption = `乂  *C O C O F U N*\n\n`
caption += `	◦  *Topic* : ${asy.topic}\n`
caption += `	◦  *Caption* : ${asy.caption}\n`
caption += `	◦  *Play* : ${asy.play}\n`
caption += `	◦  *Like* : ${asy.like}\n`
caption += `	◦  *Share* : ${asy.share}\n`
caption += `	◦  *Duration* : ${asy.duration}\n\n`
caption += `	◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n` 
nova.sendMessage(m.chat, { video: { url: asy.no_watermark }, caption: caption }, { quoted: m })
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'tiktoksearch': case 'ttsearch':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
reply(mess.getdata)
try{
let anu = await chApi.ttsearch(text)
const capt = anu.title
nova.sendMessage(m.chat, { video: { url: anu.no_watermark }, caption: `💬 Caption : ${capt}\n\n\nHam-Bot`}, {quoted: m})
}catch (error) {
reply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

 case 'play2': {
 if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
 if (!text) return reply(`*YANG BENER TUH GINI!! CONTOH :*\n> *.play not you*`)
 
 try {
 let res = await ytsr(text)
 let url = res.all;
 let result = url[Math.floor(Math.random() * url.length)]
 let load = await (await fetch(`https://endpoint.web.id/downloader/yt-audio?key=${global.end}&url=${result.url}`)).json();
 let shannz = load.result
 
 await nova.sendMessage(m.chat, { 
 audio: { 
 url: shannz.download
 }, 
 mimetype: 'audio/mp4', contextInfo: {
 externalAdReply: {
 title: result.title,
 body: `Type : Mp3 (128kbps)`,
 thumbnailUrl: result.thumbnail,
 mediaType: 1,
 showAdAttribution: false,
 renderLargerThumbnail: true,
 },
 }, 
 }, { quoted: m });
 } catch (error) {
 reply(`Ham api sedang error, segera repot ke owner!`);
 }
}
break

case 'playy': {
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
const axios = require('axios');
const cheerio = require('cheerio');
const qs = require('qs');

const appleMusic = {
  search: async (query) => {
    const url = `https://music.apple.com/us/search?term=${query}`;
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const results = [];
        $('.desktop-search-page .section[data-testid="section-container"] .grid-item').each((index, element) => {
            const title = $(element).find('.top-search-lockup__primary__title').text().trim();
            const subtitle = $(element).find('.top-search-lockup__secondary').text().trim();
            const link = $(element).find('.click-action').attr('href');

            results.push({
                title,
                subtitle,
                link
            });
        });

        return results;
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        return { success: false, message: error.message };
    }
  },
  detail: async (url) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const albumTitle = $('h1[data-testid="non-editable-product-title"]').text().trim();
        const artistName = $('a[data-testid="click-action"]').first().text().trim();
        const releaseInfo = $('div.headings__metadata-bottom').text().trim();
        const description = $('div[data-testid="description"]').text().trim();

        const result = {
            albumTitle,
            artistName,
            releaseInfo,
            description
        };

        return result;
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  }
}

const appledown = {
  getData: async (urls) => {
    const url = `https://aaplmusicdownloader.com/api/applesearch.php?url=${urls}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'MyApp/1.0',
                'Referer': 'https://aaplmusicdownloader.com/'
            }
        });
        return response.data;
    } catch (error) {
      return { success: false, message: error.message };
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  },
  getAudio: async (trackName, artist, urlMusic, token) => {
    const url = 'https://aaplmusicdownloader.com/api/composer/swd.php';
    const data = {
        song_name: trackName,
        artist_name: artist,
        url: urlMusic,
        token: token
    };
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'MyApp/1.0',
        'Referer': 'https://aaplmusicdownloader.com/song.php#'
    };
    try {
        const response = await axios.post(url, qs.stringify(data), { headers });
        const downloadLink = response.data.dlink;
        return downloadLink;
    } catch (error) {
      return { success: false, message: error.message };
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  },
  download: async (urls) => {
    const musicData = await appledown.getData(urls);
    if (musicData) {
        const encodedData = encodeURIComponent(JSON.stringify([
            musicData.name,
            musicData.albumname,
            musicData.artist,
            musicData.thumb,
            musicData.duration,
            musicData.url
        ]));
        const url = 'https://aaplmusicdownloader.com/song.php';
        const headers = {
            'authority': 'aaplmusicdownloader.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cache-control': 'max-age=0',
            'content-type': 'application/x-www-form-urlencoded',
            'origin': 'https://aaplmusicdownloader.com',
            'referer': 'https://aaplmusicdownloader.com/',
            'user-agent': 'MyApp/1.0'
        };
        const data = `data=${encodedData}`;
        try {
            const response = await axios.post(url, data, { headers });
            const htmlData = response.data;
            const $ = cheerio.load(htmlData);
            const trackName = $('td:contains("Track Name:")').next().text();
            const albumName = $('td:contains("Album:")').next().text();
            const duration = $('td:contains("Duration:")').next().text();
            const artist = $('td:contains("Artist:")').next().text();
            const thumb = $('figure.image img').attr('src');
            const urlMusic = urls;
            const token = $('a#download_btn').attr('token');
            const downloadLink = await appledown.getAudio(trackName, artist, urlMusic, token);

            const extractedData = {
                name: trackName,
                albumname: albumName,
                artist: artist,
                url: urlMusic,
                thumb: thumb,
                duration: duration,
                token: token,
                download: downloadLink
            };
            return extractedData;
        } catch (error) {
          return { success: false, message: error.message };
          console.error("Error:", error.response ? error.response.data : error.message);      
        }
    }
  }
}

if (!text) return m.reply("nama lagu nya?")
const hasil = await appleMusic.search(text)
let audioap = await appledown.download(hasil[0].link)

let applecap = `—————————————
_PLAY MUSIC_
—————————————
〆 ɴᴀᴍᴇ : ${audioap.name}
〆 ᴀʟʙᴜᴍ : ${audioap.albumname}
〆 ᴅᴜʀᴀᴛɪᴏɴ : ${audioap.duration}
〆 ᴜʀʟ : ${audioap.url}
—————————————
`;

await nova.sendMessage(m.chat, {
text: applecap, 
    contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: audioap.name,
      mediaType: 1,
      previewType: 1,
      body: audioap.albumname,
      //previewType: "PHOTO",
      thumbnailUrl: audioap.thumb,
      renderLargerThumbnail: true,
      mediaUrl: audioap.url,
      sourceUrl: audioap.url
    }
  }
}, { quoted: m })

await nova.sendMessage(m.chat, {
audio: {
url: audioap.download
},
mimetype: 'audio/mpeg',
    contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: audioap.name,
      mediaType: 1,
      previewType: 1,
      body: audioap.albumname,
      //previewType: "PHOTO",
      thumbnailUrl: audioap.thumb,
      renderLargerThumbnail: false,
      mediaUrl: audioap.url,
      sourceUrl: audioap.url
    }
  }
}, { quoted: m })
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break


/*
© https://whatsapp.com/channel/0029Vai9MMj5vKABWrYzIJ2Z

Fitur ini menggunakan module btch-downloader, silahkan install module terlebih dahulu dengan command seperti ini :

- npm install btch-downloader@latest

*/

case 'play': {
if (!text) return reply(`Contoh: ${prefix + command} sephia`);
reply(mess.wait);
try {
const search = require("yt-search");
const { youtube } = require("btch-downloader");
const axios = require("axios");
async function getBuffer(url) {
const res = await axios({
method: 'get',
url,
responseType: 'arraybuffer'
});
return res.data;
}
const look = await search(text);
const convert = look.videos[0];
if (!convert) return reply('Audio Tidak Ditemukan');
if (convert.seconds >= 3600) {
return reply('Audio is longer than 1 hour!');
}
let audioUrl;
let videoUrl;
try {
audioUrl = await youtube(convert.url);
videoUrl = await youtube(convert.url);
} catch (e) {
reply("Retrying...");
audioUrl = await youtube(convert.url);
videoUrl = await youtube(convert.url);
}
const thumbBuffer = await getBuffer(convert.thumbnail);
await nova.sendMessage(m.chat, {
video: {
url: videoUrl.mp4
},
mimetype: 'video/mp4',
fileName: `${convert.title}.mp4`,
jpegThumbnail: thumbBuffer,
caption: `🎵 *${convert.title}*\n📽 *Source*: ${convert.url}`
}, {
quoted: m
});
await nova.sendMessage(m.chat, {
audio: {
url: audioUrl.mp3
},
mimetype: 'audio/mpeg',
fileName: `${convert.title}.mp3`,
jpegThumbnail: thumbBuffer,
}, {
quoted: m
});
} catch (e) {
reply(`*Error:* ${e.message}`);
}
};
break

case 'ytmp3': 
{
 if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
 if (!text) return m.reply(`*YANG BENER TUH GINI!! CONTOH :*\n> *.ytmp3 url*`)
 
 try {
 let load = await (await fetch(`https://endpoint.web.id/downloader/yt-audio?key=${global.end}&url=${text}`)).json();
 let shannz = load.result
 
 await nova.sendMessage(m.chat, { 
 audio: { 
 url: shannz.download
 }, 
 mimetype: 'audio/mp4', contextInfo: {
 externalAdReply: {
 title: shannz.title,
 body: `Type : Mp3 (128kbps)`,
 thumbnailUrl: shannz.image,
 mediaType: 1,
 showAdAttribution: false,
 renderLargerThumbnail: true,
 },
 }, 
 }, { quoted: m });
 } catch (error) {
 m.reply(`Ham api sedang error, segera repot ke owner!`);
 }
}
break

case 'ytmp4': {
 if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
 if (!text) return m.reply('contoh: .ytmp4 url|quality\nAvailable Quality: 360p, 480p, 720p, 1080p')
try {
 let url = text.split("|")[0];
 let quality = text.split("|")[1];
 if (!quality) return m.reply('contoh: .ytmp4 url|quality\nAvailable Quality: 360p, 480p, 720p, 1080p');
 m.reply('*Process sending video, mungkin membutuhkan 1-3 menit jika durasi video panjang!*')
 let proces = await (await fetch(`https://endpoint.web.id/downloader/yt-video?key=${global.end}&url=${url}&quality=${quality}`)).json()
 let video4 = proces.result; 
 nova.sendMessage(m.chat,{video:{url: video4.download }, caption: video4.title},{quoted: m})
} catch (e) {
 m.reply('*terjadi error*');
}
}
break

case 'gdrive':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await nova.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  reply(`${error.message}`)
}
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'git': case 'gitclone': case 'gh':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
reply(mess.search)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
nova.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply('emror'))
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break 

case 'mf2':
case 'mediafire2':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply(`Contoh : ${prefix + command} linknya`)
reply(mess.wait)
await fg.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return reply("Gagal mendownload, ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return reply("Gagal mendownload, ukuran file terlalu besar")
if (res.url == "") return reply('Error :v')
let caption = `乂 M E D I A F I R E - D O W N L O A D

◦ *FileName:* ${res.filename}
◦ *FileType:* ${res.filetype}
◦ *Url:* ${res.url}`
nova.sendMessage(m.chat, { document: { url: res.url }, fileName: res.filename, mimetype: res.filetype, caption: caption }, { quoted: m })
}).catch((e) => reply('Error :v'))
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

/*[🌟] => FIX MEDIAFIRE*

👨‍💻 : Tanaka Domp
🌐 : -
🧁 : https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h
❗ : Do not delete wm*/

case 'mediafire': 
case 'mf':
{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
    async function mediafiredll(url) {
        const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
        const $ = cheerio.load(res.data);
        
        const fileurl = $('#downloadButton').attr('href');
        const filename = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div')
            .attr('title')
            .replaceAll(' ', '')
            .replaceAll('\n', '');
        
        const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
        const filesize = $('#downloadButton').text()
            .replace('Download', '')
            .replace('(', '')
            .replace(')', '')
            .replace('\n', '')
            .replace('\n', '')
            .replace('                         ', '')
            .replaceAll(' ', '');
        
        let filetype = '';
        let rese = await axios.head(link);
        filetype = rese.headers['content-type'];

        return { filename, filesize, date, filetype, fileurl };
    }

    let input = `*Example*: ${prefix + command} https://www.mediafire.com/xxxxxxx*`;
    
    if (!text) return reply(input);
    
    const dataJson = await mediafiredll(text);
    const { filename, filesize, date, filetype, fileurl } = dataJson
    if (filesize.split('MB')[0] >= 1024) {
        return reply('*Ih gede banget size nya, gak mao ah😠*');
    }

    await sleep(500);
    
    const caption = `≡ *MEDIAFIRE*

▢ *Name* : ${filename}
▢ *Size* : ${filesize}
▢ *Type* : ${filetype}
▢ *UploadAt*: ${date}`;

     nova.sendMessage(m.chat, { document : { url : fileurl}, fileName : filename, caption: caption, mimetype: filetype }, { quoted : m });
}
break

case 'tiktok':
case 'tt':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply(`Contoh : ${prefix + command} linknya`)
reply(mess.wait)
let data = await fg.tiktok(text)
let json = data.result
let caption = `[ TIKTOK - DOWNLOAD ]\n\n`
caption += `◦ *Id* : ${json.id}\n`
caption += `◦ *Username* : ${json.author.nickname}\n`
caption += `◦ *Title* : ${(json.title)}\n`
caption += `◦ *Like* : ${(json.digg_count)}\n`
caption += `◦ *Comments* : ${(json.comment_count)}\n`
caption += `◦ *Share* : ${(json.share_count)}\n`
caption += `◦ *Play* : ${(json.play_count)}\n`
caption += `◦ *Created* : ${json.create_time}\n`
caption += `◦ *Size* : ${json.size}\n`
caption += `◦ *Duration* : ${json.duration}`
if (json.images) {
json.images.forEach(async (k) => {
await nova.sendMessage(m.chat, { image: { url: k }}, { quoted: m });
})
} else {
nova.sendMessage(m.chat, { video: { url: json.play }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
setTimeout(() => {
nova.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: m })
}, 3000)
}
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'aio':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
    if (!text) return reply(`Penggunaan: ${prefix + command} [link video]\nLIST LINK YANG SUPPORT:\n- YouTube\n- instagram\n- tiktok\n- facebook\n- twitter\n- dan lain lainnya, masih banyak lagi`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await nova.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: qevent });
        } else {
            await reply("Maaf, video tidak ditemukan.");
        }

     

    } catch (error) {
        await reply(`Terjadi kesalahan: ${error.message}`);
    }
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

       case "spotifydl":
      {
        if (!text) return reply(`Where is the link?`);
        await nova.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        const Spotify = require("./SanzAll/SanzLibrary/spotify");
        const spotify = new Spotify(text);
        const info = await spotify.getInfo();
        if (info.error)
          return reply(`The link you provided is not spotify link`);
        const { name, artists, album_name, release_date, cover_url } = info;
        const details = `${global.global.themeemoji} *Judul:* ${
          name || ""
        }\n${global.global.themeemoji} *Artis:* ${(artists || []).join(
          ",",
        )}\n${global.global.themeemoji} *Album:* ${album_name}\n${global.global.themeemoji} *Tanggal Release:* ${
          release_date || ""
        }\n\n\n_Download No Limit Ada Di Sini:_\n- https:/spotify.hamstore.me\n\n> _*Proses Ini Mungkin Membutuhkan Waktu Beberapa Saat, Silahkan Menunggu Hingga Audio Terkirim....*_`;
        const response = await nova.sendMessage(
          m.chat,
          {
            image: {
              url: cover_url,
            },
            caption: details,
          },
          {
            quoted: m,
          },
        );
        const bufferpotify = await spotify.download();
        await nova.sendMessage(
          m.chat,
          {
            audio: bufferpotify,
            mimetype: "audio/mp4",
            ptt: false,
            contextInfo: {
              externalAdReply: {
                mediaType: 1,
                title: `${name || ""}`,
                thumbnail: {
                  url: cover_url,
                },
                thumbnailUrl: cover_url,
                sourceUrl: `${text}`,
                renderLargerThumbnail: true,
                showAdAttribution: true,
              },
            },
          },
          {
            quoted: response,
          },
        );
        await nova.sendMessage(m.chat, {
          react: {
            text: "✅",
            key: m.key,
          },
        });
      }
      break;
      
      case 'apkdl':
  if (!text) return reply('*Masukkan link aplikasi yang ingin diunduh?*');
  
  try {
    let apk = await (await fetch(`https://endpoint.web.id/gaming/android1-download?key=${global.end}&url=` + encodeURIComponent(text))).json();
    
    if (apk.status && apk.result) {
      let app = apk.result;
      let title = app.title;          
      let imageUrl = app.imageUrl;   
      let version = app.version;      
      let downloadUrl = app.downloadUrl; 

      nova.sendMessage(m.chat, { document: { url: downloadUrl }, fileName: title, mimetype: 'application/vnd.android.package-archive', caption: `*Title:* ${title}\n*Version:* ${version}\n*Download Link:* ${downloadUrl}\n*Image:* ${imageUrl}`,
      }, { quoted: m });
      
    } else {
      aiRep('Tidak ada aplikasi yang ditemukan dengan link tersebut.');
    }
  } catch (e) {
    m.reply('*Terjadi error :* ' + e);
  }
  break
//————————————————————————//
// Search Fitur

case 'npmstalk': {
  if (!text) return reply("Example: .npmstalk axios")
async function npmstalk(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}
try {
let jut = await npmstalk(text)
let ahwoi = `[ *NPM STALK* ]

Name: ${jut.name}
Version Latest: ${jut.versionLatest}
Version Publish: ${jut.versionPublish}
Version Update: ${jut.versionUpdate}
Latest Dependencies: ${jut.latestDependencies}
Publish Dependencies: ${jut.publishDependencies}
Publish Time: ${jut.publishTime}
Latest Publish Time: ${jut.latestPublishTime}
`
reply(`${ahwoi}`)
} catch (error) {
  reply(error.message)
}
}
break

        case 'gimage': {
    if (!text) return reply(`gimage Kucing`)
    reply(mess.wait)
    const axios = require('axios')
    const cheerio = require('cheerio')
// wm avs
    const nyariGambar = async (query) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        let images = []
        $('img').each((i, elem) => {
            images.push($(elem).attr('src'))
        })
        return images
    }
// wm avs
    nyariGambar(text).then(images => {
        if (images.length === 0) {
            return reply('Tidak ada gambar.')
        }
        let SaannzImage = images[Math.floor(Math.random() * images.length)]
        nova.sendMessage(m.chat, { image: { url: SaannzImage }, caption: `*Query* : ${text}\n*Media Url* : ${SaannzImage}` }, { quoted: m })
    }).catch(error => {
        reply('Terjadi kesalahan.')
    })
}
break

case 'picsum': {
  if (!q) return reply(`contoh \n\npicsum nature`);
  
  async function picSum(text) {
    try {
      const imageUrl = `https://picsum.photos/seed/${q}/800/600`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
//avs
  const result = await picSum(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: `hasil dari pencarian gambar : ${q}`
    };
    nova.sendMessage(m.chat, message);
  } else {
    reply('err.');
  }
}
break

case 'nextlibur': {
  reply(mess.wait)
  async function nexLibur() {
  const { data } = await axios.get("https://www.liburnasional.com/");
  let libnas_content = [];
  let $ = cheerio.load(data);
  let result = {
    nextLibur:
      "Hari libur" +
      $("div.row.row-alert > div").text().split("Hari libur")[1].trim(),
    libnas_content,
  };
  $("tbody > tr > td > span > div").each(function (a, b) {
    let summary = $(b).find("span > strong > a").text();
    let days = $(b).find("div.libnas-calendar-holiday-weekday").text();
    let dateMonth = $(b).find("time.libnas-calendar-holiday-datemonth").text();
    libnas_content.push({ summary, days, dateMonth });
  });
  return result;
  }
  try {
    let teks = `*${(await nexLibur()).nextLibur}*\n\n`
    let result = (await nexLibur()).libnas_content

    for (let a of result) {
      teks += `Ringkasan: ${a.summary}\nHari: ${a.days}\nBulan: ${a.dateMonth}\n\n`
    }
    reply(teks)
  } catch (e) {
    throw e
  }
}
break

case 'spotify': case 'spotifysearch':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
•🎵 *Judul:* ${x.name}*
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
  }
break

case 'anilist':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
  if (!text) return reply("Example: .anilist naruto")
function anilist(query) {
  return new Promise((resolve, reject) => {
    axios.get('https://anilist.co/search/anime?search=' + query)
      .then(response => {
        const $ = cheerio.load(response.data);
        const anime = []
        const ling = []
        const image = []
        
        $('div.media-card a').each(function(a, b) {
          ling.push('https://anilist.co' + $(b).attr('href'))
        })
        
        $('div.media-card a img').each(function(a, b) {
          image.push($(b).attr('src'))
        })
        
        for (let i = 0; i < 10; i++) {
          const link = ling[i]
          const gambar = image[i]
          anime.push({
            link, gambar
          });
        }
        resolve(anime);
      })
      .catch(error => {
        reject(error);
      });
  });
}

async function anilistdetail(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('meta[property="og:title"]').attr('content');
    const description = $('meta[property="og:description"]').attr('content');

    const animeData = {
      title,
      description
    };

    return animeData
  } catch (error) {
    console.error(error);
  }
}
const date = await anilist(text)
const kanjut = await anilistdetail(date[0].link)
nova.sendMessage(m.chat, {image: {url: `${date[0].gambar}`}, caption: `Hasil Pencarian Anime:

Judul: ${kanjut.title}
Deskripsi: ${kanjut.description}
Link: ${date[0].link}
`}, {quoted: m})
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'lyrics':
case 'lirik':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply(`Contoh : ${prefix + command} pilihan hatiku`)
reply(mess.wait)
let res = await fg.lyrics(text)
let cap = `*L I R I K - L A G U*\n\n*Title* : ${res.title}\n*Artist* : ${res.artist}\n*Lyrics* :\n${res.lyrics}`
nova.sendMessage(m.chat, { image: { url: res.image }, caption: cap }, { quoted: m })
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

      case 'earthquake': case 'gempa': 
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
        const tres = await Gempa()
        var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
        console.log(Map)
        const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
        nova.sendMessage(from, { image: { url: Map }, caption: captt })
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
        break;

case 'kiryuusearch':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!isDev) return reply(mess.owner)  
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} Boruto`)
reply(mess.search)
let anu = await chApi.kiryu(text)
let teks = `乂 *K I R Y U U - S E A R C H*\n\n`
anu.map((v, i) => {
teks += `${i+1}. ${v.judul}\n`
teks += `*Title* : ${v.judul}\n`
teks += `*Author* : ${v.author}\n`
teks += `*Rating* : ${v.rating}\n`
teks += `*LastChapter* : ${v.last_chapter}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}).join('\n\n')
teks += `Ham-Bot`
nova.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `乂 K I R Y U U`,
body: '',
thumbnailUrl: anu[0].thumbnail,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

      case 'covidinfo':
      case 'covid':
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
        const c = await covid()
        var { cases, death, healed } = c[0]
        nova.sendMessage(from, { text: `\nCovid\n\nCase : ${cases}\n\nDead : ${death}\n\nHealed : ${healed}\n` }, m)
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
        break;

case 'weather':{
if (!isDev && global.db.data.users[m.sender].limit < 1) return onlyLimit()
if (!text) return reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           nova.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
           }
           break
//————————————————————————//
// GROUP FITUR
    case 'antipoll':
        handleFeatureToggle('antipoll', command);
        break;

    case 'antisticker':
        handleFeatureToggle('antisticker', command);
        break;

    case 'antiimage':
        handleFeatureToggle('antiimage', command);
        break;

    case 'antivideo':
        handleFeatureToggle('antivideo', command);
        break;

    case 'antivirtex':
        handleFeatureToggle('antivirtex', command);
        break;

    case 'antibot':
        handleFeatureToggle('antibot', command);
        break;

    case 'antiviewonce':
        handleFeatureToggle('antiviewonce', command);
        break;

    case 'antispam':
        handleFeatureToggle('antispam', command);
        break;

    case 'antimedia':
        handleFeatureToggle('antimedia', command);
        break;

    case 'antidocument':
        handleFeatureToggle('antidocument', command);
        break;

    case 'anticontact':
        handleFeatureToggle('anticontact', command);
        break;

    case 'antilocation':
        handleFeatureToggle('antilocation', command);
        break;

    case 'antilink':
        handleFeatureToggle('antilink', command);
        break;

    case 'antilinkgc':
        handleFeatureToggle('antilinkgc', command);
        break;

    case 'antipromotion':
        handleFeatureToggle('antipromotion', command);
        break;

    case 'antiaudio':
        handleFeatureToggle('antiaudio', command);
        break;

    case 'antibadword':
    case 'antitoxic':
        handleFeatureToggle('badword', command);
        break;

case 'demoteall':
if (!isDev) return onlyOwner()
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return onlyBadmin()
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
await reply("DONE✅")
var groupe = await nova.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
nova.groupParticipantsUpdate(from, mems, 'demote')
break

case 'promoteall':
if (!isDev) return onlyOwner()
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return onlyBadmin()
await reply("DONE✅")
var groupe = await nova.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
nova.groupParticipantsUpdate(from, mems, 'promote')
break

case 'unblock':{
if (!isDev) return onlyOwner()
await reply("DONE✅")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await nova.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'block':{
if (!isDev) return onlyOwner()
await reply("DONE✅")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await nova.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'kickall':
if (!isDev) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return reply("bot belum admin")
if (!isAdmins) return reply("Khusus Admin")
var groupe = await nova.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
nova.groupParticipantsUpdate(from, mems, 'remove')
break

case 'totag':{
if (!m.isGroup) return onlyGroup()
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!isAdmins) return reply(mess.only.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
nova.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break

case 'liston':{
if (!m.isGroup) return onlyGroup()
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
nova.sendText(m.chat, '乂 *LIST ONLINE:*\n\n' + online.map(v => '◦ @' + v.replace(/@.+/, '')).join`\n`, m, {
mentions: online
})
}
break

case "add":{
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isAdmins && !isDev) return onlyAdmin()
if (!isBotAdmins) return onlyBadmin()
if (!text && !m.quoted) reply('masukkan nomor yang ingin di tambahkan')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await nova.groupParticipantsUpdate(m.chat, [users], 'add').catch(console.log)
}
break

case "kick":{
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isAdmins && !isDev) return onlyAdmin()
if (!isBotAdmins) return onlyBadmin()
if (!text && !m.quoted) reply('masukkan nomor yang ingin di kick')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await nova.groupParticipantsUpdate(m.chat, [users], 'remove').catch(console.log)
}
break

case "promote":{
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isAdmins && !isDev) return onlyAdmin()
if (!isBotAdmins) return onlyBadmin()
if (!text && !m.quoted) reply('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await nova.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break

case "demote":{
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isAdmins && !isDev) return onlyAdmin()
if (!isBotAdmins) return onlyBadmin()
if (!text && !m.quoted) reply('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await nova.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break

case 'gc':{ 
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isAdmins && !isDev) return onlyAdmin()
if (!isBotAdmins) return onlyBadmin()
if (args[0] === 'close'){
await nova.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await nova.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
 reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
 }
}
break

case 'editinfo':{
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isAdmins && !isDev) return onlyAdmin()
if (!isBotAdmins) return onlyBadmin()
 if (args[0] === 'open'){
await nova.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await nova.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
}
}
break

case 'join':{
if (!isDev) return reply('Khusus Owner Bot')
if (!text) return reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await nova.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'leave':{
if (!isDev) return onlyOwner()
reply("Aku Pergi :v")
await nova.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'hidetag':{
if (!m.isGroup && !isDev) return reply('Khusus Group Dan Owner')
nova.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

case 'editsubjek':{
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isAdmins && !isDev) return onlyAdmin()
if (!isBotAdmins) return onlyBadmin()
if (!text) return reply('Text nya ?')
await nova.groupUpdateSubject(m.chat, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break

case 'editdesk':{
if (!m.isGroup) return onlyGroup()
if (!isAdmins && !isAdmins && !isDev) return onlyAdmin()
if (!isBotAdmins) return onlyBadmin()
if (!text) return reply('Text Nya ?')
await nova.groupUpdateDescription(m.chat, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break

case 'tagall':{
if (!m.isGroup && !isAdmins) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
nova.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//————————————————————————//
// SAWERIA GATEWAY 

case 'batal-membeli':{
if (!fs.existsSync("./SanzAll/SanzDatabase/gateway/" + sender.split("@")[0] + ".json")) return
reply("Baik Kak All Membeli Di Batalkan ✅.")
fs.unlinkSync("./SanzAll/SanzDatabase/gateway/" + sender.split("@")[0] + ".json")
}
break
case 'login':{
if (!isDev) return onlyOwner()
if (db_saweria.length == 1) return reply(`Sudah login disaweria...`)
if (m.isGroup) return reply(mess.private)
if (!q) return reply(`Contoh: ${prefix+command} email@gmail.com,password`)
if (!q.split("@")[1]) return reply(`Contoh: ${prefix+command} email@gmail.com,password`)
if (!q.split(".")[1]) return reply(`Contoh: ${prefix+command} email@gmail.com,password`)
if (!q.split(",")[1]) return reply(`Contoh: ${prefix+command} email@gmail.com,password`)
await reply("Sedang mencoba login...")
let Pay = new Saweria(db_saweria)
let res = await Pay.login(q.split(",")[0], q.split(",")[1])
if (!res.status) return reply(`Terjadi kesalahan saat login:\n${res.msg}`)
await sleep(500)
await reply(`*LOGIN SUKSES ✅*\n\n*USER ID:* ${res.data.user_id}`)
db_saweria.push(res.data.user_id)
fs.writeFileSync("./SanzAll/SanzDatabase/saweria.json", JSON.stringify(db_saweria))
}
break

case 'deposit-otomatis':{
if (fs.existsSync("./SanzAll/SanzDatabase/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} 1000`)
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(q, "BUY " + q)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `${nova}乂 INFO PEMBAYARAN${nova}

- Transfer sebelum:
- ${res.data.expired_at} WIB

- ID Pembayaran: ${res.data.id}
- Total Transfer: Rp${toRupiah(res.data.amount_raw)}

NOTE:
> Kode QR hanya valid untuk 1 kali transfer.
> Jika ingin membatalkan ketik ${prefix}batal-membeli
> Setelah transfer, tunggu beberapa saat
> Jika pembayaran berhasil, status akan diperbarui otomatis.
> Untuk bantuan lebih lanjut, hubungi ${prefix}owner`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./SanzAll/SanzDatabase/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
nova.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: qevent })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await nova.sendMessage(sender, { text: `Deposit Berhasil ✅\nTotalharga: ${toRupiah(res.data.amount_raw)}\nStatus:Berhasil` })
fs.unlinkSync("./SanzAll/SanzDatabase/gateway/" + sender.split("@")[0] + ".json")
}
}
}
break

/*case 'buysc':{
if (fs.existsSync("./SanzAll/SanzDatabase/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`)
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(buysc1, "BUY " + buysc2)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `${nova}乂 INFO PEMBAYARAN${nova}

- Transfer sebelum:
- ${res.data.expired_at} WIB

- ID Pembayaran: ${res.data.id}
- Total Transfer: Rp${toRupiah(res.data.amount_raw)}

NOTE:
> Kode QR hanya valid untuk 1 kali transfer.
> Jika ingin membatalkan ketik ${prefix}batal-membeli
> Setelah transfer, tunggu beberapa saat
> Jika pembayaran berhasil, status akan diperbarui otomatis.
> Untuk bantuan lebih lanjut, hubungi ${prefix}owner`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./SanzAll/SanzDatabase/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
nova.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: qevent })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
const baby2 = await mediafireDl('https://www.mediafire.com/file/hb6qm25y1ln0box/novav3.2.0.zip/file')
nova.sendMessage(sender, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { caption: teks}, { quoted : qevent}).catch (((err) => reply('*Failed to download File*')))
fs.unlinkSync("./SanzAll/SanzDatabase/gateway/" + sender.split("@")[0] + ".json")
}
}
}
break*/
//————————————————————————//
// CERPEN FITUR

case 'cerpen-anak':{
let hasil = await cerpen(`anak`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let hasil = await cerpen(`bahasa daerah`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let hasil = await cerpen(`bahasa Inggris`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let hasil = await cerpen(`bahasa jawa`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let hasil = await cerpen(`bahasa sunda`)
reply(`
 > *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-budaya':{
let hasil = await cerpen(`budaya`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cinta':{
let hasil = await cerpen(`cinta`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaislami':{
let hasil = await cerpen(`cinta islami`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintapertama':{
let hasil = await cerpen(`cinta pertama`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let hasil = await cerpen(`cinta romantis`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasedih':{
let hasil = await cerpen(`cinta sedih`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let hasil = await cerpen(`Cinta segitiga`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasejati':{
let hasil = await cerpen(`cinta sejati`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-galau':{
let hasil = await cerpen(`galau`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-gokil':{
let hasil = await cerpen(`gokil`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-inspiratif':{
let hasil = await cerpen(`inspiratif`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-jepang':{
let hasil = await cerpen(`jepang`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kehidupan':{
let hasil = await cerpen(`kehidupan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-keluarga':{
let hasil = await cerpen(`keluarga`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let hasil = await cerpen(`kisah nyata`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-korea':{
let hasil = await cerpen(`korea`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kristen':{
let hasil = await cerpen(`kristen`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-liburan':{
let hasil = await cerpen(`liburan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-malaysia':{
let hasil = await cerpen(`malaysia`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-mengharukan':{
let hasil = await cerpen(`mengharukan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-misteri':{
let hasil = await cerpen(`misteri`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-motivasi':{
let hasil = await cerpen(`motivasi`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasihat':{
let hasil = await cerpen(`nasihat`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let hasil = await cerpen(`nasionalisme`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-olahraga':{
let hasil = await cerpen(`olahraga`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penantian':{
let hasil = await cerpen(`penantian`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pendidikan':{
let hasil = await cerpen(`pendidikan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengalaman':{
let hasil = await cerpen(`pengalaman pribadi`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let hasil = await cerpen(`pengorbanan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penyesalan':{
let hasil = await cerpen(`penyesalan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perjuangan':{
let hasil = await cerpen(`perjuangan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perpisahan':{
let hasil = await cerpen(`perpisahan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-persahabatan':{
let hasil = await cerpen(`persahabatan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-petualangan':{
let hasil = await cerpen(`petualangan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-ramadhan':{
let hasil = await cerpen(`ramadhan`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-remaja':{
let hasil = await cerpen(`remaja`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rindu':{
let hasil = await cerpen(`rindu`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-romantis':{
let hasil = await cerpen(`romantis`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sastra':{
let hasil = await cerpen(`sastra`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sedih':{
let hasil = await cerpen(`sedih`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sejarah':{
let hasil = await cerpen(`sejarah`)
reply(`
> *Judul*: ${hasil.title}
> *Author*: ${hasil.author}
> *Category*:${hasil.kategori}
> *Pass Moderation*:${hasil.lolos}\n
> *Story*: ${hasil.cerita}`)
}
break
//————————————————————————//
// BERITA FITUR
case 'ffnws': case 'ffnews': case 'freefire_news':{
async function newsFf() {
let response = await axios.get('https://ff.garena.com/id/news/')
let $ = cheerio.load(response.data)
let hasil = []
$('.news-item.news-elem').each((index, element) => {
let time = $(element).find('.news-time').text().trim()
let title = $(element).find('.news-title').text().trim()
let link = $(element).find('a').attr('href').trim()
hasil.push({

title: title,
time: time,
link: 'https://ff.garena.com' + link
})
})
return hasil
}
let response = await newsFf()
let content = ``
response.forEach((element, index) => {
content += `*${index + 1}* ${element.title}
- *Time:* ${element.time}
- *Related news:* ${element.link}\n\n`
})
reply(content)
}
break

case 'merdekanews':{
const fetch = require('node-fetch');
const cheerio = require('cheerio');
async function merdekaavs() {
  try {
    const res = await fetch('https://www.merdeka.com/rss');
    const $ = cheerio.load(await res.text(), { xmlMode: true });
    const channel = {
      title: $('channel > title').text(),
      description: $('channel > description').text(),
      link: $('channel > link').text(),
      image: $('channel > image > url').text(),
    };
    const items = $('item').map((_, el) => ({
      title: 'Title:'+ $(el).find('title').text(),
      link: 'Link:'+ $(el).find('link').text(),
      description: 'Deskripsi:'+ $(el).find('description').text(),
      pubDate: 'Post'+ $(el).find('pubDate').text(),
      image: $(el).find('enclosure').attr('url') || null
    })).get();
    return { channel, total: items.length, data: items };
  } catch {
    return { message: 'Something went wrong' };
  }
}
let lily = await merdekaavs()
      let results = lily.data 
        if (results.length > 0) {
        let message = `Hasil dari pencarian merdeka.com :\n\n`;
        results.forEach((result, index) => {
        message += `${result.title}${result.description}${result.link}\n\n`;
        });
    reply(message)
 } else {
reply('Tidak Ada Hasil.');
}
}
break

case 'malaymail':{
    reply('_Mencari berita terkini di Malay Mail_');

    try {
        const { data } = await axios.get('https://www.malaymail.com/');
        const $ = cheerio.load(data);

        const newsItems = [];
        $('.article-title a').each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr('href');
            newsItems.push({ title, link });
        });

        if (newsItems.length === 0) {
            throw new Error('Gada Berita Baru');
        }

        let beritaText = 'Berita Terkini dari Malay Mail:\n\n';
        newsItems.forEach((item, index) => {
            beritaText += `${index + 1}. ${item.title}\n`;
            beritaText += `Link: ${item.link}\n\n`;
        });

        reply(beritaText);
    } catch (error) {
        reply(`${error.message}`);
    }
}
break;

case 'vietnamnews':{
    reply('_Mencari berita terkini di Vietnam News..._'); 
    try {
        const { data } = await axios.get('https://vietnamnews.vn/');
        const $ = cheerio.load(data);
        const newsItems = [];
        $('h3 a').each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr('href');
            if (title && link) {
                newsItems.push({ title, link: `${link}` });
            }
        });
        if (newsItems.length === 0) {
            throw new Error('Tidak ad..');
        }
        let beritaText = 'Berita Terkini dari Vietnam News:\n\n';
        newsItems.forEach((item, index) => {
            beritaText += `${index + 1}. ${item.title}\n`;
            beritaText += `Link: ${item.link}\n\n`;
        });        
        reply(beritaText);
    } catch (error) {
        reply(`Error: ${error.message}`);
    }
}
break;

case 'kontan':{
if (!q) return reply(`_cari berita apa_`)
const axios = require('axios');
const cheerio = require('cheerio');
async function avzzzzz(text, m) {
    const maxRetries = 3;
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const { data } = await axios.get(`https://www.kontan.co.id/search?search=${encodeURIComponent(text)}`, {
                timeout: 2000,
            });

            const $ = cheerio.load(data);
            const results = [];

            $('.list-berita ul li').each((index, element) => {
                const titleElement = $(element).find('h1 a');
                const title = titleElement.text().trim();
                const link = titleElement.attr('href');

                if (title && link) {
                    results.push({ title, link: `https:${link}` });
                }
            });

            if (results.length > 0) {
                let message = 'Hasil pencarian:\n\n';
                results.forEach((result, index) => {
                    message += `${index + 1}. ${result.title}\n${result.link}\n\n`;
                });
                reply(message);
            } else {
                reply('Tidak Ada Hasil.');
            }

            return;
        } catch (error) {
            attempts++;
            if (attempts >= maxRetries) {
                reply(`Error: ${error.message}`);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}
avzzzzz(`${encodeURIComponent(text)}`, m);
}
break

case 'indozone':{
    if (!q) return reply(`_cari berita apa_`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    async function fadami(query, m) {
        const maxRetries = 3;
        let attempts = 0;
        while (attempts < maxRetries) {
            try {
                const { data } = await axios.get(`https://fadami.indozone.id/search?q=${encodeURIComponent(query)}`, {
                    timeout: 2000,
                });
                const $ = cheerio.load(data);
                const results = [];
                $('.latest__item').each((index, element) => {
                    const titleElement = $(element).find('.latest__title a');
                    const title = titleElement.text().trim();
                    const link = titleElement.attr('href');
                    const imgElement = $(element).find('.latest__img img');
                    const imgSrc = imgElement.data('src');
                    
                    if (title && link && imgSrc) {
                        results.push({ title, link: `${link}`, imgSrc });
                    }
                });
                if (results.length > 0) {
                    let message = 'Hasil pencarian:\n\n';
                    results.forEach((result, index) => {
                        message += `${index + 1}. ${result.title}\nLink: ${result.link}\nJpg: ${result.imgSrc}\n\n`;
                    });
                    reply(message);
                } else {
                    reply('Tidak Ada Hasil.');
                }
                return;
            } catch (error) {
                attempts++;
                if (attempts >= maxRetries) {
                    reply(`Error: ${error.message}`);
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }
    fadami(q, m);
}
break
//————————————————————————//
// GAME FITUR

case 'joinrpg': {
if (isJoin) return reply(`Sudah Join`)

let monaynya = 1000
db.data.users[m.sender].money += monaynya
let anuanu = `*Successfully Joining Rpg*

🧾 *Information / Rules*
tidak boleh curang saat memainkan game, jika ada bug laporkan ke own/mod 

🎁 *Reward*
kamu mendapatkan bahan untuk memulai rpg cek di .inv`
                veri = m.sender
                if (!m.isGroup) {
                    addJoinUser(m.sender)
    nova.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false, 
        title: `J O I N I N G  R P G`,
        body: `Successfully`,
        thumbnailUrl: `${global.thumbnail}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
                } else {
                    addJoinUser(m.sender)
    nova.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false, 
        title: `J O I N I N G  R P G`,
        body: `Successfully`,
        thumbnailUrl: `${global.thumbnail}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
                    }}
		break

case 'gacha': {
let ofsi = args[0]
if (!text) return reply(`Masukan Berapa Key Yang Ingin Di Gunakan, *Example:* .gacha 5`)
if (ofsi === 0) return reply(`Hemmm`)
if (isKey < ofsi) return reply(`Your Key is Insufficient!`)
let h1 = Math.random() >= 1000.50
let hh1 = h1 ? Math.ceil(Math.random() * 100.5) : -h1
let h2 = Math.random() >= 15.2
let hh2 = h2 ? Math.ceil(Math.random() * 8) : -h2
let h3 = Math.random() >= 1000.5
let hh3 = h3 ? Math.ceil(Math.random() * 10) : -h3
let uangnye = Math.ceil(Math.random() * 9000)
kurangKey(m.sender, ofsi)
for (let i of ofsi) {
let caption = `--------------------------------------
乂 *G A C H A  R E S U L T*
-------------------
- Money: ${uangnye}
- ${h1 ? `Limit: ${hh1}` : `Limit: Tidak Mendapatkan`}
- ${h2 ? `Mythic: ${hh2}` : `MythicCreate: Tidak Mendapatkan`}
- ${h3 ? `Uncommon: ${hh3}` : `Uncommon: Tidak Mendapatkan`}
--------------------------------------`
reply(caption)
}
}
break

case 'slot': {
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let betAmount = parseInt(args[0]);
  if (isNaN(betAmount) || betAmount <= 0) return reply(`Example: ${command} 1000`)
  if (isMonay < betAmount) return reply(`Sorry, your balance is not sufficient to make a big bet ${betAmount}`)

  let symbols = ['♣️', '♥️', '♠️', '♦️'];

  let result = [];
  for (let i = 0; i < 3; i++) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    result.push(symbol);
  }

  let win = result[1] === '♥️' && result[0] === '♣️' && result[2] === '♦️';

  let winAmount = win ? betAmount * 5 : 0;


  db.data.users[m.sender].money -= betAmount
  db.data.users[m.sender].money += winAmount
  
  let hoho = `🎰 | SLOTS ]
-------------------
${result.join(' : ')}
-------------------
[  🎰 | SLOTS ]
${win ? 'You win!' : 'You lose'}
${win ? `You won a big bet ${winAmount}` : ''}
Your remaining balance: ${formattedMoneyZ}`
reply(hoho)
}
break
case 'bertarung': case 'petarung': {


if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
  let opponent = m.mentionedJid[0];
  
  if (!opponent) return reply(`*Contoh*: ${command} @user`)
  
  let betAmount = Math.floor(Math.random() * (10000000 - 10000 + 1)) + 10000 
  
  if (isMonay < betAmount) return reply('Balance Anda tidak mencukupi')
  

  
  reply('Mempersiapkan arena...') 
  
  setTimeout(() => {
    reply('Mendapatkan arena...') 
    
    setTimeout(() => {
      reply('Bertarung...')
      
      setTimeout(() => {
        let result = Math.random() >= 0.5 
        let wonAmount = result ? betAmount : -betAmount 
        
        db.data.users[m.sender].money += wonAmount
        db.data.users[opponent].money -= wonAmount
        let caption = `*Hasil pertempuran:*\n\n`
        caption += `Anda Vs @${opponent.split('@')[0]}\n\n`
        
        if (result) {
          caption += `Anda menang! +${betAmount}\n`
          caption += `Balance Anda saat ini: ${formattedMoneyZ}\n`

          nova.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/c8ea156b03131ed613b54.jpg` }, caption: caption })
        } else {
          caption += `Anda kalah! -${betAmount}\n`
          caption += `Balance Anda saat ini: ${formattedMoneyZ}\n`
          nova.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/5e043d7cd784d2bfa5b67.jpg` }, caption: caption, mentions: [opponent] })
        }

        
        setTimeout(() => {
          reply(`Anda dapat bertarung lagi setelah 5 detik`) 
        }, 5000)
      }, 2000)
    }, 2000) 
  }, 2000) 
}
break
case 'merampok': case 'rampok': {
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let user = global.db.data.users[m.sender]
    let __timers = new Date() - (user.lastrampok || 0);
    let _timers = 86400000 - __timers; // 24 hours in milliseconds
    let timers = clockString(_timers);

    if (new Date() - user.lastrampok < 86400000) {
        return reply(`Anda sudah Merampok hari ini. Silakan coba lagi setelah *${timers}*.`);
    }
let uangnye = (Math.floor(Math.random() * 100000))
  let opponent = m.mentionedJid[0];
 
  if (!opponent) return reply(`*Contoh*: ${command} @user`)
  if (opponent.includes('6285781549773')) { return }
let rampokimage = 'https://telegra.ph/file/a72a735a8c53507fb9b1f.jpg'
let rampok = `--------------------------------------
乂 *R A M P O K*
--------------------------------------
-  Uang: ${uangnye}
-  Terampok: ${nova.getName(opponent)}
-  Perampok: ${nova.getName(m.sender)}
--------------------------------------`
let mm = `*❗ Kamu Mengalami Musibah Hari Ini!*
Dirampok Oleh *${nova.getName(m.sender)}*, Uang Terambil ${uangnye}`
nova.sendMessage(opponent, { image: { url: rampokimage }, caption: mm })
nova.sendMessage(m.chat, { image: { url: rampokimage }, caption: rampok })

db.data.users[opponent].money -= uangnye
db.data.users[m.sender].money += uangnye
global.db.data.users[m.sender].lastrampok = new Date()
}
break

case 'dungeon': {
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isSword < 1) return reply(`Kamu Tidak Memiliki Pedang, Beli Lah Pedang Di Toko *.shop buy sword*`)
if (isArmor < 1) return reply(`Kamu Tidak Memiliki Armor , Beli Lah Armor Di Toko *.shop buy armor*`)
let dungeonimg = 'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg'
let rare = Math.random() >= 3.2
let raree = rare ? Math.ceil(Math.random() * 2) : -rare
var uangnye = Math.ceil(Math.random() * 1000)
var diamondnye = Math.ceil(Math.random() * 20)
var darahkurang = Math.ceil(Math.random() * 50)
var ironnye = Math.ceil(Math.random() * 20)
let result = Math.random() >= 10.5 //BIAR ADA KALAH ADA MENANGNYA AOWKWOK
nova.sendMessage(m.chat, {
        text: 'Sedang Memasuki Dungeon..',
        contextInfo: {
        externalAdReply: {
        title: namabot,
        body: wm,
        thumbnailUrl: dungeonimg,
        mediaType: 1,
        renderLargerThumbnail: true
        }}})
        
await sleep(2000)
if (result) {
let caption = `*Ada Monster Yang Menyerang Kamu Tetapi Kamu Menang!!*

*Monster:* ${pickRandom(["PosionIus (Kelangkaan 3%)","Goinus (Kelangkaan 9%)","Zhirkiah (Kelangkaan 15%)","TigerKing (Kelangkaan 20%)","GigaNius (Kelangkaan 50%)","HouMius (Kelangkaan 70%)"])}
乂 *D U N G E O N  R E S U L T*
Wow Keren, Kamu Menang..!!!

-  *Uang:* ${uangnye}
-  *Diamond:* ${diamondnye}
-  *Iron:* ${Ironnye}
-  *Darah:* - ${darahkurang}
-  *Rare:* ${raree ? 'Mythic Create' : 'Gak Dapet'}`
reply(caption)
db.data.users[m.sender].money += uangnye
addDiamond(m.sender, diamondnye)
addIron(m.sender, ironnye)
addCM(m.sender, raree)
kurangDarah(m.sender, darahkurang)
} else {
let caption = `
乂 *D U N G E O N  R E S U L T*
Kamu Mati, Hahahaha Cupu!!

-  *Monster:* Mati Gara Gara ${pickRandom(["PosionIus (Kelangkaan 3%)","Goinus (Kelangkaan 9%)","Zhirkiah (Kelangkaan 15%)","TigerKing (Kelangkaan 20%)","GigaNius (Kelangkaan 50%)","HouMius (Kelangkaan 70%)"])}
-  Darah Berkurang: ${darahkurang}`
reply(caption)
kurangDarah(m.sender, darahkurang)
}
}
break
case 'ojek': case 'ngojek': {
            if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`) 
            

let pl = pickRandom(["Ari","Ridan","Zeni","Inem","Dicky","Eni","Ani","Atta","Endong"])
let lm = pickRandom(["Jl. Sikodir/Rw.03,Rt.55","Jl. BibengBobo/Rw.08,Rt.02","Jl. BasoEmam/Rw.05,Rt.01","Jl. UciXyZ/Rw.08,Rt.10"])
    nova.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
await sleep(1000)
    nova.sendMessage(m.chat, {
      react: {
        text: '🛵',
        key: m.key,
      }
    });
reply(`
乂 *R E S U L T  N G O J E K*

 ◦ Mendapatkan Uang ${formattedMoneyZ}
 ◦ Nama Pelanggan ${pl}
 ◦ Alamat Tujuan ${lm}
`)
}                    
break
            case 'mancing': case 'memancing': {
                        if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`) 
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return reply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
kurangBar(m.sender, 90)
let mancing = ["Sungai🏞️","Rawa🐊","Laut🌊"]
var mancing1 = mancing[Math.floor(Math.random() * mancing.length)]
let mampus = ["Digigit Ular🐍️","Tercakar Buaya🐊","Tersandung","Digigit Hewan Buas🐆","Terpeleset Kejurang"]
var mampus1 = mampus[Math.floor(Math.random() * mampus.length)]


 if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)
if (isCekDarah < 1) return reply(`Darahmu Habis`) 
reply(`Mulai Memancing... 🎣`)
await sleep(3000)
var ikanmu1 = Math.ceil(Math.random() * 10)
let monaynya = 2000 * isCmd
db.data.users[m.sender].money += monaynya
kurangDarah(m.sender, 40)
global.db.data[m.sender].ikan += ikanmu1
let anu =`
乂 *R E S U L T  M A N C I N G*

-  🏞️ Tempat : ${mancing1}
-  ☠️ Terkena : ${mampus1}
 「 🐟 ${getIkan(m.sender)} 」
`
           
nova.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `M A N C I N G - R E S U L T`,
        body: `${global.wm}`,
        thumbnailUrl: "https://telegra.ph/file/4d961120c79b35eab736a.jpg",
        sourceUrl: "https://chat.whatsapp.com/LNYpG8Jq0JU6F8QJBGMa8I",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
            }
            break
            case 'cheat': {
if (!isDev) return onlyOwner()
let input = args[0]            
if (!input) return reply(`
--------------------------------------
乂 *C H E A T*
--------------------------------------
Command Input
--------------------------------------
- ${command} limit          
- ${command} exp
- ${command} balance
- ${command} level
--------------------------------------
*Example: ${command} balance*`)
if (input === 'limit') {
db.data.users[m.sender].limit += 1000000000000
reply(`Succesfully Cheat Your Limit`)
} else if (input === 'balance') {
db.data.users[m.sender].money += 1000000000000
reply(`Succesfully Cheat Your Balance`)
} else if (input === 'level') {
db.data.users[m.sender].level += 100
reply(`Succesfully Cheat Your Level`)
} if (input === 'exp') {
db.data.users[m.sender].exp += 10000
reply(`Succesfully Cheat Your Exp`)
}
}
break
            break

            case 'kerja': {
            if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)


if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return reply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
let uangnye = Math.ceil(Math.random() * 99999)
if (!q) return reply(`
--------------------------------------
乂 *L I S T - K E R J A*
--------------------------------------
- 🛵 Ojek 
- 🥗 Pedagang 
- 🏥 ️Dokter 
- 🌾 Petani 
- 🏯 Montir 
- ⚒️ Kuli
--------------------------------------
*Example: ${command} ojek*`)
var anu1 = args[1]
if (args[0] === 'dokter'){
db.data.users[m.sender].money += uangnye
reply(`Kamu menyembuhkan pasien *cedera* 💉
Dan mendapatkan uang senilai *Rp ${uangnye}* 💹`)
} else if (args[0] === 'ojek') {
db.data.users[m.sender].money += uangnye
kurangBar(m.sender, 50)
reply(`
Kamu Mendapatkan Pelanggan 👤, Dan Mengantarkan *Pelanggan* Ke Tempat *Tujuan ✅* Di Bayar *Rp ${uangnye}*`)
} else if (args[0] === 'pedagang') {
let jualan = ["Sayuran🥔","Makanan🧇","Minuman🥂"]
let jualannye = jualan[Math.floor(Math.random() * jualan.length)]
kurangBar(m.sender, 60)
db.data.users[m.sender].money += uangnye
reply(`
Kamu Menjual *${jualannye}* Dan Mendapatkan 1 *Pembeli* , Hasil *Rp ${uangnye}*`)
} else if (args[0] === 'petani') {
db.data.users[m.sender].money += uangnye
kurangBar(m.sender, 80)
let buahan = ["Apel 🍎","Stroberi 🍓","Mangga 🥭","Semangka 🍉","Jeruk 🍊","Melon 🍈"]
let buahannye = buahan[Math.floor(Math.random() * buahan.length)]
reply(`
Kebun ${buahannye} Siap Untuk *Dipanen* ,Menjual Hasil Buah ${buahannye} Kek Pembeli Mendapatkan Uang *Rp ${uangnye}*`)
} else if (args[0] === 'montir') {
let kenapa = ["Ganti Oli","Ban Bocor","Motor Kebelah 2","Ganti Lampu","Rem Blong"]
kurangBar(m.sender, 60)
let kenapatuh = kenapa[Math.floor(Math.random() * kenapa.length)]
db.data.users[m.sender].money += uangnye
reply(`Pembeli ${kenapatuh} , Mulai Memperbaiki/Mengerjakan Dan Mendapatkan Uang *Rp ${uangnye}*`)
} else if (args[0] === 'kuli') {
db.data.users[m.sender].money += uangnye
reply(`Memperbaiki Rumah ⚒️, Dan Mendapatkan Uang *Rp ${uangnye}*`)
}
}
break

case 'inventori': case 'inventory': case 'inv': case 'profile': case 'invent': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
try {
let user = global.db.data.users[m.sender]
let teks = `乂 *S T A T S*\n`
teks += `[ ❣️ ] Your Blood : ${getDarah(m.sender)}\n`
teks += `[ 💲 ] Your Money : ${formattedMoneyZ}\n`
teks += `[ ⛓️ ] Your Iron: ${getBesi(m.sender)}\n`
teks += `[ 🌟️ ] Your Gold: ${getEmas(m.sender)}\n`
teks += `[ 💠 ] Your Emerald: ${getEmerald(m.sender)}\n`
teks += `[ 🧪 ] Your Potion: ${getPotion(m.sender)}\n\n`
teks += `乂 *H U N T I N G*\n`
teks += `[ 🐟 ] Fish: ${getIkan(m.sender)}\n`
teks += `[ 🐔 ] Chicken: ${getAyam(m.sender)}\n`
teks += `[ 🐇 ] Rabbit: ${getKelinci(m.sender)}\n`
teks += `[ 🐑 ] Sheep: ${getDomba(m.sender)}\n`
teks += `[ 🐄 ] Cow: ${getSapi(m.sender)}\n`
teks += `[ 🐘 ] Elephant: ${getGajah(m.sender)}\n\n`
teks += `乂 *K A R U N G*\n`
teks += `[ 🧴 ] Botol: ${getBotol(m.sender)}\n`
teks += `[ 📦 ] Kardus: ${getKardus(m.sender)}\n`
teks += `[ 🥫 ] Kaleng: ${getKaleng(m.sender)}\n\n`
teks += `乂 *E A T - S T O R A G E*\n`
teks += `[ 🍖 ] Bar Kelaparan Kamu: ${getBar(m.sender)}%\n`
teks += `[ 🍡 ] Sate: ${getSate(m.sender)}\n`
teks += `[ 🐠 ] Ikan Goreng: ${getGoreng(m.sender)}\n`
teks += `[ 🍲 ] Sop Sapi: ${getSop(m.sender)}\n`
teks += `[ 🥩 ] Steak: ${getSteak(m.sender)}\n\n`
teks += `乂 *F A C I L I T Y*\n`
teks += `[ 🏘 ]️ Rumah: ${getRumah(m.sender)}\n`
teks += `[ 🌾 ] Pertanian: ${getPertanian(m.sender)}\n\n`
teks += `乂 *B U I L D - I T E M*\n`
teks += `[ 🌳 ] Kayu: ${getKayu(m.sender)}\n`
teks += `[ 🗿 ] Batu: ${getBatu(m.sender)}\n`
teks += `[ 🏗 ]️️ Semen: ${getSemen(m.sender)} Karung\n`
teks += `[ 🏗 ] ️Pasir: ${getPasir(m.sender)} Karung\n\n`
teks += `乂 *P E T*\n`
teks += `[ 🐱 ] Kucing: ${getKucing(m.sender)}\n`
teks += `[ 🐕 ] Anjing: ${getAnjing(m.sender)}\n`
teks += `[ 🐉 ] Naga: ${getNaga(m.sender)}\n`
teks += `[ 🦊 ] Kyubi: ${getKyubi(m.sender)}\n\n`
teks += `乂 *C R E A T E*\n`
teks += `[ 📦 ] Legendary: ${getCL(m.sender)}\n`
teks += `[ 📦 ] Mythic: ${getCM(m.sender)}\n`
teks += `[ 📦 ] Uncommon: ${getCU(m.sender)}\n\n  `
teks += `乂 *R A N D O M - I T E M*\n`
teks += `[ 🗡️ ] Sword: ${getSword(m.sender)}\n`
teks += `[ 👕 ] Armor: ${getArmor(m.sender)}\n`
teks += `[ 🔑 ] Key/Gacha: ${getKey(m.sender)}\n\n`
teks += `         Hams - Offc           `
nova.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `Inventory `,
        body: "Information..",
        thumbnailUrl: "https://img100.pixhost.to/images/106/533172682_ham-bot.jpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
} catch (err) {
reply(`Mungkin Dilain Waktu Saja`)
}
}
break

case 'makan': {
let ga = args[0]
let ga1 = args[1]
let user = global.db.data.users[m.sender]
switch (ga) {
case 'ikan_goreng': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.ikang < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 50
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
user.ikang -= ga1
break
case 'ayam_goreng': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.ayamg < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 80
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
user.ayamg -= ga1
break
case 'sate': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.sate < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 40
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
user.sate -= ga1
break
case 'mie': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.mie < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 90
user.mie -= ga1
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
break
case 'sop_sapi': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.sops < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 100
user.sops -= ga1
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
break


default: 
reply(`乂 *F O O D  I N V E N T O R Y*

∘ *Ikan Goreng:* ${user.ikang}
∘ *Ayam Goreng:* ${user.ayamg}
∘ *Sate:* ${user.sate}
∘ *Mie:* ${user.mie}
∘ *Sop Sapi:* ${user.sops}`)
}
}
break

case 'memasak': {
let ga = args[0]
let ga1 = args[1]
let user = global.db.data.users[m.sender]
switch (ga) {
case 'sate':
if (!ga1) return reply(`Berapa Ayam Yang Ingin Kamu Masak?`)
if (user.ayam < ga1) return reply(`Ayam Kamu Kurang`)
user.sate += ga1
user.ayam -= ga1
reply(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
break
case 'ayam':
if (!ga1) return reply(`Berapa ${ga} Yang Ingin Kamu Masak?`)
if (user.ayam < ga1) return reply(`${ga} Kamu Kurang`)
user.ayamg += ga1
user.ayam -= ga1
reply(`Berhasil Membuat ${ga} Goreng Untuk Memakannya Silahkan Ketik .makan`)
break
case 'ikan':
if (!ga1) return reply(`Berapa ${ga} Yang Ingin Kamu Masak?`)
if (user.ikan < ga1) return reply(`${ga} Kamu Kurang`)
user.ikang += ga1
user.ikan -= ga1
reply(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
break
case 'sop_sapi':
if (!ga1) return reply(`Berapa ${ga} Yang Ingin Kamu Masak?`)
if (user.sapi < ga1) return reply(`Sapi Kamu Kurang`)
user.sops += ga1
user.sapi -= ga1
reply(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
break

case 'mie':
if (!ga1) return reply(`Berapa ${ga} Yang Ingin Kamu Masak?`)
if (user.miem < ga1) return reply(`${ga} Kamu Kurang`)
user.mie += ga1
user.miem -= ga1
reply(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
break

default: 
reply(`*Penggunaan:* ${command} ikan/sapi/sate/mie/sop_sapi 6`)

}
}
break

case  'mining': case 'mine':{
                    if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekDarah < 1) return reply(`Kamu Harus Tidur , Kamu Lelah *.tidur* Jika Kamu Mempunyai Rumah, Atau *.heal* Jika Kamu Mempunyai Potion`)
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return reply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
kurangBar(m.sender, 80)
try {
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
let batu = [10,11,15,18,5,8,1]
var batunya = batu[Math.floor(Math.random() * batu.length)]
var besinya = besi[Math.floor(Math.random() * besi.length)]  
var emasnya = emas[Math.floor(Math.random() * emas.length)]  
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
reply(`${m.sender.split("@")[0]} Started Mining⛏️`)
await sleep(10000)
reply(`--------------------------------------
乂 *M I N I N G  R E S U L T*
--------------------------------------
- Batu: ${batunya}
- Emerald: ${emeraldnya}
- Besi: ${besinya}
- Emas: ${emasnya}
--------------------------------------`)
await sleep(1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sender, emasnya)
addEmerald(m.sender, emeraldnya)
addBatu(m.sender, batunya)
} catch (err) {
reply(`Mungkin Dilain Waktu Saja`)
console.error(err)
}
}   
break

case 'bansos': case 'korupsi': {
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let uangnye = Math.floor(Math.random() * (100000000 - 100000 + 1) + 100000)
let userbansosCooldown = Date.now() + 3600000
  let successImage = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/korupsi.jpeg'
  let failureImage = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/menolak_korupsi.jpg'
  let successMessage = `Congratulations you have invited your friends to corruption and you get *${uangnye}* Balance`
  let failureMessage = `Sorry, your friend refuses to be corrupted, your friend complains and you are fined for *${uangnye}* Balance`
  let waitMessage = 'You have corrupted today, wait another hour and then commit corruption again.'
   if (new Date - global.db.data.users[m.sender].bansos < 3600000) return reply(waitMessage)
  let target = m.mentionedJid[0]
  if (!target) return reply(`*Example*: ${prefix}bansos @friend`)
let result = Math.random() >= 0.8
if (result) {
nova.sendMessage(m.chat, { image: { url: successImage }, caption: successMessage })
} else {
nova.sendMessage(m.chat, { image: { url: failureImage }, caption: failureMessage })
}
global.db.data.users[m.sender].bansos = new Date * 1
}
break

case 'tf': case 'bagikan': {
function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '');
  }
let whoin = args[0]
let item = args[1]
let amount = args[2]
let who = no(whoin) + "@s.whatsapp.net";  
if (!whoin) return reply(`Masukan Nomer Atau Tag Pengguna`)
switch (item) {
case 'uang': 
let uangwho = global.db.data.users[who].money
let uangyou = global.db.data.users[m.sender].money
if (uangyou < amount) return reply(`${item} Kamu Tidak Cukup!`)
uangyou -= amount
uangwho += amount
reply(`Berhasil Mentransfer ${item} Sebesar *${amount}`)
break

default: 
reply(`*Silahkan Ikuti Format Ini:* ${command} <tag/nomer> <uang> <jumlah>`)
}
}
break

case 'membunuh': case 'bunuh': {
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let monaynye = Math.ceil(Math.random() * 2000)
let darahnye = Math.ceil(Math.random() * 30)
let time = global.db.data.users[m.sender].bunuh + 20000
 if (new Date - global.db.data.users[m.sender].bunuh < 20000) return reply(`Kamu Masih Dicari Oleh Polisi, Jangan Ngebunuh Orang Dulu!`)
let who = m.mentionedJid[0]
if (!who) return reply(`Tag User Yang Mau Di Bunuh!`)
let caption = `@${who.split('@')[0]} Terbaring Lemah Karna Kamu Tendang Dia Sampe Terjungkal 😪\n
ᴋᴀᴍᴜ ᴍᴇɴɢᴀᴍʙɪʟ ᴜᴀɴɢ ᴅɪᴀ ʙᴇʀᴊᴜᴍʟᴀʜ ${monaynye}
darah @${who.split('@')[0]} Berkurang -${darahnye}`
nova.sendMessage(m.chat, {
						  text: caption,
						  contextInfo: {
							mentionedJid: [who],
							externalAdReply: {
							  title: `Nova - Gen 2`,
							  thumbnailUrl: global.thumbnail,
							  sourceUrl: sig,
							  mediaType: 1,
							  renderLargerThumbnail: true
							}
						  }
						});
db.data.users[m.sender].money += monaynye
db.data.users[who].money -= monaynye
kurangDarah(who, darahnye)
global.db.data.users[m.sender].bunuh = new Date * 1
}
break

case 'kandang': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)
let user = global.db.data.users[m.sender]
reply(`--------------------------------------
乂 *K A N D A N G*
--------------------------------------
-  • Ikan: ${user.ikan || 0} Ekor
-  • Ayam: ${user.ayam || 0} Ekor
-  • Kelinci: ${user.kelinci || 0} Ekor
-  • Domba: ${user.domba || 0} Ekor
-  • Sapi: ${user.sapi || 0} Ekor
-  • Gajah: ${user.gajah || 0} Ekor
--------------------------------------`)
}
break
case 'mulung': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)
const timeout = 1800000
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 


let time = global.db.data.users[m.sender].lastmulung + 1800000
  if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) return reply(`Kamu Sudah Lelah\nTunggu Selama ${msToTime(time - new Date())} Lagi`)
reply(`*Wait For Minute.*`)
await sleep(1000)
var botolnye = Math.ceil(Math.random() * 800)
var kardusnye = Math.ceil(Math.random() * 700)
var kalengnye = Math.ceil(Math.random() * 500)
addBotol(m.sender, botolnye)
addKardus(m.sender, kardusnye)
addKaleng(m.sender, kalengnye)
global.db.data.users[m.sender].lastmulung = new Date * 1
reply(`乂 *M U L U N G  R E S U L T*
+${getBotol(m.sender)} Botol
+${getKaleng(m.sender)} Kaleng
+${getKardus(m.sender)} Kardus`)
setTimeout(() => {
					nova.sendMessage(m.chat, { text: `Yuk Waktunya Mulung Lagi…`, m})
					}, timeout)
}
break
case 'sell': case 'jual':{
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)
if (!q) return reply(`Contoh : ${prefix + command} fish/chicken/rabbit/sheep/cow/elephant/iron/gold/emerald/botol/kardus/kaleng`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
try {
let users = global.db.data.users[m.sender]
var anu3 = args[1]
if (args[0] === 'fish'){
if (isIkan < anu3) return reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
kurangIkan(m.sender, anu3)
let monaynya = 1500 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Ikanmu* : ${getIkan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
if (!args[1]) return reply(`Contoh : ${prefix + command} limit 200\n 100 limit = 5000 Money`)
    users[m.sender].limit -= anu3;
    let monaynya = 5000 * anu3
db.data.users[m.sender].money += monaynya
    reply(`Berhasil menjual Limit, Uang Mu ${formattedMoneyZ}`)
  } else
if (args[0] === 'botol'){
if (isBotol < anu3) return reply(`Anda Tidak Memiliki Cukup Botol Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} botol 2\n 1 botol = 1000 Money`)
kurangBotol(m.sender, anu3)
let monaynya = 1000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Botol Mu* : ${getBotol(m.sender)}`)
}, 2000)
} else if (args[0] === 'kardus'){
if (isKardus < anu3) return reply(`Anda Tidak Memiliki Cukup Kardus Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} Kardus 2\n 1 botol = 1000 Money`)
kurangKardus(m.sender, anu3)
let monaynya = 1000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Kardus Mu* : ${getBotol(m.sender)}`)
}, 2000) 
} else if (args[0] === 'kaleng'){
if (isKaleng < anu3) return reply(`Anda Tidak Memiliki Cukup Kaleng Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} kaleng 2\n 1 botol = 1000 Money`)
kurangKaleng(m.sender, anu3)
let monaynya = 1000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Kaleng Mu* : ${getBotol(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'chicken'){
if (isAyam < anu3) return reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
kurangAyam(m.sender, anu3)
let monaynya = 2500 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Ayammu* : ${getAyam(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'rabbit'){
if (isKelinci < anu3) return reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
kurangKelinci(m.sender, anu3)
let monaynya = 3000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Kelincimu* : ${getKelinci(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'sheep'){
if (isDomba < anu3) return reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
kurangDomba(m.sender, anu3)
let monaynya = 5000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Dombamu* : ${getDomba(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'cow'){
if (isSapi < anu3) return reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
kurangSapi(m.sender, anu3)
let monaynya = 10000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Sapimu* : ${getSapi(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'elephant'){
if (isGajah < anu3) return reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
kurangGajah(m.sender, anu3)
let monaynya = 15000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Gajahmu* : ${getGajah(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'iron'){
if (isBesi < anu3) return reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 16000 Money`)
kurangBesi(m.sender, anu3)
let monaynya = 16000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Besimu* : ${getBesi(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'gold'){
if (isEmas < anu3) return reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
kurangEmas(m.sender, anu3)
let monaynya = 50000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Emasmu* : ${getEmas(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'emerald'){
if (isEmerald < anu3) return reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
kurangEmerald(m.sender, anu3)
let monaynya = 100000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Zamrudmu* : ${getEmerald(m.sender)}`)
}, 2000) 
} else { reply("Format Salah") }
} catch (err) {
reply(err)
}
}
break

case 'heal': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)
if (isCekDarah > 100) return reply('Darahmu Penuh')
if (isPotion < 1) return reply(`Anda Tidak Punya Potion, Coba Beli Dengan Cara Ini #shop buy potion jumlah`) 
try {
addDarah(m.sender, 100)
kurangPotion(m.sender, 1)
reply(`Sukses`)
} catch (err) {
reply(mess.error)
}
}
break

case 'hunt': case 'hunting': case 'berburu': case 'memburu': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)

if (isCekDarah < 1) return reply('Darahmu Habis, Coba Sembuhkan Menggunakan Option, Atau *.tidur* Jika Kamu Mempunyai Rumah') 
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return reply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
let luka = ["Ditusuk Duri Saat Berburu","Tergelincir ke dalam jurang saat berburu","Digaruk oleh binatang buas","Kurang teliti","Terjerat akar","Jatuh saat berburu"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
await sleep(5000)
let teks = `乂 *H U N T  R E S U L T*\n`
teks += `*-  🐟Fish* : ${ikanmu}\n`
teks += `*-  🐔Chicken* : ${ayam}\n`
teks += `*-  🐇Rabbit* : ${kelinci}\n`
teks += `*-  🐑Sheep* : ${domba}\n`
teks += `*-  🐄Cow* : ${sapi}\n`
teks += `*-   🐘Elephant* : ${gajah}\n\n`
teks += `乂 *I N F O R M A T I O N*\n`
teks += `*-  Location* : ${lokasinya}\n`
teks += `*-  Wounded* : ${lukanya}, blood - 10\n`
teks += `*-  Remaining blood* : ${getDarah(m.sender)}\n`
reply(teks)
await sleep(1000)
nova.sendMessage(m.chat, { text: `Lokasi Terakhir Kamu @${m.sender.split('@')[0]} Di ${lokasinya}`, mentions: [m.sender] }, { quoted: fkontak })
global.db.data.users[m.sender].ikan += ikanmu
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
kurangBar(m.sender, 90)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
kurangDarah(m.sender, 10)
}
break

case 'claim':
case 'daily':{
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`) 
const free = 100
const prem = 1000
const moneyfree = 5000
const moneyprem = 1000
const timeout = 86400000
let time = global.db.data.users[m.sender].lastclaim + 86400000
 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return reply( `Anda sudah mengklaim, klaim harian hari ini`)
 global.db.data.users[m.sender].limit += isDev ? prem : free
 global.db.data.users[m.sender].balance += isDev ? moneyprem : moneyfree
reply(`Selamat kamu mendapatkan:\n\n+${isDev? prem : free} limit\n+${isDev? moneyprem : moneyfree} Balance`)
global.db.data.users[m.sender].lastclaim = new Date * 1
} 
break

            case 'openbo': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`) 
let booking = ["aris","ridan","rizky","fauzan","fadli","faisal","fajar","arif","adit"]
var booking1 = booking[Math.floor(Math.random() * booking.length)]
let tempat = ["Oyo","Rumah","Kosan"]
var tempat1 = tempat[Math.floor(Math.random() * tempat.length)]


 if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`)
if (isCekDarah < 1) return reply(`Kamu Kelelahan..`)      
let user = global.db.data.users[m.sender]
    let __timers = new Date() - (user.lastrampok || 0);
    let _timers = 86400000 - __timers; // 24 hours in milliseconds
    let timers = clockString(_timers);

    if (new Date() - user.lastngww < 86400000) {
        return reply(`*Udah Dong Memek Kamu Udah Lemes Tuh! Tunggu Sekitar:*  *${timers}*.`);
    }      
let { key } = await nova.sendMessage(m.chat, { text: 'Mencari Pelanggan.!' }, { quoted: fkontak })
let NgeText = `--------------------------------------
乂 *S K I D I P A P - R E S U L T*
--------------------------------------
-  Uang: ${formattedMoneyZ}
-  Lokasi: ${tempat1}
-  Pelanggan: ${booking1}
--------------------------------------`
await sleep(900)
nova.sendMessage(m.chat, { text: `Mendapatkan Pelanggan Bernama ${booking1}`, edit: key }, { quoted: fkontak })
await sleep(1000)
nova.sendMessage(m.chat, { text: `Tempat Di ${tempat1}`, edit: key }, { quoted: fkontak })
await sleep(1000)
nova.sendMessage(m.chat, { text: 'Memulai.!', edit: key }, { quoted: fkontak })
await sleep(900)
nova.sendMessage(m.chat, { text: 'Ah Ah Ah Iyahh', edit: key }, { quoted: fkontak })
await sleep(900)
nova.sendMessage(m.chat, { text: 'Ah AHHH Ah !! Ah Crot 💦', edit: key }, { quoted: fkontak })
await sleep(900)
nova.sendMessage(m.chat, { text: NgeText, edit: key }, { quoted: fkontak })
global.db.data.users[m.sender].money += 200
global.db.data.users[m.sender].lastngww = new Date()
}
break

case 'open': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`) 
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (!text) return reply(`*Use:* ${command} uncommon/legendary/mythic 10/100/1000 hanya support  sampe 10/100/1000 saja`)
let create = args[0]
let jumlah = args[1]
    let Lmao = `Hanya support 10, 100, 1000\nContoh penggunaan: *${prefix}open ${args > 2 ? args[0] : pickRandom(['uncommon', 'mythic', 'legendary'])} 10*`
switch (create) {
case 'uncommon':
switch (jumlah) {
case '10': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${create} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cu >= 10) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${create} crate anda tidak cukup`)
                    }
                    break
case '100': {
                    let _cm1 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce1 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm1 = (_cm1 * 1)
                    let cc1 = (_cc1 * 1)
                    let cp1 = (_cp1 * 1)
                    let ce1 = (_ce1 * 1)
                    let cu1 = (_cu1 * 1)
                    let Hcom = `
Anda telah membuka *📦${create} crate* dan mendapatkan:${cm1 > 0 ? `\n💵balance: ${cm1}` : ''}${ce1 > 0 ? `\n⚜️Exp: ${ce1} *exp*` : ''}${cp1 > 0 ? `\n🥤Potion: ${cp1} *potion*` : ''}${cu1 > 0 ? `\n📦Uncommon crate: ${cu1} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cu >= 100) {
                        global.db.data.users[m.sender].balance += cm1 * 1
                        global.db.data.users[m.sender].exp += ce1 * 1
                        global.db.data.users[m.sender].potion += cp1 * 1
                        global.db.data.users[m.sender].cu += cu1 * 1
                        reply(Hcom)
                    } else reply(`📦${create} crate anda tidak cukup`)
                    }
                    break
                    case '1000': {
                                        let _cm2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc2 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp2 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce2 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu2 = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm2 = (_cm2 * 1)
                    let cc2 = (_cc2 * 1)
                    let cp2 = (_cp2 * 1)
                    let ce2 = (_ce2 * 1)
                    let cu2 = (_cu2 * 1)
                    let Hcom = `
Anda telah membuka *📦${create} crate* dan mendapatkan:${cm2 > 0 ? `\n💵balance: ${cm2}` : ''}${ce2 > 0 ? `\n⚜️Exp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\n🥤Potion: ${cp2} *potion*` : ''}${cu2 > 0 ? `\n📦Uncommon crate: ${cu2} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cu >= 1000) {   
                        global.db.data.users[m.sender].balance += cm2 * 1
                        global.db.data.users[m.sender].exp += ce2 * 1
                        global.db.data.users[m.sender].potion += cp2 * 1
                        global.db.data.users[m.sender].cu += cu2 * 1
                        reply(Hcom)
                    } else reply(`📦${create} crate anda tidak cukup`)
                    }
                    break
default:
return reply(Lmao)
            }
case 'mythic':
if (!jumlah) return reply(`Masukan Jumlah 10/100/1000`)
switch (jumlah) {
case '10': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${create} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cm >= 10) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${create} crate anda tidak cukup`)
                    }
                    break
case '100': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${create} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cm >= 100) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${create} crate anda tidak cukup`)
                    }
                    break
                    case '1000': {
                                        let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${create} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cm >= 1000) {   
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${create} crate anda tidak cukup`)
                    }
                    break
default:
return reply(Lmao)
            }                 
case 'legendary':
if (!jumlah) return reply(`Masukan Jumlah 10/100/1000`)
switch (jumlah) {
case '10': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${create} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cl >= 10) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${create} crate anda tidak cukup`)
                    }
                    break
case '100': {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${create} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cl >= 100) {
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${create} crate anda tidak cukup`)
                    }
                    break
                    case '1000': {
                                        let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *📦${create} crate* dan mendapatkan:${cm > 0 ? `\n💵balance: ${cm}` : ''}${ce > 0 ? `\n⚜️Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🥤Potion: ${cp} *potion*` : ''}${cu > 0 ? `\n📦Uncommon crate: ${cu} *crate*` : ''}
`.trim()
if (global.db.data.users[m.sender].cl >= 1000) {   
                        global.db.data.users[m.sender].balance += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].cu += cu * 1
                        reply(Hcom)
                    } else reply(`📦${create} crate anda tidak cukup`)
                    }
                    break
default:
return reply(Lmao)
            }
default:
                    return reply(Lmao)
            }
            }
break
case 'pet': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`) 
reply(`乂 *P E T  - Y O U*

Kucing : ${getKucing(m.sender)}
Anjing : ${getAnjing(m.sender)}
Naga: ${getNaga(m.sender)}
Kyubi: ${getKyubi(m.sender)}`)
}
break
case 'shop': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`) 
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }

if (!args[0]) {
reply(`乂 *S H O P - N E E D S*

> Potion | Harga $1000
> Kayu | Harga $1000
> Batu | Harga $1000
> Pasir | Harga $4000
> Semen | Harga $8000

> Kucing | Harga $3000
> Anjing | Harga $6000
> Kyubi | Harga $99999
> Naga | Harga $5000
> fpet < Makanan Hewan > | $1000

> uncommon | Harga $5000
> mythic | Harga $3000
> legendary | Harga $2000

> sopsapi | Harga $2000
> ikangoreng | Harga $3000
> steak | Harga $5000
> Sate | Harga $1000

> key | Harga $2000

> Sword | Harga $5000
> Armor | Harga $3000

*Ex:* .shop buy potion 5`)
} else if (args[0] === 'buy') {
if (args[1] === 'potion') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addPotion(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Potion Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'kayu') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addKayu(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Kayu Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'batu') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addBatu(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Batu Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'kucing') {
if (isKucing > 1) return reply(`Max Pet Kucing 1`)
let harga = 3000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)

db.data.users[m.sender].kucing += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pet Kucing , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'anjing') {
if (isAnjing > 1) return reply(`Max Pet Anjing 1`)
let harga = 6000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
db.data.users[m.sender].anjing += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pet anjing , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'uncommon') {
let harga = 5000 * args[2]
let input = args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addCU(m.sender, input)
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Create uncommon, Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'mythic') {
let harga = 3000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addCM(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Create Mythic, Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'legendary') {
let harga = 2000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addCL(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Create Legendary, Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'naga') {
if (isNaga > 1) return reply(`Max Pet Naga 1`)
let harga = 5000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
db.data.users[m.sender].naga += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pet Naga , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'kyubi') {
if (isNaga > 1) return reply(`Max Pet Kyubi 1`)
let harga = 99999 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
db.data.users[m.sender].kyubi += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pet Kyubi , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'fpet') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
db.data.users[m.sender].feedpet += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Makanan Pet , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'pasir') {
let harga = 4000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addPasir(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pasir Sekarung , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'semen') {
let harga = 8000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addSemen(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Semen Sekarung , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'sate') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addSate(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Sate , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'ikangoreng') {
let harga = 3000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addGoreng(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Ikan Goreng , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'steak') {
let harga = 5000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addSteak(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Steak, Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'sopsapi') {
let harga = 2000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
global.db.data.users[m.sender].sops += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Sop Sapi , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'sword') {
let harga = 5000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addSword(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Sword Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'armor') {
let harga = 3000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addArmor(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Armor Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'key') {
let harga = 2000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addKey(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Key Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
}
}
}
break
case 'gajian': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`) 
function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let LastClaim = global.db.data.users[m.sender].lastclaim
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(44 - cdm)
let cd2 = Math.ceil(59 - cds)
  if (new Date - global.db.data.users[m.sender].lastclaim > 2700000) {
addMonay(m.sender, 7000)
    reply('Nih Gaji Kamu +Rp7000')
    global.db.data.users[m.sender].lastclaim = new Date * 1
  } else return reply(`Kamu Udah Ambil Jatah Hari Ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
  }
  break
case 'leaderboard': case 'lb': {
if (!isJoin) return reply(`Hello, it looks like you have never joined Rpg, to be able to use this feature, please type *.joinrpg* Thank you 😄`) 
function toNumber(property, _default = 0) {

  if (property) return (a, i, b) => {

    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }

  }

  else return a => a === undefined ? _default : a

}

function sort(property, ascending = true) {

  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]

  else return (...args) => args[ascending & 1] - args[!ascending & 1]

}

function enumGetKey(a) {

  return a.jid

}
if (!m.isGroup) return reply(mess.group)
let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let usersMoney = sortedMoney.map(enumGetKey)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedMoney.length)
  let textnua = `
乂 *T O P  L E A D E R B O A R D [ ${len} ]*
 
 🏆 You: *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}*
 
${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${nova.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${money} Money*`).join`\n`}
`.trim()
  nova.sendTextWithMentions(m.chat, textnua, m)
  }
break  
case 'feed': {
let user = global.db.data.users[m.sender]
let type = (args[0] || '').toLowerCase()
switch (type) {
case 'kucing':
if (user.kucing < 1) return reply(`Kamu Tidak Mempunyai ${type}.`)
if (user.kucing > 5) return reply(`Level ${type} Mu Sudah Max`)
if (user.feedpet > 0) {
global.db.data.users[m.sender].feedpet -= 1
global.db.data.users[m.sender].kucingexp += 20
reply(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
if (user.kucing > 0) {
                        let naiklvl = ((user.kucing * 1000) - 1)
                        if (global.db.data.users[m.sender].kucingexp > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].kucingexp -= (user.kucing * 100)
                            reply(`Selamat Pet *${type}* Kamu Naik level.!!`)
                            }
                            } else return reply(`Kamu Tidak Mempunyai Pet`)
                            } else return reply(`Kamu Tidak Mempunyai Makanan Pet`)
break
case 'kyubi':
if (user.kyubi == 0) return reply(`Kamu Tidak Mempunyai ${type}.`)
if (user.kyubi == 5) return reply(`Level ${type} Mu Sudah Max`)
if (user.feedpet > 0) {
global.db.data.users[m.sender].feedpet -= 1
global.db.data.users[m.sender].kyubiexp += 20
reply(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
if (user.kyubi > 0) {
                        let naiklvl = ((user.kyubi * 1000) - 1)
                        if (global.db.data.users[m.sender].kyubiexp > naiklvl) {
                            global.db.data.users[m.sender].kyubi += 1
                            global.db.data.users[m.sender].kyubiexp -= (user.kyubi * 100)
                            reply(`Selamat Pet *${type}* Kamu Naik level.!!`)
                            }
                            } else return reply(`Kamu Tidak Mempunyai Pet`)
                            } else return reply(`Kamu Tidak Mempunyai Makanan Pet`)
break           
case 'naga':
if (user.naga < 1) return reply(`Kamu Tidak Mempunyai ${type}.`)
if (user.naga > 5) return reply(`Level ${type} Mu Sudah Max`)
if (user.feedpet > 0) {
global.db.data.users[m.sender].feedpet -= 1
global.db.data.users[m.sender].nagaexp += 20
reply(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
if (user.naga > 0) {
                        let naiklvl = ((user.naga * 1000) - 1)
                        if (global.db.data.users[m.sender].nagaexp > naiklvl) {
                            global.db.data.users[m.sender].naga += 1
                            global.db.data.users[m.sender].nagaexp -= (user.naga * 100)
                            reply(`Selamat Pet *${type}* Kamu Naik level.!!`)
                            }
                            } else return reply(`Kamu Tidak Mempunyai Pet`)
                            } else return reply(`Kamu Tidak Mempunyai Makanan Pet`)
break                            
case 'anjing':
if (user.anjing < 1) return reply(`Kamu Tidak Mempunyai ${type}.`)
if (user.anjing > 5) return reply(`Level ${type} Mu Sudah Max`)
if (user.feedpet > 0) {
global.db.data.users[m.sender].feedpet -= 1
global.db.data.users[m.sender].anjingexp += 20
reply(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
if (user.anjing > 0) {
                        let naiklvl = ((user.anjing * 1000) - 1)
                        if (global.db.data.users[m.sender].anjingexp > naiklvl) {
                            global.db.data.users[m.sender].anjing += 1
                            global.db.data.users[m.sender].anjingexp -= (user.anjing * 100)
                            reply(`Selamat Pet *${type}* Kamu Naik level.!!`)
                            }
                            } else return reply(`Kamu Tidak Mempunyai Pet`)
                            } else return reply(`Kamu Tidak Mempunyai Makanan Pet`)
break          
default:
reply(`Ex: ${command} <anjing/kucing/naga/kyubi>`)
}
}
break
case 'berkebon':
case 'petani': {
    function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + " jam " + minutes + " menit " + seconds + " detik";
    }

    const timeout = 1800000;
    let apelu = global.db.data.users[m.sender].bibitapel;
    let angguru = global.db.data.users[m.sender].bibitanggur;
    let manggau = global.db.data.users[m.sender].bibitmangga;
    let pisangu = global.db.data.users[m.sender].bibitpisang;
    let jeruku = global.db.data.users[m.sender].bibitjeruk;
    let time = global.db.data.users[m.sender].lastberkebon + 1800000;

    if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) {
        return reply(`*Pastikan kamu memiliki semua bibit*\n*Seperti Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, Bibit Anggur*\n\nKetik :\n${prefix}shop buy bibitmangga 500\n\n*List*\nbibitmangga\nbibitanggur\nbibitpisang\nbibitjeruk\nbibitapel`);
    }

    if (new Date() - global.db.data.users[m.sender].lastberkebon < 1800000) {
        return reply(`Anda sudah menanam\nMohon tunggu hasil panenmu\nTunggu selama ${msToTime(time - new Date())} lagi`);
    }

    if (global.db.data.users[m.sender].bibitmangga > 499) {
        if (global.db.data.users[m.sender].bibitapel > 499) {
            if (global.db.data.users[m.sender].bibitpisang > 499) {
                if (global.db.data.users[m.sender].bibitjeruk > 499) {
                    if (global.db.data.users[m.sender].bibitanggur > 499) {
                        let pisangpoin = `${Math.floor(Math.random() * 500)}`.trim();
                        let anggurpoin = `${Math.floor(Math.random() * 500)}`.trim();
                        let manggapoin = `${Math.floor(Math.random() * 500)}`.trim();
                        let jerukpoin = `${Math.floor(Math.random() * 500)}`.trim();
                        let apelpoin = `${Math.floor(Math.random() * 500)}`.trim();
                        global.db.data.users[m.sender].pisang += pisangpoin * 1;
                        global.db.data.users[m.sender].anggur += anggurpoin * 1;
                        global.db.data.users[m.sender].mangga += manggapoin * 1;
                        global.db.data.users[m.sender].jeruk += jerukpoin * 1;
                        global.db.data.users[m.sender].apel += apelpoin * 1;
                        global.db.data.users[m.sender].bibitpisang -= 500;
                        global.db.data.users[m.sender].bibitanggur -= 500;
                        global.db.data.users[m.sender].bibitmangga -= 500;
                        global.db.data.users[m.sender].bibitjeruk -= 500;
                        global.db.data.users[m.sender].bibitapel -= 500;
                        global.db.data.users[m.sender].lastberkebon = new Date() * 1;
                        let hsl = `Selamat ${pushname}, Kamu mendapatkan : \n+${pisangpoin} Pisang\n+${manggapoin} Mangga\n+${anggurpoin} Anggur\n+${jerukpoin} Jeruk\n+${apelpoin} Apel`;
                        reply(hsl);
                        setTimeout(() => {
                            reply(`Waktunya Ngebon Lagi Kak!!`);
                        }, timeout);
                    } else reply(`Pastikan bibit anggur kamu *500* untuk bisa berkebon`);
                } else reply(`Pastikan bibit jeruk kamu *500* untuk bisa berkebon`);
            } else reply(`Pastikan bibit pisang kamu *500* untuk bisa berkebon`);
        } else reply(`Pastikan bibit apel kamu *500* untuk bisa berkebon`);
    } else reply(`Pastikan bibit mangga kamu *500* untuk bisa berkebon`);
}
break;

case "confess": case 'menfes': case 'menfess':{
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return reply("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return reply('Fitur Khusus Di private chat!')
if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} nama|628xxx|Menfes nih\n`)
if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} nama|6285781549773|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} nama|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await nova.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await nova.sendMessage(other, {text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, mentions: [m.sender]})
nova.sendMessage(m.chat, {text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`})
}
break
 case 'tolakmenfess': case 'tolakmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
nova.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
reply("Menfess berhasil di tolak 🤚")
delete this.menfes[roof.id]
}
break
 case "stopconfess": case 'stopmenfess': {
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
nova.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await reply("ok")
delete this.menfes[find.id]
}
 break

case "uno":
{
    if (!m.isGroup) {
        return reply("This command can only be used in group chats.");
    }

    const games = readUnoGameData();
    const args = text.split(' ');
    const command = args[0];
    const subCommand = args.slice(1).join(' ');

    if (!games[m.chat]) {
        games[m.chat] = {
            players: [],
            deck: createDeck(),
            discardPile: [],
            currentPlayer: 0,
            direction: 1,
            currentCard: null,
            drawStack: 0,
            blockCardPlayed: false,
            reverseCardPlayed: false,
            stopVotes: new Set(),
            awaitingColorChoice: false
        };
        writeUnoGameData(games);
        return reply("UNO game started! Type 'uno join' to join.");
    }

    const game = games[m.chat];

    switch (command) {
        case "join":
            if (game.players.find(player => player.id === m.sender)) {
                return reply("You have already joined the game.");
            }
            game.players.push({ id: m.sender, hand: [] });
            writeUnoGameData(games);
            return reply("You have joined the UNO game!");

        case "start":
            if (game.players.length < 2) {
                return reply("At least 2 players are required to start the game.");
            }
            game.deck = shuffle(game.deck);
            game.players.forEach(player => {
                for (let i = 0; i < 7; i++) {
                    player.hand.push(game.deck.pop());
                }
            });
            game.currentCard = game.deck.pop();
            game.discardPile.push(game.currentCard);
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "info":
            return reply(`
UNO Rules and How to Play:

1. Join the game:
   - Use \`uno join\` to join the game.
   - Use \`uno start\` to start the game after at least 2 players have joined.

2. Draw a card:
   - Use \`uno draw\` to draw a card from the deck. If a special card forces you to draw cards, you will draw all required cards.

3. Play a card:
   - Use \`uno play <card_index>\` to play a card. The card must match the color or number of the card on the discard pile, or you can use a black card to change the color.
   - Special cards:
     - \`12\`: The next player draws two cards and is skipped.
     - \`14\`: The next player draws four cards and is skipped.
     - \`10\`: The next player is skipped.
     - \`11\`: The play direction is reversed.
     - \`wild13\`: The player chooses a new color.
     - \`wild14\`: The next player draws four cards and is skipped.

4. Skip a turn:
   - Use \`uno pass\` if you cannot or do not want to play a card on your turn.

5. Check your hand:
   - Use \`uno hand\` to see the cards in your hand.

6. Check the card image:
   - Use \`uno card <card_index>\` to check the image of the card in your hand.

7. End the game:
   - The first player to use all their cards wins the game.

8. Stop the game:
   - Use \`uno stop\` to request to stop the game. All players must agree, or an admin/creator can stop the game directly.
`);

        case "stop":
            const player = game.players.find(p => p.id === m.sender);
            if (!player) {
                return reply("You have not joined the game.");
            }

            if (isAdmins || isDev) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply("UNO game stopped by admin/creator.");
            }

            game.stopVotes.add(m.sender);
            if (game.stopVotes.size === game.players.length) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply("UNO game stopped with all players' agreement.");
            }

            writeUnoGameData(games);
            return reply(`Stop request accepted. ${game.players.length - game.stopVotes.size} more players need to agree.`);

        case "hand":
            const playerHand = game.players.find(p => p.id === m.sender);
            if (!playerHand) {
                return reply("You have not joined the game.");
            }
            const hand = playerHand.hand.map((card, index) => `${index}: ${card.color} ${card.value}`).join("\n");
            const iniHandText = `*Uno Game Nova*\n_still under construction_\n\nYour Cards:\n${hand}`;
            await nova.sendMessage(m.sender, { text: iniHandText }, { quoted: m });
            return reply('Check your cards!');

        case "card":
            const cardIndex = parseInt(subCommand);
            if (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= game.players.find(p => p.id === m.sender).hand.length) {
                return reply("Invalid card.");
            }
            const card = game.players.find(p => p.id === m.sender).hand[cardIndex];
            const cardImageUrl = getCardImageUrl(card);
            const cardText = `${card.color} ${card.value}`;
            await nova.sendMessage(m.sender, { image: { url: cardImageUrl }, caption: cardText }, { quoted: m });
            return reply('Card image sent!');

        case "play":
            const currentPlayer = game.players[game.currentPlayer];
            if (currentPlayer.id !== m.sender) {
                return reply("It's not your turn!");
            }

            const playCardIndex = parseInt(subCommand);
            if (isNaN(playCardIndex) || playCardIndex < 0 || playCardIndex >= currentPlayer.hand.length) {
                return reply("Invalid card.");
            }

            const playCard = currentPlayer.hand[playCardIndex];
            if (!isValidPlay(game.currentCard, playCard)) {
                return reply("The card cannot be played.");
            }

            if (playCard.value === "12") {
                game.drawStack += 2;
            } else if (playCard.value === "wild14") {
                if (hasPlayableCard(currentPlayer, game.currentCard)) {
                    return reply("The Wild Draw Four card can only be played if you have no matching card.");
                }
                game.drawStack += 4;
                game.currentCard.color = "black";
                game.awaitingColorChoice = true;
            } else if (playCard.value === "10") {
                game.currentPlayer = getNextPlayer(game);
            } else if (playCard.value === "11") {
                game.direction *= -1;
            }

            game.currentCard = playCard;
            game.discardPile.push(playCard);
            currentPlayer.hand.splice(playCardIndex, 1);

            if (currentPlayer.hand.length === 0) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply(`Player ${m.sender} wins!`);
            }

            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "pass":
            const passPlayer = game.players[game.currentPlayer];
            if (passPlayer.id !== m.sender) {
                return reply("It's not your turn!");
            }
            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "color":
    if (!game.awaitingColorChoice || game.players[game.currentPlayer].id !== m.sender) {
        return reply("No color needs to be selected at this time.");
    }

    const chosenColor = subCommand.trim().toLowerCase();
    if (!["red", "yellow", "green", "blue"].includes(chosenColor)) {
        return reply("Invalid color. Choose one of: red, yellow, green, blue.");
    }

    game.currentCard.color = chosenColor;
    game.awaitingColorChoice = false;
    game.currentPlayer = getNextPlayer(game);
    writeUnoGameData(games);
    return sendGameStatus(m.chat);

default:
    return reply("Command not recognized. Use `uno info` to view the list of commands.");
}

function createDeck() {
    const colors = ["red", "yellow", "green", "blue"];
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const deck = [];
    colors.forEach(color => {
        values.forEach(value => {
            deck.push({ color, value });
            if (value !== "1") deck.push({ color, value });
        });
    });
    ["wild13", "wild14"].forEach(value => {
        deck.push({ color: "black", value });
        deck.push({ color: "black", value });
    });
    return shuffle(deck);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isValidPlay(currentCard, playCard) {
    return playCard.color === "black" || currentCard.color === playCard.color || currentCard.value === playCard.value;
}

function getNextPlayer(game) {
    const nextIndex = (game.currentPlayer + game.direction + game.players.length) % game.players.length;
    return nextIndex;
}

function hasPlayableCard(player, currentCard) {
    return player.hand.some(card => isValidPlay(currentCard, card));
}

function getCardImageUrl(card) {
    const baseUrl = "https://raw.githubusercontent.com/abhisheks008/UNO/main/images/";
    if (card.color === "black") {
        return `${baseUrl}${card.value}.png`;
    }
    return `${baseUrl}${card.color}${card.value}.png`;
}

async function sendGameStatus(chat) {
    const currentCardText = `Current Card: ${game.currentCard.color} ${game.currentCard.value}`;
    const currentCardImageUrl = getCardImageUrl(game.currentCard);
    const handsText = game.players.map((player, index) => `${index}: ${player.id} (${player.hand.length} cards)`).join("\n");
    const iniGameStatusText = `*Uno Game*\n\n${currentCardText}\nTurn: ${game.players[game.currentPlayer].id}\n\nPlayer Cards:\n${handsText}`;
    
    await nova.sendMessage(chat, { text: iniGameStatusText });
    await nova.sendMessage(chat, { image: { url: currentCardImageUrl }, caption: `Current Card: ${game.currentCard.color} ${game.currentCard.value}` });
}
}
break

      case 'wwpc':
case 'ww':
case 'werewolf':{
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./SanzAll/SanzLibrary/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    nova.werewolf = nova.werewolf ? nova.werewolf : {};
    const ww = nova.werewolf ? nova.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        nova.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "h-pay.my.id",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(nova. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(nova. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(nova. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${nova.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await nova.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${nova.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await nova.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${nova.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await nova.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${nova.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await nova.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${nova.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await nova.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await nova.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "h-pay.my.id",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(nova. chat, ww);
    } else      if (value === "kill") { 
    let byId = getPlayerById2(sender, parseInt(target), ww)
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return reply("Peran ini bukan untuk kamu"); 
         if (byId.db.role === "sorcerer") 
             return reply("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")    
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
      reply("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         reply(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") { 
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return reply("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                nova.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "h-pay.my.id",
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        nova.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "h-pay.my.id",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
    let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        nova.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "h-pay.my.id",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break

case "clan":
  case "clans":
    {
      if (!m.isGroup) return onlyGroup();
      let jimp = require("jimp");
      const resizeImage = async (image, width, height) => {
        const readImage = await jimp.read(image);
        const resizedImage = await readImage
          .resize(width, height)
          .getBufferAsync(jimp.MIME_JPEG);
        return resizedImage;
      };

      let thumbUrl = "https://telegra.ph/file/048d31385faac531d20c6.jpg";
      const {
        playerOnClan,
        readClans,
        writeClans,
        setMissions,
        upgradeMissonProgress,
        updateClanTaskProgress,
        upgradeClanLevel,
        simulateWinner,
        getClanData,
        saveClanData,
        saveTournamentData,
      } = require("./SanzAll/SanzLibrary/clan");

      async function startNextMatch(tournament) {
        let nextMatch = tournament.matches.find(
          (match) => match.status === "pending",
        );
        if (!nextMatch) {
          tournament.status = "completed";
          clans.currentTournament = null;

          let winnerClan = tournament.participants[0];
          let winningClanData = await getClanData(winnerClan);

          winningClanData.power += 1000;
          winningClanData.level += 5;

          saveClanData(winnerClan, winningClanData);

          await reply(
            `The tournament ${tournament.name} is over! The winner is ${winnerClan}. This clan receives 1000 power and advances 5 levels.`,
          );
          return;
        }

        let clan1Data = await getClanData(nextMatch.clan1);
        let clan2Data = await getClanData(nextMatch.clan2);

        nextMatch.status = "ongoing";
        writeClans(clans);

        let winner = simulateWinner(clan1Data, clan2Data);
        nextMatch.winner = winner;
        nextMatch.status = "completed";

        tournament.participants = tournament.participants.filter(
          (clan) =>
            clan !==
            (winner === clan1Data.clan ? clan2Data.clan : clan1Data.clan),
        );

        writeClans(clans);

        await reply(
          `The match between ${clan1Data.clan} and ${clan2Data.clan} is over! The winner is ${winner}.`,
        );

        setTimeout(() => startNextMatch(tournament), 5000);
      }

      const { sender, chat } = m;
      const clans = readClans();
      const clanData = clans[chat];
      const action = args[0];
      const param1 = args[1];
      const param2 = args[2];

      switch (action) {
        case "create":
          let existingUserClan = Object.values(clans).find(
            (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
          );
          if (existingUserClan) return reply("You already have a clan.");
          let createText = `*Hooray, Clan created successfully*`;
          clans[param1.toLowerCase()] = {
            room: param1,
            owner: sender.replace("@s.whatsapp.net", ""),
            status: false,
            clan: param1,
            members: [],
            joinRequests: [],
            level: 1,
            warLimit: 5,
            currentWarCount: 0,
            missions: {
              daily: {
                description: "Recruit 5 new members",
                progress: 0,
                target: 5,
                reward: 100,
              },
              weekly: {
                description: "Win 3 wars",
                progress: 0,
                target: 3,
                reward: 500,
              },
            },
            clanTasks: {
              description: "Reach level 3",
              progress: 1,
              target: 3,
              reward: 300,
            },
          };
          createText += `\n\nTo join clans, please type .clan join your clan name.`;
          writeClans(clans);
          await reply(createText.trim());
          break;

        case "join":
          if (!param1)
            return reply(
              "Please enter the name of the clan you want to join.",
            );

          let userClanCheck = Object.values(clans).find(
            (c) => c.members && c.members.some((m) => m.id === sender),
          );
          if (userClanCheck)
            return reply("You are already part of another clan.");

          let targetJoinClan = Object.values(clans).find(
            (c) => c.clan.toLowerCase() === param1.toLowerCase(),
          );
          if (!targetJoinClan)
            return reply("The clan you want to join was not found.");
          if (playerOnClan(sender, chat, clans) === true)
            return reply("You are already part of this clan.");

          let joinData = {
            id: sender,
            number: targetJoinClan.members
              ? targetJoinClan.members.length + 1
              : 1,
            session: chat,
            status: false,
            clan: param1,
            vote: 0,
            isVote: false,
          };

          if (!targetJoinClan.joinRequests) {
            targetJoinClan.joinRequests = [];
          }

          targetJoinClan.joinRequests.push(joinData);
          writeClans(clans);

          let joinText = `Join request has been sent to clan ${targetJoinClan.clan}. Await approval from the clan leader.`;
          reply(joinText);
          break;

        case "approve":
          if (!param1)
            return reply(
              "Please enter the name of the clan you want to view.",
            );
          let approveClan = Object.values(clans).find(
            (c) => c.clan.toLowerCase() === param1.toLowerCase(),
          );
          if (!approveClan) return reply("Clan not found.");

          if (approveClan.owner !== sender.replace("@s.whatsapp.net", ""))
            return reply(
              "You do not have permission to approve join requests.",
            );

          if (
            !approveClan.joinRequests ||
            approveClan.joinRequests.length === 0
          )
            return reply(
              "There are no join requests pending approval.",
            );

              let approveText = "";

              if (param2 === "all") {
                let approvedMembers = [];
                approveClan.joinRequests.forEach((request) => {
                  targetJoinClan.members.push({
                    id: request.id,
                    number: approveClan.members.length + 1,
                    sesi: chat,
                    status: false,
                    clan: request.clan,
                    vote: 0,
                  });
                  approvedMembers.push(request.id);
approveText += `Join request from @${request.id.replace("@s.whatsapp.net", "")} has been approved.\n`;
});
approveClan.joinRequests = [];
writeClans(clans);
} else if (param2) {
  let index = parseInt(param2) - 1;
  if (
    isNaN(index) ||
    index < 0 ||
    index >= approveClan.joinRequests.length
  )
    return reply("Invalid index number.");

  let requester = approveClan.joinRequests[index];
  approveClan.joinRequests.splice(index, 1);
  approveClan.members.push({
    id: requester.id,
    number: approveClan.members.length + 1,
    session: chat,
    status: false,
    clan: requester.clan,
    vote: 0,
  });
  approveText = `Join request from @${requester.id.replace("@s.whatsapp.net", "")} has been approved.`;
  writeClans(clans);
} else {
  let pendingRequestsText = `Please specify whether you want to approve all join requests (all) or a specific user's request.\n\n`;
  pendingRequestsText += "*List of Join Requests:*\n";
  approveClan.joinRequests.forEach((request, index) => {
    pendingRequestsText += `${index + 1}. @${request.id.replace("@s.whatsapp.net", "")}\n`;
  });

  pendingRequestsText +=
    "\nTo approve a specific request, use the command '.clan approve [index number]'";
  return reply(pendingRequestsText.trim());
}

await reply(approveText);
break;

case "war":
  let warInitiatorClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!warInitiatorClan)
    return reply("You do not have a clan to start a war.");

  if (warInitiatorClan.currentWarCount >= warInitiatorClan.warLimit)
    return reply(
      `Your daily war limit has been reached (${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}).`,
    );

  let warTargetClan = Object.values(clans).filter(
    (c) => c.clan !== warInitiatorClan.clan,
  );
  if (warTargetClan.length === 0)
    return reply(
      "No other clans found for war.",
    );

  warTargetClan =
    warTargetClan[Math.floor(Math.random() * warTargetClan.length)];

  if (warInitiatorClan.war || warTargetClan.war)
    return reply(
      "One or both clans are currently in a state of war.",
    );

  let initiatorPower =
    warInitiatorClan.level * warInitiatorClan.members.length;
  let targetPower =
    warTargetClan.level * warTargetClan.members.length;
  let winnerClan =
    initiatorPower >= targetPower
      ? warInitiatorClan
      : warTargetClan;
  let loserClan =
    initiatorPower < targetPower ? warInitiatorClan : warTargetClan;
  let warReward = Math.floor(Math.random() * 3) + 1;

  winnerClan.level += 1; 
  winnerClan.warLimit += warReward;
  winnerClan.currentWarCount += 1;
  loserClan.currentWarCount += 1;

  if (winnerClan.missions && winnerClan.missions.daily) {
    if (
      winnerClan.missions.daily.description.includes("Reach level")
    ) {
      winnerClan.missions.daily.progress = winnerClan.level;
      if (
        winnerClan.missions.daily.progress >=
        winnerClan.missions.daily.target
      ) {
        winnerClan.warLimit += winnerClan.missions.daily.reward;
        winnerClan.missions.daily.completed = true;
      }
    }
  }

  if (winnerClan.missions && winnerClan.missions.weekly) {
    if (
      winnerClan.missions.weekly.description.includes("Reach level")
    ) {
      winnerClan.missions.weekly.progress = winnerClan.level;
      if (
        winnerClan.missions.weekly.progress >=
        winnerClan.missions.weekly.target
      ) {
        winnerClan.warLimit += winnerClan.missions.weekly.reward;
        winnerClan.missions.weekly.completed = true;
      }
    }
  }

  let warResultText = `*War Result:*\n\n`;
  warResultText += `Winner: ${winnerClan.clan} (Level ${winnerClan.level})\n`;
  warResultText += `Loser: ${loserClan.clan} (Level ${loserClan.level})\n`;
  warResultText += `Clan ${winnerClan.clan} receives an additional war limit reward of ${warReward}.\n\n`;
  warResultText += `Daily war count for ${warInitiatorClan.clan}: ${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}`;
  writeClans(clans);
  await reply(warResultText.trim());
  break;

case "list":
  let listText = `*List of Clans:*\n\n`;
  for (let clanKey in clans) {
    if (
      clanKey === "tournaments" ||
      clanKey === "currentTournament"
    )
      continue;

    let clan = clans[clanKey];
    if (clan && clan.members) {
      let warLimitDisplay =
        clan.warLimit !== null && clan.warLimit !== undefined
          ? clan.warLimit
          : 3;
      listText += `Clan Name: ${clan.clan}\n`;
      listText += `Level: ${clan.level}\n`;
      listText += `Number of Members: ${clan.members.length}\n`;
      listText += `Daily War Limit: ${clan.currentWarCount}/${warLimitDisplay}\n\n`;
    }
  }
  await reply(listText.trim());
  break;

case "leave":
  let userClan = Object.values(clans).find(
    (c) => c.members && c.members.some((m) => m.id === sender),
  );
  if (!userClan)
    return reply("You are not part of any clan.");

  userClan.members = userClan.members.filter(
    (m) => m.id !== sender,
  );
  writeClans(clans);
  await reply(`You have left the clan ${userClan.clan}.`);
  break;

case "delete":
  let deleteClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!deleteClan)
    return reply("You do not have a clan to delete.");

  delete clans[deleteClan.clan.toLowerCase()];
  writeClans(clans);
  await reply(`Clan ${deleteClan.clan} has been deleted.`);
  break;

case "member":
  let targetClanMember = Object.values(clans).find(
    (c) => c.clan.toLowerCase() === param1.toLowerCase(),
  );
  if (!targetClanMember)
    return reply("The clan you are looking for was not found.");

  let memberText = `*List of Members in Clan ${targetClanMember.clan}:*\n\n`;
  targetClanMember.members.forEach((member, index) => {
    memberText += `${index + 1}. @${member.id.replace("@s.whatsapp.net", "")}\n`;
  });
  await reply(memberText.trim());
  break;

case "missions":
  let missionsClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!missionsClan)
    return reply("You do not have a clan to view missions.");

  let missionsText = `*Clan ${missionsClan.clan} Missions:*\n\n`;
  if (missionsClan.missions && missionsClan.missions.daily) {
    missionsText += `Daily Mission: ${missionsClan.missions.daily.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.daily.progress}/${missionsClan.missions.daily.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.daily.reward}\n\n`;
  }
  if (missionsClan.missions && missionsClan.missions.weekly) {
    missionsText += `Weekly Mission: ${missionsClan.missions.weekly.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.weekly.progress}/${missionsClan.missions.weekly.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.weekly.reward}\n\n`;
  }
  await reply(missionsText.trim());
  break;

case "task":
  let taskClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!taskClan)
    return reply("You do not have a clan to view tasks.");

  let taskText = `*Clan ${taskClan.clan} Tasks:*\n\n`;
  if (taskClan.clanTasks) {
    taskText += `Task Description: ${taskClan.clanTasks.description}\n`;
    taskText += `Progress: ${taskClan.clanTasks.progress}/${taskClan.clanTasks.target}\n`;
    taskText += `Reward: ${taskClan.clanTasks.reward}\n`;
  } else {
taskText += "No tasks currently.";
}
await reply(taskText.trim());
break;

case "upgrade":
  let upgradeClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!upgradeClan)
    return reply(
      "You do not have a clan to upgrade.",
    );

  let upgradeCost = upgradeClan.level * 1000; // *☘️ Example :* upgrade cost based on clan level
  if (upgradeClan.level < upgradeClan.clanTasks.target) {
    upgradeClan.level += 1;
    upgradeClan.clanTasks.progress += 1;
    writeClans(clans);
    await reply(
      `Clan ${upgradeClan.clan} has been successfully upgraded to level ${upgradeClan.level}.`,
    );
  } else {
    await reply(
      "Your clan has already reached the maximum level for the current task.",
    );
  }
  break;

case "tournament":
  const subAction = param1;

  switch (subAction) {
    case "create":
      if (!param2)
        return reply(
          "Please enter the name of the tournament you want to create.",
        );

      let tournamentName = param2;
      if (!clans.tournaments) {
        clans.tournaments = {};
      }

      if (clans.currentTournament)
        return reply(
          "A tournament is currently ongoing. Please wait until the current tournament is over.",
        );

      if (clans.tournaments[tournamentName])
        return reply("A tournament with that name already exists.");

      clans.currentTournament = tournamentName;

      clans.tournaments[tournamentName] = {
        name: tournamentName,
        participants: [],
        status: "pending",
        matches: [],
      };

      writeClans(clans);
      await reply(`Tournament ${tournamentName} has been successfully created.`);
      break;

    case "join":
      let currentTournamentName = clans.currentTournament;
      if (!currentTournamentName)
        return reply("No tournament is currently ongoing.");

      let joinTournament = clans.tournaments[currentTournamentName];

      let joinUserClan = Object.values(clans).find(
        (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
      );
      if (!joinUserClan)
        return reply(
          "You do not have a clan to join the tournament.",
        );

      if (joinTournament.participants.includes(joinUserClan.clan))
        return reply("Your clan is already registered for this tournament.");

      joinTournament.participants.push(joinUserClan.clan);
      writeClans(clans);
      await reply(
        `Clan ${joinUserClan.clan} has been successfully registered for the ${currentTournamentName} tournament.`,
      );
      break;

    case "start":
      let startTournamentName = clans.currentTournament;
      if (!startTournamentName)
        return reply("No tournament is currently ongoing.");

      let startTournament = clans.tournaments[startTournamentName];

      if (startTournament.status !== "pending")
        return reply("The tournament has already started or ended.");

      if (
        startTournament.participants.length < 2 ||
        startTournament.participants.length % 2 !== 0
      ) {
        return reply(
          "The number of tournament participants must be even and at least 2 clans to start.",
        );
      }

      startTournament.participants =
        startTournament.participants.sort(
          () => Math.random() - 0.5,
        );

      while (startTournament.participants.length > 1) {
        for (
          let i = 0;
          i < startTournament.participants.length;
          i += 2
        ) {
          if (startTournament.participants[i + 1]) {
            startTournament.matches.push({
              clan1: startTournament.participants[i],
              clan2: startTournament.participants[i + 1],
              status: "pending",
            });
          }
        }
        startTournament.participants =
          startTournament.participants.filter(
            (_, index) => index % 2 === 0,
          );
      }

      startTournament.status = "ongoing";
      clans.currentTournament = startTournamentName;
      writeClans(clans);

      await reply(`Tournament ${startTournamentName} has started!`);

      startNextMatch(startTournament);
      break;

    case "status":
      let statusTournamentName = clans.currentTournament;
      if (!statusTournamentName)
        return reply("No tournament is currently ongoing.");

      let statusTournament =
        clans.tournaments[statusTournamentName];

      let statusText = `*Tournament Status ${statusTournamentName}:*\n\n`;
      statusText += `Status: ${statusTournament.status}\n`;
      statusText += `Participants: ${statusTournament.participants.join(", ")}\n\n`;
      statusText += `Match List:\n`;
      statusTournament.matches.forEach((match, index) => {
        statusText += `${index + 1}. ${match.clan1} vs ${match.clan2} - ${match.status === "completed" ? "Completed" : "Pending"}\n`;
      });

      await reply(statusText.trim());
      break;

    default:
      await reply(
        "Invalid tournament command. Use create, join, start, or status.",
      );
      break;
  }
  break;

default:
  await reply(
    "Unknown command. Please use create, join, approve, war, list, leave, delete, member, missions, task, upgrade, or tournament.",
  );
  break;
}
}
// Function to start a game
async function startGame(gameType, gameData, from, m) {
    if (!m.isGroup) return onlyGroup();
    if (!global.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`);
    if (from in gameData) return reply('Masih ada game yang belum diselesaikan');

    let { soal, jawaban, deskripsi, img, audio, artist } = pickRandom(JSON.parse(fs.readFileSync(`./SanzAll/SanzDatabase/game/${gameType}.json`)));
    console.log('Jawaban : ' + jawaban);

    let teks1 = `*GAME ${gameType.toUpperCase()}*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`;
    if (img) {
        await nova.sendMessage(from, { image: { url: img }, caption: teks1 }, { quoted: m });
    } else if (audio) {
        await nova.sendMessage(from, { audio: { url: soal }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m }).then(res => {
            nova.sendteks(from, teks1, res);
        });
    }

    gameData[from] = {
        soal: img || audio,
        jawaban: jawaban.toLowerCase(),
        waktu: setTimeout(function () {
            if (gameData[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`);
            delete gameData[from];
        }, gamewaktu * 1000)
    };
}

case 'judi':{
nova.jbRooms = nova.jbRooms || {};
  nova.jbVotes = nova.jbVotes || {};

  // Daftar klub yang tersedia
  const clubs = [
    "Real Madrid", "Manchester United", "Inter Milan", "Barcelona",
    "Liverpool", "Paris Saint-Germain", "Chelsea", "Juventus",
    "Borussia Dortmund", "Atletico Madrid", "RB Leipzig", "Porto",
    "Arsenal", "Shakhtar Donetsk", "Red Bull Salzburg", "AC Milan",
    "Braga", "PSV Eindhoven", "Lazio", "Red Star Belgrade", "FC Copenhagen"
  ];

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Fungsi untuk menghitung vote
  const countVotes = (votes) => {
    const voteCount = { "1": 0, "2": 0 };
    Object.values(votes).forEach(vote => {
      if (voteCount[vote] !== undefined) {
        voteCount[vote]++;
      }
    });
    return voteCount;
  };

  // Handle perintah tanpa argumen atau dengan argumen 'help'
  if (!args[0] || args[0] === "help") {
    const message = `*❏ JUDI BOLA⚽*

• ${prefix}judi create (buat room) 
• ${prefix}judi join (player join, taruhan 10)
• ${prefix}judi player (daftar pemain yang bergabung)
• ${prefix}judi mulai (mulai game)
• ${prefix}judi vote 1/2 (vote klub pilihan)
• ${prefix}judi delete (hapus sesi room game)

Buatkan sebuah permainan tebak pertandingan bola, contoh: 1 Braga vs 2 Lazio

Untuk pilihan, gunakan ${prefix}jb vote 1 atau 2

Minimal player yang bergabung untuk memulai game adalah 2 pemain.

Taruhan: 10 Limit
Hadiah: 200 Limit`;
    await nova.sendMessage(m.chat, {
      text: message,
      contextInfo: {
        externalAdReply: {
          title: botname,
          body: 'Ayo ikut dan menangkan hadiahnya!',
          thumbnailUrl: 'https://telegra.ph/file/3463760976052aeac5f21.jpg',
          sourceUrl: ``,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
    return;
  }

  // Logika berdasarkan argumen pertama
  switch (args[0].toLowerCase()) {
    case 'create':
      // Logika untuk membuat room
      if (nova.jbRooms[m.chat]) {
        return reply('Room sudah ada.');
      }
      nova.jbRooms[m.chat] = {
        players: [],
        gameStarted: false,
        clubs: [],
        limit: 0 // Inisialisasi limit untuk taruhan
      };
      reply('Room berhasil dibuat. Pemain sekarang bisa bergabung.');
      break;

    case 'join':
      // Logika agar pemain bergabung ke room
      if (!nova.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (nova.jbRooms[m.chat].gameStarted) {
        return reply('Game sudah dimulai. Tidak bisa bergabung sekarang.');
      }
      if (nova.jbRooms[m.chat].players.find(p => p.id === m.sender)) {
        return reply('Anda sudah bergabung di room.');
      }
      const playerName = m.pushName || nova.getName(m.sender);
      nova.jbRooms[m.chat].players.push({ id: m.sender, name: playerName });
      nova.jbRooms[m.chat].limit += 10; // Tambahkan taruhan ke Limit
      reply(`Anda berhasil bergabung di room. Anda telah memasang taruhan sebesar 10. Total taruhan: ${nova.jbRooms[m.chat].limit}`);
      break;

    case 'player':
      // Logika untuk daftar pemain yang bergabung
      if (!nova.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      const players = nova.jbRooms[m.chat].players;
      reply(`Pemain yang bergabung: \n${players.map(p => `${p.name} (${p.id})`).join('\n')}`);
      break;

    case 'mulai':
      // Logika untuk memulai game
      if (!nova.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (nova.jbRooms[m.chat].players.length < 2) {
        return reply('Minimal 2 pemain untuk memulai game.');
      }
      shuffleArray(clubs);
      nova.jbRooms[m.chat].clubs = [clubs[0], clubs[1]];
      nova.jbRooms[m.chat].gameStarted = true;
      reply(`Game dimulai! Pertandingan: 1 ${clubs[0]} vs 2 ${clubs[1]}. Silakan vote klub pilihan Anda.`);
      break;

    case 'vote':
      // Logika untuk vote
      if (!nova.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (!nova.jbRooms[m.chat].gameStarted) {
        return reply('Game belum dimulai. Gunakan .jb mulai untuk memulai game.');
      }
      if (!args[1] || !['1', '2'].includes(args[1])) {
        return reply('Pilihan tidak valid. Gunakan .jb vote 1 atau 2.');
      }
      const vote = args[1];
      const currentRoom = nova.jbRooms[m.chat];
      const player = currentRoom.players.find(p => p.id === m.sender);
      if (!player) {
        return reply('Anda belum bergabung dalam room.');
      }
      nova.jbVotes[m.sender] = vote;
      reply(`Anda memilih klub nomor ${vote}.`);

      // Cek apakah semua pemain sudah melakukan vote
      const voteCount = countVotes(nova.jbVotes);
      if (Object.keys(nova.jbVotes).length === currentRoom.players.length) {
        reply('Semua pemain telah vote. Pertandingan akan segera dimulai...');

        // Jeda 25 detik
        setTimeout(() => {
          reply('Pertandingan telah dimulai. Mohon tunggu sampai pertandingan selesai...');

          // Jeda untuk simulasi pertandingan
          setTimeout(() => {
            // Tentukan pemenang berdasarkan vote terbanyak
            const winnerVote = voteCount["1"] > voteCount["2"] ? "1" : "2";
            const winningClub = currentRoom.clubs[winnerVote - 1];
            const winners = currentRoom.players.filter(player => nova.jbVotes[player.id] === winnerVote);

            reply(`Pertandingan telah selesai.\nPemenang adalah ${winningClub}.\nPemain yang memilih ${winningClub}:\n${winners.map(w => w.name).join('\n')}\n\nSelamat kepada para pemenang mendapatkan 200.`);            
    let users = global.db.data.users
    // Checking if the user is in the database, if not, initialize their limit to 0
    if (!users[winningClub]) users[winningClub] = { limit: 0 }
    users[winningClub].limit += 200

            // Bersihkan room dan votes setelah pertandingan selesai
            delete nova.jbRooms[m.chat];
            delete nova.jbVotes[m.chat];
          }, 25000); // Jeda 25 detik untuk simulasi pertandingan
        }, 25000); // Jeda 25 detik sebelum pertandingan dimulai
      }
      break;

    case 'delete':
      // Logika untuk menghapus room
      if (!nova.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat.');
      }
      delete nova.jbRooms[m.chat];
      delete nova.jbVotes[m.chat];
      reply('Room telah dihapus.');
      break;

    default:
      reply('Perintah tidak dikenal. Gunakan .judi untuk melihat daftar perintah.');
  }
};
break

case 'gens-wildlife':{
  if (!text) return reply(`Contoh: *${prefix + command} snowboar*\nHarap berikan nama binatang liar.`);
  try {
    let result = await genshindb.wildlife(text);
    if (result) {
      let response = `*Binatang Liar Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Habitat:* ${result.habitat || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Binatang liar tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.wildlife("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Binatang liar yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-weapons':{
if (!text) return reply(`Contoh: *${lrefix + command} claymore*\nHarap berikan nama senjata.`);
  try {
    let result = await genshindb.weapons(text);
    if (result) {
      let response = `*Senjata Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Type:* ${result.type || "Data tidak tersedia"}\n` + `*Base ATK:* ${result.baseAttack || "Data tidak tersedia"}\n` + `*Substat:* ${result.subStat || "Data tidak tersedia"}\n` + `*Passive Name:* ${result.passiveName || "Data tidak tersedia"}\n` + `*Passive Description:* ${result.passiveDescription || "Data tidak tersedia"}\n` + (result.refinement ? `\n*Refinement (${result.refinement.refine}):* ${result.refinement.description || "Data tidak tersedia"}\n` : "");
      reply(response);
    } else {
      reply("Senjata tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.weapons("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Senjata yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-voiceovers':{
  if (!text) return reply( `Contoh: *${prefix + command} venti*\nHarap berikan nama voiceover.`);
  try {
    let result = await genshindb.voiceovers(text);
    if (result) {
      let response = `*Voiceover Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Voiceover tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.voiceovers("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Voiceover yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-viewpoint':{
  if (!text) return reply(`Contoh: *${prefix + command} starfell valley*\nHarap berikan nama pemandangan.`);
  try {
    let result = await genshindb.viewpoints(text);
    if (result) {
      let response = `*Pemandangan Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}`;
      reply(response);
    } else {
     reply("Pemandangan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.viewpoints("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Pemandangan yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-talents':{
  if (!text) return reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter untuk mencari bakatnya.`);
  try {
    let result = await genshindb.talents(text);
    if (result && result.length > 0) {
      let response = `*Bakat ditemukan untuk karakter ${text}:*\n\n`;
      result.forEach((talent, index) => {
        response += `*${index + 1}. ${talent.name}*\n`;
        response += `_${talent.description || "Deskripsi tidak tersedia"}_\n\n`;
        response += `*Jenis:* ${talent.type || "Data tidak tersedia"}\n`;
        response += `*Element:* ${talent.element || "Data tidak tersedia"}\n\n`;
      });
      reply(response);
    } else {
     reply(`Bakat untuk karakter '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    reply(`*Tidak Ditemukan*\n\n*Bakat untuk karakter '${text}' tidak ditemukan.`);
  }
};
break
case 'gens-potion':{
  if (!text) return reply(`Contoh: *${prefix + command} squirrel fish*\nHarap berikan nama ramuan atau makanan.`)
  try {
    let result = await genshindb.foods(text);
    if (result) {
      let response = `*Ramuan atau Makanan Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Efek:* ${result.effect || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply(`Ramuan atau makanan '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    try {
      let availableFoods = await genshindb.foods("names", {
        matchCategories: true
      });
      reply(`*List ${text} foods :*\n\n- ${availableFoods.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let availableFoods = await genshindb.foods("names", {
        matchCategories: true
      });
      reply(`*Not Found*\n\n*Available foods is :*\n${availableFoods.join(", ")}`);
    }
  }
};
break
case 'gens-outfit':{
  if (!text) return reply(`Contoh: *${prefix + command} outrider*\nHarap berikan nama kostum atau outfit.`);
  try {
    let result = await genshindb.outfits(text);
    if (result) {
      let response = `*Kostum Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Karakter:* ${result.character || "Data tidak tersedia"}`;
      if (result.url && result.url.modelviewer) {
        response += `\n_${result.url.modelviewer}_`;
      }
      reply(response);
    } else {
     reply(`Kostum '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    try {
      let availableOutfits = await genshindb.outfits(text, {
        matchCategories: true
      });
      reply(`*List ${text} outfit :*\n\n- ${availableOutfits.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let availableOutfits = await genshindb.outfits("names", {
        matchCategories: true
      });
      reply(`*Not Found*\n\n*Available outfits is:*\n${availableOutfits.join(", ")}`);
    }
  }
};
break
case 'gens-nation':{
if (!text) return reply(`Contoh: *${prefix + command} mondstadt*\nHarap berikan nama wilayah atau nasionalitas.`);
  try {
    let result = await genshindb.geographies(text);
    if (result) {
      let response = `*Informasi Wilayah Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Informasi wilayah tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.geographies("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Wilayah yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-namacard':{
  if (!text) return reply(`Contoh: *${prefix + command} anemo flare*\nHarap berikan nama kartu nama.`);
  try {
    let result = await genshindb.namecards(text);
    if (result) {
      let response = `*Kartu Nama Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Unlock:* ${result.unlock || "Data tidak tersedia"}`;
      reply(response);
    } else {
     reply("Kartu nama tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.namecards("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Kartu nama yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-materials':{
  if (!text) return reply(`Contoh: *${prefix + command} boreal wolf's milk*\nHarap berikan nama material.`);
  try {
    let result = await genshindb.materials(text);
    if (result) {
      let response = `*Material Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Type:* ${result.type || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Material tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.materials("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Material yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-food':{
  if (!text) return reply(`Contoh: *${prefix + command} temptation*\nHarap berikan nama makanan.`);
  try {
    let result = await genshindb.foods(text);
    if (result) {
      let response = `*Makanan Ditemukan: ${result.name}*\n\n`;
      response += `_"${result.description}"_\n\n`;
      response += `*Rarity:* ${result.rarity}\n`;
      response += `*Type:* ${result.foodtype}\n`;
      response += `*Category:* ${result.foodfilter} (${result.foodcategory})\n\n`;
      if (result.effect) {
        response += `*Effect:*\n${result.effect}\n\n`;
      }
      if (result.suspicious) {
        response += `*Suspicious:*\n${result.suspicious.effect}\n_"${result.suspicious.description}"_\n\n`;
      }
      if (result.normal) {
        response += `*Normal:*\n${result.normal.effect}\n_"${result.normal.description}"_\n\n`;
      }
      if (result.delicious) {
        response += `*Delicious:*\n${result.delicious.effect}\n_"${result.delicious.description}"_\n\n`;
      }
      reply(response);
    } else {
      reply("Makanan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.foods("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Makanan yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-enemy':{
  if (!text) return reply( `Contoh: *${prefix + command} ruin guard*\nHarap berikan nama musuh.`);
  try {
    let result = await genshindb.enemies(text);
    if (result) {
      let response = `*Musuh Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Level:* ${result.level || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Element:* ${result.element || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Musuh tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.enemies("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Musuh yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-emoji':{
  if (!text) return reply(`Contoh: *${prefix + command} anemo*\nHarap berikan nama emoji.`);
  try {
    let result = await genshindb.emojis(text);
    if (result) {
      let response = `*Emoji Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Emoji tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.emojis("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Emoji yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-domain':{
  if (!text) return reply(`Contoh: *${prefix + command} valley of remembrance*\nHarap berikan nama domain.`);
  try {
    let result = await genshindb.domains(text);
    if (result) {
      let response = `*Domain Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Level:* ${result.level || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Domain tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.domains("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Domain yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-craft':{
  if (!text) return reply(`Contoh: *${prefix + command} mystical enhancement ore*\nHarap berikan nama craft.`);
  try {
    let result = await genshindb.crafts(text);
    if (result) {
      let response = `*Craft Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Type:* ${result.type || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Craft tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.crafts("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Craft yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-giconstellation':{
  if (!text) return reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter untuk mencari konstelasinya.`);
  try {
    let result = await genshindb.constellations(text);
    if (result && result.length > 0) {
      let response = `*Konstelasi ditemukan untuk karakter ${text}:*\n\n`;
      result.forEach((constellation, index) => {
        response += `*${index + 1}. ${constellation.name}*\n`;
        response += `_${constellation.effect}_\n\n`;
        response += `*Unlock At:* C${constellation.unlock || "Data tidak tersedia"}`;
        if (index < result.length - 1) response += "\n\n";
      });
      reply(response);
    } else {
      reply(`Konstelasi untuk karakter '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    reply(`*Tidak Ditemukan*\n\n*Konstelasi untuk karakter '${text}' tidak ditemukan.`);
  }
};
break
case 'gens-giartifact':{
  if (!text) return reply( `Contoh: *${prefix + command} berserker*\nHarap berikan nama artefak.`);
  try {
    let result = await genshindb.artifacts(text);
    if (result) {
      let response = `*Artefak Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Set:* ${result.set || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Slot:* ${result.slot || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Artefak tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.artifacts("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Artefak yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-area':{
if (!text) return reply(`Contoh: *${prefix + command} liyue*\nHarap berikan nama tempat.`);
  try {
    let result = await genshindb.geographies(text);
    if (result) {
      let response = `*Info Geografi: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
      response += `*Urutan Sortir:* ${result.sortorder || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Geografi tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.geographies("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Geografi yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-animals':{
  if (!text) return reply( `Contoh: *${prefix + command} shiba*\nHarap berikan nama hewan.`);
  try {
    let animal = await genshindb.animals(text);
    if (animal) {
      let response = `*Hewan Ditemukan: ${animal.name}*\n\n`;
      response += `"${animal.description}"\n\n`;
      response += `*Kategori:* ${animal.category || ""}\n`;
      response += `*Jenis Hitungan:* ${animal.counttype || ""}\n`;
      response += `_${animal.sortorder ? `Urutan Sortir: ${animal.sortorder}` : ""}_`;
      reply(response);
    } else {
      reply("Hewan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    try {
      let animalCategories = await genshindb.animals(text, {
        matchCategories: true
      });
      reply(`*Kategori Hewan ${text} :*\n\n- ${animalCategories.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let allAnimalNames = await genshindb.animals("names", {
        matchCategories: true
      });
      reply(`*Tidak Ditemukan*\n\n*Hewan yang tersedia:* ${allAnimalNames.join(", ")}`);
    }
  }
};
break
case 'gens-advrank':{
    if (!text || isNaN(parseInt(text))) {
      return reply(`Masukkan nomor peringkat petualang yang valid. Contoh: *${prefix + command} 5*`);
    }
    try {
    let rankNumber = parseInt(text);
    let result = await genshindb.adventureranks(rankNumber);
    if (result) {
      let response = `*Rank Petualang Ditemukan untuk Rank ${rankNumber}:*\n\n`;
      response += `*Experience:* ${result.exp || "Data tidak tersedia"}\n`;
      response += `*Reward:* ${result.reward || "Data tidak tersedia"}\n`;
      response += `*Deskripsi:* ${result.description || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply(`Rank petualang untuk Rank ${rankNumber} tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    let availableRanks = await genshindb.adventureranks("names");
    reply(`*Tidak Ditemukan*\n\n*Rank petualang yang tersedia:* ${availableRanks.join(", ")}`);
  }
};
break
case 'gens-giachievement':{
if (!text) return reply( `Contoh: *${prefix + command} mondstadt*\nHarap berikan nama prestasi.`);
  try {
    let result = await genshindb.achievements(text);
    if (result) {
      let response = `*${result.name}*\n`;
      response += `_${result.description}_\n\n`;
      response += `*Kategori:* ${result.category || ""}\n`;
      response += `*Rarity:* ${result.rarity || ""}\n`;
      response += `*Detail:* ${result.detail || ""}\n`;
      response += `*Cara Mendapatkan:* ${result.howToObtain || ""}\n`;
      reply(response);
    } else {
      reply("Prestasi tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.achievements("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Prestasi yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-characters':{
  if (!text) return reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter.`);
  try {
    let result = await genshindb.characters(text);
    if (result) {
      let response = `*Karakter Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Vision:* ${result.vision || "Data tidak tersedia"}\n`;
      response += `*Senjata:* ${result.weapon || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Karakter tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.characters("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Karakter yang tersedia:* ${available.join(", ")}`);
  }
};
break
//————————————————————————//
// PUSH FITUR

case "setteksjpm": {
if (!isDev) return onlyOwner()
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./SanzAll/SanzDatabase/push/teksjpm.js", newteks.toString())
reply("Berhasil Mengganti Teks JPM ✅")
} else {
return reply("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*")
}}
break

  case "startjpm": {
    if (!isDev) return onlyOwner()
    var teksnya = await fs.readFileSync("./SanzAll/SanzDatabase/push/teksjpm.js").toString()
    if (teksnya.length < 1) return reply("Teks Jpm Tidak Ditemukan, Silahlan Isi/Edit Teks Jpm Didalam Folder ./SanzAll/SanzDatabase/push")
    var teks = `${teksnya}`
    let total = 0
    let getGroups = await nova.groupFetchAllParticipating()
    let usergc = await Object.keys(getGroups)
    reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
    for (let jid of usergc) {
    try {
    await nova.sendMessage(jid, {text: teks}, {quoted: qpayment})
    total += 1
    } catch {}
    await sleep(4000)
    }
    reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
    }
    break

case "pushkontak": {
  if (!isDev) return onlyOwner()
  const contacts = JSON.parse(fs.readFileSync("./SanzAll/SanzDatabase/push/contacts.json"))
  if (!m.isGroup) return reply(`The feature works only in grup`)
  if (!text) return reply(`Format Salah !!\nExample : ${prefix + command} teks|jeda`)
  var teks = text
  const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
  reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
  for (let mem of halls) {
  if (mem !== m.sender) {
  contacts.push(mem)
  await fs.writeFileSync('./SanzAll/SanzDatabase/push/contacts.json', JSON.stringify(contacts))
  let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
  "messageContextInfo": { 
  "deviceListMetadata": {}, 
  "deviceListMetadataVersion": 2
  }, 
  interactiveMessage: proto.Message.InteractiveMessage.create({
  contextInfo: { 
  mentionedJid: [m.sender] 
  }, body: proto.Message.InteractiveMessage.Body.create({ 
  text: text.split("|")[0]
  }), 
  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
  buttons: [
      {
                  "name": "quick_reply",
                  "buttonParamsJson": `{"display_text":"Done Save","id":"donesave sudah Disave"}`
                }]
  })
  })}
  }}, {userJid: m.sender, quoted: m})
  await nova.relayMessage(mem,msgii.message, { 
  messageId: msgii.key.id 
  })
  await sleep(text.split("|")[1])
  }}
  try {
  const uniqueContacts = [...new Set(contacts)]
  const vcardContent = uniqueContacts.map((contact, index) => {
  const vcard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  `FN:Contact ${contact.split("@")[0]}`,
  `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
  "END:VCARD",
  "", ].join("\n")
  return vcard }).join("")
  fs.writeFileSync("./SanzAll/SanzDatabase//push/contacts.vcf", vcardContent, "utf8")
  } catch (err) {
  reply(err.toString())
  } finally {
  if (m.chat !== m.sender) await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
  await nova.sendMessage(m.sender, { document: fs.readFileSync("./SanzAll/SanzDatabase//push/contacts.vcf"), fileName: "/push/contacts.vcf", caption: "File Contact Berhasil Di Buat", mimetype: "text/vcard", }, { quoted: m })
  contacts.splice(0, contacts.length)
  await fs.writeFileSync("./SanzAll/SanzDatabase/push/contacts.json", JSON.stringify(contacts))
  await fs.writeFileSync("./SanzAll/SanzDatabase//push/contacts.vcf", "")
  }}
  break
  case "pushkontak2": {
    if (!isDev) return onlyOwner()
      const contacts = JSON.parse(fs.readFileSync("./SanzAll/SanzDatabase/push/contacts.json"))
    if (!m.isGroup) return reply(`The feature works only in grup`)
    if (!text) return reply(`Format Salah !!\nExample : ${prefix + command} idgc|teks|jeda`)
    
    var teks = text
    const groupMetadataa = !m.isGroup ? await nova.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
    const participants = !m.isGroup ? await groupMetadataa.participants : groupMetadata.participants
    const halls = participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    
    reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
    
    for (let mem of halls) {
      if (mem !== m.sender) {
        contacts.push(mem)
        await fs.writeFileSync('./SanzAll/SanzDatabase/push/contacts.json', JSON.stringify(contacts))
  
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: { message: {
            "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: { mentionedJid: [m.sender] },
              body: proto.Message.InteractiveMessage.Body.create({ text: text.split("|")[1] }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  { "name": "quick_reply", "buttonParamsJson": `{"display_text":"Done Save","id":"donesave Sudah Disave"}` }
                ]
              })
            })
          }}
        }, { userJid: m.sender, quoted: m })
        
        await nova.relayMessage(mem, msgii.message, { messageId: msgii.key.id })
        await sleep(text.split("|")[2])
      }
    }
    
    try {
      const uniqueContacts = [...new Set(contacts)]
      const vcardContent = uniqueContacts.map(contact => {
        return [
          "BEGIN:VCARD",
          "VERSION:3.0",
          `FN:Nerox [ Member ] ${contact.split("@")[0]}`,
          `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
          "END:VCARD",
          ""
        ].join("\n")
      }).join("")
      
      fs.writeFileSync("./SanzAll/SanzDatabase//push/contacts.vcf", vcardContent, "utf8")
      
    } catch (err) {
      reply(err.toString())
    } finally {
      if (m.chat !== m.sender) 
        await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
        
      await nova.sendMessage(m.sender, { 
        document: fs.readFileSync("./SanzAll/SanzDatabase//push/contacts.vcf"), 
        fileName: "/push/contacts.vcf", 
        caption: "File Contact Berhasil Di Buatâœ…", 
        mimetype: "text/vcard" 
      }, { quoted: m })
      
      contacts.splice(0, contacts.length)
      await fs.writeFileSync("./SanzAll/SanzDatabase/push/contacts.json", JSON.stringify(contacts))
      await fs.writeFileSync("./SanzAll/SanzDatabase/push/contacts.vcf", "")
    }
  }
  break
  
  case "savekontak":
    case "svkontak": {
if (!isDev) return onlyOwner()
if (!text) return reply(`Format Salah !\nExample : *${prefix + command} idgrup*\n\nsilahkan ketik .cekidgc bila ingin mengetahui id grup yg dimiliki anda`)
var idnya = text
var groupMetadataa
try {
groupMetadataa = await nova.groupMetadata(`${idnya}`)
} catch (e) {
return reply("Invalid ID Group")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync(".//push/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`Contact file successfully sent to private chat`)
await nova.sendMessage(m.sender, { document: fs.readFileSync(".//push/contacts.vcf"), fileName: "/push/contacts.vcf", caption: "Contact file successfully created", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./contacts.json", JSON.stringify(contacts))
await fs.writeFileSync(".//push/contacts.vcf", "")
}}
break
//————————————————————————//
// STORE FITUR

case 'done':{
if (!isDev) return reply('Maaf, command ini hanya untuk pemilik.')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`
—————————————
 _• *Barang:* ${barang}_
 _• *Nominal:* Rp${nominal}_
 _• *Tanggal:* ${tanggal2}_
—————————————
*TERIMA KASIH TELAH ORDER DI HAM STORE*\n*JANGAN LUPA ORDER LAGI YA*🙏
—————————————`)
}
break

case "tunda":{
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

—————————————

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

 Powered By *@${owned.split("@")[0]}*
—————————————`
nova.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m  })
}
break

case "proses":{
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

—————————————

𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️

 Powered By *@${owned.split("@")[0]}*
—————————————`
nova.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m  })
}
break

case "batal":{
const owned = `${owner}@s.whatsapp.net`
const text12 = `
—————————————
*Hi @${sender.split("@")[0]} 👋*
—————————————
📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹

 Powered By *@${owned.split("@")[0]}*
—————————————`
nova.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m  })
}
break

case 'addlist':
if (!isDev) return  onlyOwner()
if (!m.isGroup) return  onlyGroup()
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return reply(`Usage Example : ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await nova.downloadAndSaveMediaMessage(quoted)
mem = await Nekohime(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Successful Add List With Key : *${args1}*`)
}
break
case 'dellist':
if (!isDev) return  onlyOwner()
if (!m.isGroup) return  onlyGroup()
if (db_respon_list.length === 0) return reply(`There is no message list in the database yet`)
if (!q) return reply(`Usage Example : ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`Item list by Name *${q}* not in the database!`)
delResponList(from, q, db_respon_list)
reply(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list':{
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
reply(teks)
}
break
//————————————————————————//
// OTHER FITUR

    case 'addchangelog': case 'addlog': {
      if (!isDev) return onlyOwner()
      if (!text) return reply(`Usage: ${prefix}addchangelog <text>`)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Di Tambahkan 🔑')
      }
      break
      
    case 'rchangelog': case 'rlog': {
      if (!isDev) return onlyOwner()
      if (!text) return reply(`Usage: ${prefix}rchangelog <text>`)
      let index = changelogs.findIndex(changelog => changelog.includes(text))
      if (index === -1) return reply('Changelog not found')
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Dihapus 🔥')
      }
      break

case 'changelog':
    case 'log': {
      if (!changelogs.length) return reply('There are no changelogs yet')
      caption = changelogs.map(changelog => {
        let [date, ...items] = changelog.split(' - ')
        return `☀️ ${date}\n${items.map(item => `  📜 ${item}`).join('\n')}`
      }).join('\n\n')
nova.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `Changelog Ham-Bot`,
        body: `${global.wm}`,
        thumbnailUrl: "https://telegra.ph/file/8105d82b7a09255f87eca.jpg",
        sourceUrl: "https://chat.whatsapp.com/",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
      break

case 'testq':{
if (!text) return reply(`Example : ${command} woi`)
const pesan = `${text}`
const username = `${pushname}`
const avatar = "https://telegra.ph/file/59952c903fdfb10b752b3.jpg"

const json = {
  "type": "stories",
  "format": "png",
  "backgroundColor": "#FFFFFF",
  "width": 512,
  "height": 768,
  "scale": 2,
  "watermark": '@HamsOffc',
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": username,
        "photo": {
          "url": avatar
        }
      },
      "text": pesan,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
       fs.writeFile('Quotly.png', buffer, (err) => {
      if (err) throw err;
    })
    nova.sendMessage(m.chat, { image: { url: './temp/Quotly.png' }, caption: `hai` }, { quoted: m })
});
}
break
case 'upch': case 'reqch':{
if(!text) return reply(`*Contoh :*\n${prefix+command} Fitur Spotify`)
nova.sendMessage(global.idch, { text: `\`REPORT\`\n\n*Pesan :* ${text}\n*Dari :* @${m.sender.split('@')[0]}\n\n_NovaBot_`, mentions: [m.sender]}, { quoted:m})
reply('Laporan udah dikirim, Tunggu ya.')
}
break

case 'promosi':{
if(!text) return reply(`*Contoh :*\n${prefix+command} Fitur Spotify`)
nova.sendMessage(global.idch2, { text: `\`HAM-BOT PROMOTION\`\n\n*Pesan :* ${text}\n*Dari :* @${m.sender.split('@')[0]}\n\n_NovaBot_`, mentions: [m.sender]}, { quoted:m})
reply('Laporan udah dikirim, Tunggu ya.')
}
break

case 'idch': case 'idchannel': {
  if (!isDev) return  onlyOwner()
  if (!m.quoted) return reply('reply saluran channel nya')
  try {
  let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo 
  let send_ch = `*BERIKUT DATA CHANNEL ANDA*\n
  *Name Channel*: ${id.newsletterName}\n*ID Channel*: ${id.newsletterJid}
  `
  reply(send_ch)
  } catch (e) {
  reply('Harus chat dari channel bang') 
  }
  }
  break
  
case 'delete': case 'del': case 'd':{
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 nova.sendMessage(m.chat, { delete: key })
}
break

case 'owner':
case 'creator':{
const p = global.owner;
  let pp = await nova.profilePictureUrl(`${p}@s.whatsapp.net`, 'image').catch((_) => "https://img100.pixhost.to/images/106/533172682_ham-bot.jpg");
  let noowner = `wa.me/${p}`;
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Nova\nNICKNAME:${global.ownername}\nORG: ${global.botname}\nTITLE:soft\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:Contact Owner\nitem2.URL:-\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:ibham913@id.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nBDAY;value=19-01-2008\nEND:VCARD`;

  const sentMsg = await nova.sendMessage(m.chat, {
    contacts: {
      displayName: botname,
      contacts: [{ vcard }]
    },
    contextInfo: {
      externalAdReply: {
        title: `${global.botname}`,
        body: salam,
        thumbnailUrl: pp,
        sourceUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: qevent });

  await reply("*❕ he is my owner, if you want to report a bug contact him*");
}
        break

case "donasi":
      {
        await nova.sendMessage(m.chat, {
          react: {
            text: "💸",
            key: m.key,
          },
        });
        let me = m.sender;
        const msg =
          require("@whiskeysockets/baileys").generateWAMessageFromContent(
            m.chat,
            {
              interactiveMessage: {
                body: {
                  text: "",
                },
                footer: {
                  text: "𝗛𝗔𝗠 𝗕𝗢𝗧𝗭𝗭 ᴏғғɪᴄɪᴀʟ 𝟸𝟶𝟸𝟺",
                },
                header: {
                  title: `Hay @${m.sender.split("@")[0]} *Ingin Berdonasi?*


*_💳 𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐇𝐚𝐦𝐬𝐭𝐨𝐫𝐞_*    ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏      
> Dana : 082117696469 a/n Ibham W 
> Gopay : 085781549773 a/n Ibham W 
> Seabank : 901239129378 a/n Ibham W
> Qris All Payment 


*Terimakasih Banyak Yg Sudah Berdonasi, Semoga Di Mudahkan Rezeki Nya, Dan Sehat Selalu #Aminn*

> _Untuk Via: Dana,Gopay,Qris,Ovo,M-Banking/Allpayment Bisa Scan Foto Di Atas_
*Creator & Owner : ${global.owner}*`,
                  hasMediaAttachment: false,
                  ...(await require("@whiskeysockets/baileys").prepareWAMessageMedia(
                    {
                      image: {
                        url: "https://img100.pixhost.to/images/538/538763199_patz-bot.jpg",
                      },
                    },
                    {
                      upload: nova.waUploadToServer,
                    },
                  )),
                },
                nativeFlowMessage: {
                  buttons: [],
                },
                contextInfo: {
                  mentionedJid: [
                    m.sender,
                    global.owner,
                    "0@s.whatsapp.net",
                  ],
                  externalAdReply: {
                    showAdAttribution: true,
                    containsAutoReply: true,
                  },
                },
              },
            },
            {
              quoted: m,
            },
          );
        await nova.relayMessage(m.chat, msg.message, {});
      }
      break
      
      case "listdns":
      case "listdonasi":
      {
        await nova.sendMessage(m.chat, {
          react: {
            text: "😘",
            key: m.key,
          },
        });
        let me = m.sender;
        let teks = `_Hay_ ${pushname}👋\n_Berikut List Donation Ham Botzz_

╔━═━═乂 *List Donasi*
║1. Mimin😎 : Rp.999.999
║2. Silvia : Rp.10,
║3. 
║4. 
║5. 
║6. 
║7. 
║8. 
║9. 
╚━═━═━═━═━═━═━═━༓

*_Ingin Berdonasi? Kamu Bisa Chat Owner Dengan Cara Ketik .donasi_*




*Powered By ${global.ownername}*
`
nova.sendMessage(m.chat, {
          text: teks,
          contextInfo: {
            externalAdReply: {
              thumbnailUrl: `${global.thumbnail}`,
              sourceUrl: `${global.gc}`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: m })
      }
       break

case'sc':
case'script':{
let seceh = `乂Source-Code\n
*with price :*
* IDR = Rp. 65,000 -
* USD = $ 5.50 -
* Payment = Qris,Dana,Gopay -

*Benefit :*

 - No Enc
 - Type Case X Plugin
 - Include Bot Tele
 - Using Scrape
 - Size Ringan 
 - Base Rapih
 - Fitur Game
 - Fitur RPG
 - Fitur Store
 - Fitur Instal Panel ( No Key )
 - Fitur AIO
 - Fitur Autoai 3 Type
 - Jaga Grub

* Free Update = (✅) -
* Free Fix = (✅) -

* Contacts Di Bawah Ini -
- wa.me/6285781549773
- t.me/hamsoffc

*TESTI :* -
 - https://whatsapp.com/channel/0029VaLWCTB5fM5awYGRYe0b
.`
 
nova.sendMessage(from, { image: { url: `https://img100.pixhost.to/images/106/533172682_ham-bot.jpg` }, caption: seceh, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: qevent })
}
break

case 'ping':
case 'server':{
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `*INFO SERVER*
• OS: ${tio}
• IP Address: ${nou.os.ip()}
• Type OS: ${nou.os.type()}

*RAM*
• Total: ${formatp(os.totalmem())}
• Digunakan: ${formatp(os.totalmem() - os.freemem())}

*PENYIMPANAN*
• Total: ${tot.totalGb} GB
• Digunakan: ${tot.usedGb} GB > ${tot.usedPercentage}%
• Tersedia: ${tot.freeGb} GB > ${tot.freePercentage}%

• Ping: ${latensi.toFixed(4)} detik`
nova.sendMessage(m.chat, {text: respon }, {quoted: qevent})
}
break

case'tqto':{
let mandiri = `Hai @${m?.sender.split('@')[0]}

- SanzMD ( Dev )
- My Friend 
- Penyedia Module
- Pembuat Scrape
- Hams Offc ( Saya Sendiri )

Sorry For Not Going To TQTO, The Point Is, Thank You For Helping Me \n`
nova.sendMessage(m.chat, {
text: mandiri,
contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
externalAdReply: {
title: `© Thanks To - My Self`,
body: `Thanks For`,
thumbnailUrl: "https://img100.pixhost.to/images/106/533172682_ham-bot.jpg",
sourceUrl: `https://whatsapp.com/channel/0029VaLWCTB5fM5awYGRYe0b`,
mediaType: 1,
showAdtibution: true,
renderLargerThumbnail: true
}}}, {quoted:qevent})}
break

		case "getpic":
		case "getpp":{
			if (mentionByReply) {
				try {
					var ppWong = await nova.profilePictureUrl(mentionByReply, "image")
				} catch {
					var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
				}
				nova.sendMessage(m.chat, {
					image: {
						url: ppWong
					},
					caption: `Succes!!`
				}, {
					quoted: m
				})
			} else {
				try {
					var ppWong = await nova.profilePictureUrl(m.sender, "image")
				} catch {
					var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
				}
				nova.sendMessage(m.chat, {
					image: {
						url: ppWong
					},
					caption: `Succes!!`
				}, {
					quoted: m
				})
			}
		}
		break

		case "getppgc":
			if (!m.isGroup) return
			reply(mess.wait)
			try {
				var ppimg = await nova.profilePictureUrl(m.chat, "image")
			} catch (err) {
				console.log(err)
				var ppimg = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
			}
			await nova.sendMessage(m.chat, {
				image: {
					url: ppimg
				}
			}, {
				quoted: m
			})
			break
			
case 'buka': case 'rvo':{
    if (!quoted) return reply(`Reply view once message to use this command`)
    let type = Object.keys(m.quoted.message)[0]
    let quotedType = m.quoted.message[type]
    var medio = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
    let buffer = Buffer.from([])
    for await (let chunk of medio) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        await nova.sendMessage(m.chat, {
            video: buffer,
            caption: quotedType.caption
        }, {
            quoted: m
        })
    } else if (/image/.test(type)) {
        await nova.sendMessage(m.chat, {
            image: buffer,
            caption: quotedType.caption
        }, {
            quoted: m
        })
    }
    }
    break

case 'daftar': case 'register':{

}
break

case "ceklimit": case "limit": case "me": case "my":{
if (m.quoted) {
try {
ppuser = await nova.profilePictureUrl(pengirim, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}    
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*`
nova.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: m})
} else {
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*`
nova.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: m})
}}
break

case 'addlimit':{
if (!isDev) return reply(mess.premium)
    if (!text) return reply('Format salah!\n\nTambah limit: addlimit <tag orang> <jumlah limit>\nKurangi limit: remlimit <tag orang> <jumlah limit>')
    
    // Extracting the mentioned user and the limit value from the command text
    let [who, limitValue] = text.split(' ')
    if (!who) return reply('Tag orang yang akan diubah limitnya!')
    if (isNaN(limitValue)) return reply('Jumlah limit harus angka!')

    // Converting limitValue to a number
    limitValue = parseInt(limitValue)

    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let users = global.db.data.users

    // Checking if the user is in the database, if not, initialize their limit to 0
    if (!users[user]) users[user] = { limit: 0 }

    // Determining whether to add or remove limit based on the command
    if (command === 'addlimit') {
        // Adding the specified limit to the user's account
        users[user].limit += limitValue
        reply(m.chat, `Berhasil menambahkan ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
    } else if (command === 'remlimit') {
        if (limitValue > users[user].limit) {
            // Set the user's limit to 0 if the specified limit is greater than the user's current limit
            users[user].limit = 0
            reply(m.chat, `Berhasil mengurangi limit untuk @${user.split('@')[0]}. Limit kini menjadi 0!`, m)
        } else {
            // Removing the specified limit from the user's account
            users[user].limit -= limitValue
            reply(m.chat, `Berhasil mengurangi ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
        }
    }
}
break
case 'dellimit':{
if (!isDev) return onlyOwner()
  if (!text) {
    return reply(m.chat, '• *Example :* .dellimit @user 10', m)
  }

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
     return reply(m.chat, 'Tag pengguna yang ingin dikurangi limitnya. Contoh: .dellimit @user 10', m)
  }

  let pointsToSubtract = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToSubtract)) {
    return reply(m.chat, 'Jumlah limit yang dimasukkan harus berupa angka. Contoh: .dellimit @user 10', m)
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      limit: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].limit -= pointsToSubtract;
  if (users[mentionedJid].limit < 0) {
    users[mentionedJid].limit = 0;
  }

  reply(m.chat, `Berhasil mengurangi ${pointsToSubtract} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};
break;
case 'resetlimit':{
if (!isDev) return onlyOwner()
let listt = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 0 : isNumber(args[0]) ? parseInt(args[0]) : 0
	lim = Math.max(1, lim)
	listt.map(([user, data], i) => (Number(data.limit = lim)))
reply(m.chat, `*Limit berhasil direset ${lim} / user*`, m)
}
            break 
            
case 'totalfitur':{
reply(`Total Fitur Bot : ${totalFitur()}`)
}
break

case "listpc":
      {
        if (!isDev) return onlyOwner()
        let anulistp = await store.chats
          .all()
          .filter((v) => v.id.endsWith(".net"))
          .map((v) => v.id);
        let teks = `${global.themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`;
        for (let i of anulistp) {
          let nama = store.messages[i].array[0].pushName;
          teks += `${global.themeemoji} *Name :* ${nama}\n${global.themeemoji} *User :* @${
            i.split("@")[0]
          }\n${global.themeemoji} *Chat :* https://wa.me/${
            i.split("@")[0]
          }\n\n────────────────────────\n\n`;
        }
        nova.sendTextWithMentions(m.chat, teks, m);
      }
      break;
    case "listgc":
      {
        if (!isDev) return onlyOwner()
        let anulistg = await store.chats
          .all()
          .filter((v) => v.id.endsWith("@g.us"))
          .map((v) => v.id);
        let teks = `${global.themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`;
        for (let i of anulistg) {
          let metadata = await nova.groupMetadata(i);
          teks += `${global.themeemoji} *Name :* ${
            metadata.subject
          }\n${global.themeemoji} *Owner :* ${
            metadata.owner !== undefined
              ? "@" + metadata.owner.split`@`[0]
              : "Unknown"
          }\n${global.themeemoji} *ID :* ${
            metadata.id
          }\n${global.themeemoji} *Made :* ${moment(metadata.creation * 1000)
            .tz("Asia/Jakarta")
            .format("DD/MM/YYYY HH:mm:ss")}\n${global.themeemoji} *Member :* ${
            metadata.participants.length
          }\n\n────────────────────────\n\n`;
        }
        nova.sendTextWithMentions(m.chat, teks, m);
      }
      break;
//————————————————————————//
// ISLAM FITUR

case 'jadwalsholat': { 
  if (!text) return reply(`Example: ${command} jakarta`)
async function jadwalSholat(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://umrotix.com/jadwal-sholat/${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        $(
          "body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ",
        ).each(function (a, b) {
          result = {
            tanggal: $(b).find("> div:nth-child(2)").text(),
            imsak: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)",
              )
              .text(),
            subuh: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)",
              )
              .text(),
            dzuhur: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)",
              )
              .text(),
            ashar: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)",
              )
              .text(),
            maghrib: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)",
              )
              .text(),
            isyak: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)",
              )
              .text(),
          };
          resolve(result);
        });
      })
      .catch(reject);
  });
}
let sholatt = await jadwalSholat(text)
reply(`
[ *JADWAL SHOLAT* ]

5 Waktu dari Daerah ${text}

Tanggal: ${sholatt.tanggal}
Imsak: ${sholatt.imsak}
Shubuh: ${sholatt.subuh}
Dzuhur: ${sholatt.dzuhur}
Ashar: ${sholatt.ashar}
Maghrib: ${sholatt.maghrib}
Isya: ${sholatt.isyak}
`)
}
break

case 'kisahnabi': {
if (!text) return reply("nama nabinya?")
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return reply("*Not Found*\n*Coba Jangan Gunakan Huruf Kapital*")
     
     let hasil = `_Nama Nabi :_ ${kisah.name} 
_Tanggal Lahir :_ ${kisah.thn_kelahiran}
_Tempat Lahir :_ ${kisah.tmp}
_*Usia :_ ${kisah.usia}

\`K I S A H  N A B I\`

${kisah.description}`

     reply(hasil)
}
break

case 'surah': {
  if (!q) return reply(`Example ${prefix+command} 113`)
async function surah(no){
	return new Promise(async(resolve, reject) => {
		axios.get('https://kalam.sindonews.com/surah/' + no)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			const ar = [];
			const id = [];
			const lt = [];
			const au = [];
			$('div.breadcrumb-new > ul > li:nth-child(5)').each(function(c,d) {
			result.audio = $(d).find('a').attr('href').replace('surah','audioframe')
			})
			$('div.ayat-arab').each(function(a, b) {
				ar.push($(b).text()) 
			})
			$('li > div.ayat-text').each(function(e, f) {
				id.push($(f).text().replace(',','').trim()) })
			$('div.ayat-latin').each(function(g, h) {
				lt.push($(h).text().trim())	})
			for(let i = 0; i < ar.length ; i++){
			result.push({
				arab: ar[i],
				indo: id[i],
				latin: lt[i],
			})
		}
			resolve(result)
		})
		.catch(reject)
	})
}
surah(q).then(result => {
 if (result.length === 0) {
 reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTexttt = `Hasil dari Surah untuk "${q}":\n\n`;
 result.forEach((result, index) => {
 replyTexttt += `${result.indo}\n${result.arab}\n${result.latin}\n\n`;
 });
 
 reply(replyTexttt);
 }).catch(error => {
 reply('Terjadi kesalahan saat memasuki angka di surah.');
 console.error(error);
 });
}
break
//————————————————————————//
// PANEL FITUR 

case "delsrv":{
      if (!isDev) return reply(`KHUSUS OWN`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(global.host + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break

case "delusr":{
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(global.host + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break

case 'cpadmin':{
if (!isDev) return onlyOwner()
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "sz"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(host + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
\`S U C C E S  C R E A T E\`

- *Id :* ${user.id}
- *Uuid :* ${user.uuid}
- *Username :* ${user.username}
- *Email :* ${user.email}
- *Name :* ${user.first_name} ${user.last_name}
- *Language :* ${user.language}
- *Admin :* ${user.root_admin}
- *Created At :* ${user.created_at}
- *Pasword :* ${password}
- *Login :* ${host}
`
    const listMessage = {

        text: tks,

    }

	

    await nova.sendMessage(m.chat, listMessage)

    await nova.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

- *Username :* ${username}
- *Password :* ${password}
*Login :* ${host}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`,

    })

} 
break

case "listusr": {
if (!isDev) return onlyOwner()
let page = args[0] ? args[0] : '1';
let f = await fetch(host + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list user:\n\n";

for (let user of users) {
let u = user.attributes;
messageText += `ID: ${user.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += ` ${user.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}

messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Users: ${res.meta.pagination.count}`;

await nova.sendMessage(m.chat, { text: messageText }, { quoted: m });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix ? prefix : '.'}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break

case "listadmin": {
  if (!isDev) return onlyOwner()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(global.host + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + application.api_key
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await nova.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "detusr": {
if (!isDev) return onlyOwner()
let usr = args[0]
let f = await fetch(global.host + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case 'updatesrv': {
if (!isDev) return reply("Tak nak")
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan: 
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(global.host + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let data = await f1.json()

let f = await fetch(global.host + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${tanggal2}
UPDATED AT: ${server.updated_at}`)
}
break

case 'reinstall': {
if (!isDev) return onlyOwner()
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(global.host + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case 'suspend': {
            if (!isDev) return onlyOwner()
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(global.host + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + application.api_key
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL SUSPEND..*')
        }
            break
case 'unsuspend': {
            if (!isDev) return reply(`Sory Cik Lu Siapa Bjirr`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(global.host + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + application.api_key
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
if (!isReseller) return onlyOwner()
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(global.host + "/api/ptz/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break

case "listsrv": {
if (!isDev) return onlyOwner()
let page = args[0] ? args[0] : '1';
let f = await fetch(global.host + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut adalah daftar server:\n\n";

for (let server of servers) {
let s = server.attributes;

let f3 = await fetch(global.host + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.c_api_key
}
});

let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;

messageText += `ID Server: ${s.id}\n`;
messageText += `Nama Server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}

messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Server: ${res.meta.pagination.count}`;

await nova.sendMessage(m.chat, { text: messageText }, { quoted: m });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix ? prefix : '.'}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case '1gb': case '2gb': case '3gb': case '4gb': case '5gb': case '6gb': case '7gb': case '8gb': case '9gb': case 'unli':{
if (!text) return reply(`username: contoh : hams`)
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "unli") {
ram = "0"
disknya = "0"
cpu = "0"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isDev) return  onlyOwner()
let password = generateRandomPassword().replace(/-/g, '')
let f = await fetch(host + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
},
"body": JSON.stringify({
"email": text.replace(' ', '').toLowerCase()+'@gmail.com',
"username": text.replace(' ', '').toLowerCase(),
"first_name": text.replace(' ', ''),
"last_name": "Nova",
"language": "en",
"password": password
})
})
let ress = await f.json();
if (ress.errors) return reply(JSON.stringify(ress.errors[0], null, 2))

let f1 = await fetch(host + "/api/application/nests/" + serverCreate.nestId + "/eggs/" + serverCreate.eggId, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let data = await f1.json();
let eggs = data.attributes

let f2 = await fetch(host + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key,
},
"body": JSON.stringify({
"name": text,
"description": hariini,
"user": parseInt(ress.attributes.id),
"egg": parseInt(serverCreate.eggId),
"docker_image": eggs.docker_image,
"startup": eggs.startup,
"environment": serverCreate.eggs.environment,
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": serverCreate.limits.db,
"backups": serverCreate.limits.backups,
"allocations": serverCreate.limits.allocation
},
deploy: {
locations: [parseInt(1)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
\`Berhasil Membuat Akun Panel ✅\`

- *ID :* ${server.id}
- *Nama :* ${text}
- *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
- *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
- *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
- *Created :* ${tanggal2}
- *Username :* ${text}
- *Pasword :* ${password}
- *Link :* ${global.host}
`
reply(teks)
}
break

case 'pelabuhan': {
    const command = args[0];
    const user = global.db.data.users[m.sender];

    // Inisialisasi pelabuhan dari data pengguna
    class Pelabuhan {
        constructor(user) {
            this.level = user.pelabuhanLevel || 1;
            this.maxPenumpang = user.pelabuhanMaxPenumpang || 10;
            this.saldo = user.pelabuhanSaldo || 100;
            this.pendapatanPerPenumpang = user.pelabuhanPendapatanPerPenumpang || 5;
            this.jumlahPenumpang = user.pelabuhanJumlahPenumpang || 0;
            this.biayaUpgrade = user.pelabuhanBiayaUpgrade || 50;
        }

        // Metode untuk mengupgrade pelabuhan
        upgrade() {
            if (this.saldo >= this.biayaUpgrade) {
                this.saldo -= this.biayaUpgrade;
                this.level++;
                this.maxPenumpang += 1;
                this.pendapatanPerPenumpang += 1;
                this.biayaUpgrade += 100;

                // Simpan perubahan ke database
                this.saveToDatabase();
                
                reply(`\`CONGRATOLATION 🎊\`
- [ 🚢 ] Pelabuhan berhasil diupgrade ke level ${this.level}!
- [ 👤 ] Max Penumpang sekarang: ${this.maxPenumpang}
- [ 💸 ] Pendapatan per penumpang sekarang: ${this.pendapatanPerPenumpang}
- [ 💰 ] Saldo tersisa: ${this.saldo}
- [ 🪙 ] Biaya upgrade berikutnya: ${this.biayaUpgrade}`);
            } else {
                reply("Saldo tidak cukup untuk upgrade!");
            }
        }

        // Metode untuk menambah saldo
        tambahSaldo(jumlah) {
            this.saldo += jumlah;
            this.saveToDatabase();
            reply(`Saldo berhasil ditambahkan. Saldo sekarang: ${this.saldo}`);
        }

        // Metode untuk menghitung pendapatan setiap jam
        hitungPendapatan() {
            const pendapatan = this.jumlahPenumpang * this.pendapatanPerPenumpang;
            this.saldo += pendapatan;
            this.saveToDatabase();
            reply(`Pendapatan dari ${this.jumlahPenumpang} penumpang: ${pendapatan}. Saldo sekarang: ${this.saldo}`);
        }

        // Metode untuk menampilkan informasi pelabuhan
        info() {
            reply(`\`INFO STATUS KAPAL PESIARMU\`

- [ 🚢 ] Level Pesiarmu : ${this.level}
- [ 👤 ] Max Penumpang : ${this.maxPenumpang}
- [ 👥 ] Jumlah Penumpang: ${this.jumlahPenumpang}
- [ 💰 ] Danamu: ${this.saldo}
- [ 💵 ] Pendapatan per Penumpang: ${this.pendapatanPerPenumpang}
- [ 💶 ] Biaya Upgrade Berikutnya: ${this.biayaUpgrade}`);
        }

    // Metode untuk menambah penumpang
    tambahPenumpang() {
        if (this.jumlahPenumpang < this.maxPenumpang) {
            this.jumlahPenumpang += 1; // Tambah satu penumpang
            this.saveToDatabase(); // Simpan perubahan ke database
        }
    }

    // Metode untuk menyimpan data ke database
    saveToDatabase() {
        user.pelabuhanLevel = this.level;
        user.pelabuhanMaxPenumpang = this.maxPenumpang;
        user.pelabuhanSaldo = this.saldo;
        user.pelabuhanPendapatanPerPenumpang = this.pendapatanPerPenumpang;
        user.pelabuhanJumlahPenumpang = this.jumlahPenumpang;
        user.pelabuhanBiayaUpgrade = this.biayaUpgrade;
        user.pelabuhanLastBermain = user.pelabuhanLastBermain || 0; // Waktu terakhir bermain
        user.pelabuhanCooldown = user.pelabuhanCooldown || 10; // Durasi cooldown dalam menit
    }

    // Metode untuk menambah penumpang setiap menit
    tambahPenumpangSetiapMenit(durasiMenit) {
        let menitKe = 0;

        const interval = setInterval(() => {
            menitKe++;
            this.tambahPenumpang(); // Tambah penumpang
            
            // Hitung pendapatan setiap menit
            this.hitungPendapatan();

            // Jika durasi menit sudah tercapai, hentikan interval
            if (menitKe >= durasiMenit) {
                clearInterval(interval);;
            }
        }, 60000); // 60000 ms = 1 menit
    }

    // Metode untuk bermain, menambah saldo setiap menit sesuai dengan jumlah penumpang
bermain(durasiMenit) {
    const now = Date.now();
    const cooldownTime = user.pelabuhanCooldown * 86400000; // Mengonversi hari ke milidetik

    // Cek apakah cooldown masih aktif
    if (now < user.pelabuhanLastBermain + cooldownTime) {
        const remainingTime = (user.pelabuhanLastBermain + cooldownTime) - now;
        const remainingMinutes = Math.ceil(remainingTime / 60000);
        return reply(`Anda masih dalam cooldown. Silakan tunggu ${remainingMinutes} menit sebelum bisa bermain lagi.`);
    }

    // Jika cooldown sudah berakhir, simpan waktu bermain
    user.pelabuhanLastBermain = now;

    let menitKe = 0;

    const interval = setInterval(() => {
        menitKe++;
        this.tambahPenumpang(); // Tambah penumpang
        const pendapatan = this.jumlahPenumpang * this.pendapatanPerPenumpang;
        this.saldo += pendapatan; // Tambah saldo sesuai dengan jumlah penumpang
        this.saveToDatabase(); // Simpan perubahan ke database
        reply(`\`STATUS UPDATE\`
        
- Menit ke-${menitKe}: Jumlah penumpang saat ini adalah ${this.jumlahPenumpang}

- Pendapatan dari ${this.jumlahPenumpang} penumpang: ${pendapatan}. Saldo sekarang: ${this.saldo}`);

        // Jika durasi menit sudah tercapai, hentikan interval
        if (menitKe >= durasiMenit) {
            clearInterval(interval);
            reply(`Bermain selesai setelah ${durasiMenit} menit.`);
        }
    }, 60000); // 60000 ms = 1 menit
}
}  
  // Inisialisasi pelabuhan dari data pengguna
    const pelabuhan = new Pelabuhan(user);
    const durasiMenit = 5; // Durasi dalam menit

    switch (command) {
        case 'help':
            reply(`\`PILIHAN MENU GAME PELABUHAN\`
1. pelabuhan info
2. pelabuhan upgrade
3. pelabuhan pendapatan
4. pelabuhan bermain`);
            break;
        case 'info':
            pelabuhan.info();
            break;
        case 'upgrade':
            pelabuhan.upgrade();
            break;
        case 'pendapatan':
            pelabuhan.hitungPendapatan();
            break;
    case 'bermain':
        pelabuhan.tambahPenumpangSetiapMenit(durasiMenit); // Menjalankan proses tambah penumpang
        pelabuhan.bermain(durasiMenit); // Menjalankan proses bermain
            break;
        default:
            reply(`\`PILIHAN MENU GAME PELABUHAN\`
1. pelabuhan info
2. pelabuhan upgrade
3. pelabuhan pendapatan
4. pelabuhan bermain`);
    }
}
break;
//————————————————————————//
default:
  if (nova.ai && nova.ai[m.sender]) {
    const { aiChoice, user } = nova.ai[m.sender];

    let response;
    if (/audio|video|image|sticker/.test(mime)) return;
    if (budy) {
      if (['bard', 'duckduckgo', 'luminai'].includes(aiChoice)) {
        switch (aiChoice) {
          case 'bard':
            response = (
              await axios.post('https://luminai.my.id/v3', {
                content: budy,
                user,
                headers: {
                'Authorization': `Bearer 8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876`
                         }
              })
            ).data.result;
            break;
          case 'duckduckgo':
            response = (
              await axios.post('https://luminai.my.id/v2', {
                text: budy,
                userid: user,
                headers: {
                'Authorization': `Bearer 8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876`
                         }
              })
            ).data.reply.reply;
            break;
          case 'luminai':
            response = (
              await axios.post('https://luminai.my.id/', {
                content: budy,
                user,
                headers: {
                'Authorization': `Bearer 8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876`
                         }
              })
            ).data.result;
            break;
        }
      } else {
        response =
          'AI tidak tersedia! Pastikan AI yang dipilih benar atau sudah diaktifkan.';
      }                          
      await nova.sendMessage(m.chat, { text: `${response}` });
      nova.ai[m.sender].lastactive = Date.now();
      console.log(nova.ai)
    }
  }

if (budy.startsWith('=>')) {
if (!isDev) return onlyOwner()
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isDev) return onlyOwner()
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isDev) return onlyOwner()
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(`${stdout}`)
})
}
//————————————————————————//
if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}
} : {})
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
//————————————————————————//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
nova.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//————————————————————————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Succes Update : '${__filename}'`))
	delete require.cache[file]
	require(file)
})