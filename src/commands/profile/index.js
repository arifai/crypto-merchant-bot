const profile = async (ctx) => {
    const fromId = ctx.from.id;
    const msg = `*### Detail profil ###*\n🆔 ID: ${fromId}\n💰 Poin: 0\n💵 Saldo: Rp. 0`;

    return await ctx.replyWithMarkdown(msg);
}

module.exports = { profile };