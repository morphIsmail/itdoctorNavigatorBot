const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Команда /css_generators - CSS генераторы кода
composer.command('css_generators', async (ctx) => {
  try {
    await ctx.reply('Я написал 4 простых, но полезных генератора CSS кода, которые сам постоянно использую в своей работе и хочется всегда держать их под рукой для быстрого доступа. Данный онлайн сервис содержит в себе: Генератор тени блока, Генератор тени текста, Генератор скруглений и Генератор треугольников', Markup.inlineKeyboard(
      [
        Markup.button.url('Генераторы', 'https://morphismail.github.io/myInstruments/'),
        Markup.button.url('Урок', 'https://youtu.be/u337lCjVwmE')
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

module.exports = composer