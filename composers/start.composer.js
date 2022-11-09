const { Composer, Markup } = require('telegraf')
const composer = new Composer()

// Старт
composer.start((ctx) => {
  ctx.reply(ctx.i18n.t('start', { ctx }), Markup.keyboard([
    ["❓ Об авторе"], 
    ["💰 Поддержать"], 
    ["✍️ Обратная связь"]
    ]).resize())
  }
)

// Помощь
composer.help(async (ctx) => {
  try {
    await ctx.replyWithHTML(ctx.i18n.t('command'), Markup.inlineKeyboard([
      [
        Markup.button.url('Обзор бота', 'https://t.me/itdoctor_official/37'),
        Markup.button.url('Как создать бота', 'https://t.me/itdoctor_official/35')
      ],
      [
        Markup.button.url('Бот авто коды регионов России', 'https://t.me/carRegionCodesBot'),
      ],
    ]))
  } catch (e) {
    console.error('error in Help command', e)
  }
})

module.exports = composer