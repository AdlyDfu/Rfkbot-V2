//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
╭═══ 〔 𝐃𝐎𝐍𝐀𝐒𝐈 〕 ═══
║│➸ Dana:
║│➸ *088233832771*
║│
║│➸ Pulsa:
║│➸ *089612698583*
║│➸ *088233832771*
║│
║│➸ Saweria:
║│➸ *saweria.co/mursid25*
║│
║│➸ OWNER :
║│➸ *wa.me/6288233832771*
║╰──────────────────
╰═══════════════════
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
