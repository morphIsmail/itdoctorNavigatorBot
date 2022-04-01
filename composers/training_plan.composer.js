const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Команда /training_plan - План обучения
composer.command('training_plan', async (ctx) => {
  try {
    await ctx.reply(ctx.i18n.t('training_plan'), Markup.inlineKeyboard(
      [
        Markup.button.url('Скачать PDF', 'https://t.me/itdoctor_official/58'),
        Markup.button.url('Видео обзор', 'https://youtu.be/GnF56lwjMb4'),
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

module.exports = composer