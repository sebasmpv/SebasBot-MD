import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['593992402778', '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👺💥', true],
  ['593995004980']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['593992402778', '593995004980']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'SebasBot' 
global.author = '@sebas' 

//--info FG
global.botName = 'sebas'
global.fgig = 'https://www.instagram.com/sebas.mvp_official0' 
global.fgsc = 'https://github.com/sebasmpv/SebasBot-MD' 
global.fgyt = 'https://youtube.com/@sebastian_official0'
global.fgpyp = 'https://www.paypal.me/sebastian720459'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = 'https://whatsapp.com/channel/0029Va8Ykl3F1YlR60HF5N3p' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029Va8Ykl3F1YlR60HF5N3p'
global.bgp = 'https://chat.whatsapp.com/CheA8ZOovJaF25coy0XGVW'
global.bgp2 = 'https://chat.whatsapp.com/CheA8ZOovJaF25coy0XGVW'
global.bgp3 = 'https://chat.whatsapp.com/CheA8ZOovJaF25coy0XGVW' //--𝑳𝜣𝑺 𝜞𝜮𝜟𝑳𝜮𝑺🫂💥

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
