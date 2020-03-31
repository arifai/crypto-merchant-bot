const profile = async (ctx) => {
    const fromId = ctx.from.id;
    const msg = `*### Detail profil ###*\nID: ${fromId}\nPoin: 0\nSaldo: Rp. 0`;

    return await ctx.replyWithMarkdown(msg);
}

module.exports = { profile };