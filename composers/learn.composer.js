const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Команда /learn_css_grid - Изучить CSS Grid
composer.command('learn_css_grid', async (ctx) => {
  try {
    await ctx.reply('Изучить CSS Grid', Markup.inlineKeyboard(
      [
        Markup.button.url('Справочник', 'https://morphismail.github.io/css-grid-manual/'),
        Markup.button.url('Урок', 'https://youtu.be/yfDwiukzuUQ'),
        Markup.button.url('Игра', 'http://cssgridgarden.com/#ru'),
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Команда /learn_css_flexbox - Изучить CSS Flexbox
composer.command('learn_css_flexbox', async (ctx) => {
  try {
    await ctx.reply('Изучить CSS Flexbox', Markup.inlineKeyboard(
      [
        Markup.button.url('Справочник', 'https://yoksel.github.io/flex-cheatsheet/'),
        Markup.button.url('Урок', 'https://youtu.be/NddTNohooIs')
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Команда /learn_emmet - Быстрая вёрстка Emmet
composer.command('learn_emmet', async (ctx) => {
  try {
    await ctx.reply('Emmet позволяет использовать простые сокращения, которые позволяют очень быстро писать код на HTML и CSS', Markup.inlineKeyboard([
      [
        Markup.button.url('Документация', 'https://t.me/itdoctorstudio/1735'),
        Markup.button.url('Уроки', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOYCKHrvn65GXvTRTnnGXyI')
      ],
      [
        Markup.button.callback('Тренажер по вёрстке, плагин Emmet', 'btn_paid_13'),
      ],
    ]))
  } catch (e) {
    console.error(e)
  }
})

module.exports = composer