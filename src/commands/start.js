const Markup = require('telegraf/markup');
const config = require('./config');

const start = async (ctx) => {
    const firstName = ctx.from.first_name;
    const username = ctx.from.username;
    const keyboard = Markup.keyboard(config.mainMenu).resize().extra();

    const msgWithUsername = `Hai ${firstName}, selamat datang di *Crypto Merchant* 😊`;
    const msgWithoutUsername = `Hai ${firstName}, selamat datang di *Crypto Merchant*. Untuk menggunakan Crypto Merchant silahkan menambahkan username Telegram terlebih dahulu ya, jika sudah silahkan gunakan perintah /start kembali.`;

    const msg = username == null ? msgWithoutUsername : msgWithUsername;
    const kybd = username == null ? null : keyboard;

    return await ctx.replyWithMarkdown(msg, kybd);
}

module.exports = { start };