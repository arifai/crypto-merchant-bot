const Markup = require('telegraf/markup');
const config = require('../config');

const systemInfo = async (ctx) => {
    const msg = 'Pilih salah satu menu';
    const keyboard = Markup.keyboard(config.systemInfo).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { systemInfo };