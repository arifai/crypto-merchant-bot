const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');
// const profile = require('./keyboard/profile');
require('dotenv').config();

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

// bot.use(Telegraf.log());

bot.start((ctx) => {
    const firstName = ctx.from.first_name;

    ctx.reply(`Hi, ${firstName}. Selamat datang di Crypto Merchant.`, Markup
        .keyboard([
            ['💰 Beli', '💳 Topup', '👨 Profil'],
            ['💸 Voucher', '💻 Sistem', 'ℹ Bantuan']
        ])
        .resize()
        .extra()
    );
});

bot.hears('👨 Profil', (ctx) =>
    ctx.reply(`### Detail profil ###
    ℹ ID user: ${ctx.from.id}
    💸 Point: 12752
    💳 Saldo: Rp. 1.268.380
    ⏺ Status: Aktif
    ⌚ Tanggal daftar: 30 Maret 2020`)
);

bot.launch();