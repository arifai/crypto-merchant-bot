const about = async (ctx) => {
    const { USERNAME_BOT, VERSION } = process.env;

    const msg = `*### Tentang ###*\nBot name: @${USERNAME_BOT}\nVersion: ${VERSION}\nPowered by: @weneedenter`;

    return await ctx.replyWithMarkdown(msg);
}

module.exports = { about };