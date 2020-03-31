const about = async (ctx) => {
    const { USERNAME_BOT, VERSION } = process.env;

    const msg = `*### Tentang ###*\n🤖 Bot name: @${USERNAME_BOT}\n🎉 Version: ${VERSION}\n🧑 Powered by: @weneedenter`;

    return await ctx.replyWithMarkdown(msg);
}

module.exports = { about };