// Get environment variables
require('dotenv').config();

// Get dependencies
const Telegraf = require('telegraf');
const { profile } = require('./commands/profile');
const { back, start } = require('./commands');
const { buy, buyBtc, buyDoge, buyEth, buyXlm } = require('./commands/buy');
const { about, systemInfo } = require('./commands/system_info');
const { topupCrypto, topup } = require('./commands/topup');

const { BOT_TOKEN, BOT_USERNAME } = process.env;

const bot = new Telegraf(BOT_TOKEN, { username: BOT_USERNAME });

// bot.use(Telegraf.log());

// Setup start
bot.start(start);

// Bot hears
bot.hears('🛒 Beli', buy)
    .hears('✅ BTC', buyBtc)
    .hears('✅ ETH', buyEth)
    .hears('✅ Doge', buyDoge)
    .hears('✅ XLM', buyXlm)
    .hears('💳 Topup', topup)
    .hears('✅ Cryptocurrency', topupCrypto)
    .hears('🤵 Profil', profile)
    .hears('🖥 Sistem', systemInfo)
    .hears('❕ Tentang', about)
    .hears('⬅️ Batalkan', back)

bot.startPolling();

console.log(`@${BOT_USERNAME} is running...`);

// Catch error
bot.catch(console.error);