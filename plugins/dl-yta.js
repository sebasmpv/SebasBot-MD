
import ytdl from 'ytdl-core'
import fs from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
import os from 'os'
import fg from 'api-dylux'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ ${mssg.example} :\n${usedPrefix + command} https://youtu.be/4s0TZHj9-2o?si=VhgZ2ZtqxyrIi0tT`
  if (!args[0].match(/youtu/gi)) throw `❎ ${mssg.noLink('YouTube')}`
   m.react(rwait)
 let chat = global.db.data.chats[m.chat]
 let q = '128kbps'
 
 try {
 
		//let res = await fetch(global.API('fgmods', '/api/downloader/yta', { url: args[0], quality: q}, 'apikey'))
		//let yt = await res.json()
		const yt = await fg.yta(args[0]) 
		let { title, dl_url, quality, size, sizeB } = yt
		
		conn.sendFile(m.chat, dl_url, title + '.mp3', `
  *𝙎𝙚𝙗𝙖𝙨 𝙔𝙏𝘿𝙊𝘾*
  
▢ *📌${mssg.title}* : ${title}
▢ *⚖️${mssg.size}* : ${size}
`.trim(), m, false, { mimetype: 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done)
 	} catch {
  try {
  	
	const { title, dl_url } = await ytmp3(args[0]);
  
		conn.sendFile(m.chat, dl_url, title + '.mp3', `
  *𝙎𝙚𝙗𝙖𝙨 𝙔𝙏𝘿𝙊𝘾*
  
▢ *📌${mssg.title}* : ${title}
`.trim(), m, false, { mimetype: 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done)
        } catch {
			await m.reply(`❎ ${mssg.error}`)
} 
}

}
handler.help = ['ytmp3 <url>']
handler.tags = ['dl']
handler.command = ['ytmp3', 'fgmp3'] 
handler.diamond = false

export default handler

const streamPipeline = promisify(pipeline);

async function ytmp3(url) {
    const videoInfo = await ytdl.getInfo(url);
    const { videoDetails } = videoInfo;
    const { title, thumbnails, lengthSeconds, viewCount, uploadDate } = videoDetails;
    const thumbnail = thumbnails[0].url;
    
    const audioStream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });
    const tmpDir = os.tmpdir();
    const audioFilePath = `${tmpDir}/${title}.mp3`;

    await streamPipeline(audioStream, fs.createWriteStream(audioFilePath));

    return {
        title,
        views: viewCount,
        publish: uploadDate,
        duration: lengthSeconds,
        quality: '128kbps',
        thumb: thumbnail,
        dl_url: audioFilePath
    };
}
