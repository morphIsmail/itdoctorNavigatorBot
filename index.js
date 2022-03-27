// Подключить Telegraf для создания бота и Markup для создания клавиатуры
const { Telegraf, Markup } = require('telegraf')
// Подключение path
const path = require('path')
// Подключение dotenv для скрытия токена
require('dotenv').config()

// Создать бота
const bot = new Telegraf(process.env.BOT_TOKEN)

// Подключить TelegrafI18n для создания текстовых словарей
const TelegrafI18n = require('telegraf-i18n')
const i18n = new TelegrafI18n({
  defaultLanguage: 'ru',
  allowMissing: false, // Default true
  directory: path.resolve(__dirname, 'locales')
})
bot.use(i18n.middleware())

// Команда start и help
bot.use(require('./composers/start.composer'))
// Кнопки меню: "Об авторе", "Поддержать" и "Обратная связь"
bot.use(require('./composers/menu.composer'))

// Бесплатные курсы: все категории
bot.use(require('./composers/fc.composer'))
// Категория "Редакторы кода"
bot.use(require('./composers/fc_editors.composer'))
// Категория "Инструменты веб-разработчика"
bot.use(require('./composers/fc_tools.composer'))
// Категория "Основы вёрстки HTML и CSS"
bot.use(require('./composers/fc_html_css.composer'))
// Категория "Основы вёрстки HTML и CSS"
bot.use(require('./composers/fc_html_css.composer'))
// Категория "Frontend разработка JS и jQuery"
bot.use(require('./composers/fc_javascript.composer'))
// Категория "CSS и JS Фреймворки"
bot.use(require('./composers/fc_frameworks.composer'))
// Категория "Вёрстка сайта с нуля"
bot.use(require('./composers/fc_site_layout.composer'))
// Категория "Backend разработка PHP и MySQL"
bot.use(require('./composers/fc_backend.composer'))
// Категория "Лайфхаки"
bot.use(require('./composers/fc_lifehacks.composer'))
// Категория "3D и Gamedev"
bot.use(require('./composers/fc_modeling.composer'))

// Курсы Stepik
bot.use(require('./composers/stepik.composer'))

// План обучения
bot.use(require('./composers/training_plan.composer'))

// Шпаргалки
bot.use(require('./composers/cribs.composer'))

// Изучи Flexbox, Grid, Emmet
bot.use(require('./composers/learn.composer'))

// CSS генераторы кода
bot.use(require('./composers/services.composer'))

// Полезные материалы
bot.use(require('./composers/files.composer'))

// Запустить бота
bot.launch()
console.log("Бот запущен")
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))