// Get environment variables
require('dotenv').config();

// Get dependencies
const Telegraf = require('telegraf');
const { profile } = require('./commands/profile');
const { back, start } = require('./commands');
const { buy, buyBtc, buyDoge, buyEth, buyXlm } = require('./commands/buy');
const { about, systemInfo } = require('./commands/system_info');

const { BOT_TOKEN, USERNAME_BOT } = process.env;

const bot = new Telegraf(BOT_TOKEN, { username: USERNAME_BOT });

// bot.use(Telegraf.log());

// Setup start
bot.start(start);

// Bot hears
bot.hears('Beli', buy)
    .hears('BTC', buyBtc)
    .hears('ETH', buyEth)
    .hears('Doge', buyDoge)
    .hears('XLM', buyXlm)
    .hears('Profil', profile)
    .hears('Sistem', systemInfo)
    .hears('Tentang', about)
    .hears('Batalkan', back)

bot.startPolling();

console.log(`@${USERNAME_BOT} is running...`);

// Catch error
bot.catch(console.error);