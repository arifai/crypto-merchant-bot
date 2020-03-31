const Markup = require('telegraf/markup');
const config = require('./config');

const start = async (ctx) => {
    const firstName = ctx.from.first_name;
    const msg = `Hai ${firstName}, selamat datang di *Crypto Merchant* 😊`;
    const keyboard = Markup.keyboard(config.mainMenu).resize().extra();

    return await ctx.replyWithMarkdown(msg, keyboard);
}

module.exports = { start };