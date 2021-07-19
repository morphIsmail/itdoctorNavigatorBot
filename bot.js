// Подключение dotenv для скрытия токена
require('dotenv').config()
// Телеграф для создания бота
const {
  Telegraf,
  Markup
} = require('telegraf')
// Подключить файл с текстовыми константами
const COMMANDS = require('./const')
// Передать токен
const bot = new Telegraf(process.env.BOT_TOKEN)
// const buttons = Markup.inlineKeyboard([
//   [Markup.callbackButton('Бесплатные курсы', 'Платные курсы')],
//   [Markup.callbackButton('Полезные материалы', 'Автор')]
// ])
// Старт бота
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name} ${ctx.message.from.last_name}! 
Этот бот - навигатор по каналу ITDoctor, он поможет тебе найти нужную информацию для изучения.
Посмотреть все доступные команды /help`, Markup.keyboard([
  ['Бесплатные курсы', 'Платные курсы'],
  ['Полезные материалы', 'Автор']
])))
// Обработка события текст
/*
bot.on('text', (ctx) => {
  ctx.reply(ctx.message.text)
})
*/

// Помощь
bot.help((ctx) => ctx.reply(COMMANDS))
//bot.on('sticker', (ctx) => ctx.reply('👍'))

// Вывести что то в консоль
bot.hears('log', (ctx) => console.log(ctx.message))

bot.launch()

// Для удобства в консоле
console.log("Бот запущен")

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))