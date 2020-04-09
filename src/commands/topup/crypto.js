const Markup = require('telegraf/markup');
const config = require('../config');

const topupCrypto = async (ctx) => {
    const msg = 'Pilih salah satu menu';
    const keyboard = Markup.keyboard(config.crypto).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { topupCrypto };