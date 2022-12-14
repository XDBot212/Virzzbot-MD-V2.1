import fetch from 'node-fetch'
import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {
    const ultah = new Date('Oktober 7 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let sewa = `
         〔 llı OWNER ${namebot} ıll 〕
    
Nama: ${nameowner}
Umur: ${umurowner}
Asal: ${asalowner}
Status: ${pacarowner}

Nomor: ${nomorowner}

${botdate}
`
        let img1 = fs.readFileSync('./thumbnail.jpg');
        let img2 = fs.readFileSync('./media/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, await (await fetch(`https://telegra.ph/file/5c153385dea29f12da603.jpg`)).buffer(), [["Menu", usedPrefix + "menu"], ["Sewa Bot", usedPrefix + "sewa"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `donasinya omm<3`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/5c153385dea29f12da603.jpg`)).buffer(),
                        sourceUrl: 'https://youtu.be/-'
            }
        }
    })
}
handler.help = ['owner']
handler.tags = ['Bot']

handler.command = /^(owner|creator)$/i

export default handler
