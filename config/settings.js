const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6282261065144'] // no own
global.author = 'Fin Ofc' // nama author 
global.packname = 'Fin Ofc bot whatsapp' // nama pack sticker
global.namabot = 'Fin Md' // nama bot mu
global.group = 'https://chat.whatsapp.com/BGyvKG4b0Qz2DnGXZTXuAX' // grup mu
global.pic = 'https://telegra.ph/file/1ee2290eedd3330a66df8.jpg' // logo bot



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
