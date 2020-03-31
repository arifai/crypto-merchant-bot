const Markup = require('telegraf/markup');
const config = require('../config');

const buy = async (ctx) => {
    const msg = 'Silahkan pilih produk';
    const keyboard = Markup.keyboard(config.buyProduct).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { buy };