const Markup = require('telegraf/markup');
const config = require('../config');

const buy = async (ctx) => {
    const msg = 'Silahkan pilih produk';
    const keyboard = Markup.keyboard(config.crypto).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { buy };