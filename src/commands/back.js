const Markup = require('telegraf/markup');
const config = require('./config');

const back = async (ctx) => {
    const msg = 'Yaah, dibatalkan 😢'
    const keyboard = Markup.keyboard(config.mainMenu).resize().extra();

    return await ctx.reply(msg, keyboard)
}

module.exports = { back };