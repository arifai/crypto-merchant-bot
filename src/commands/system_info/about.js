const about = async (ctx) => {
    const { BOT_USERNAME, VERSION } = process.env;

    const msg = `*### Tentang ###*\n🤖 Bot name: @${BOT_USERNAME}\n🎉 Version: ${VERSION}\n👨‍💻 Powered by: @weneedenter`;

    return await ctx.replyWithMarkdown(msg);
}

module.exports = { about };