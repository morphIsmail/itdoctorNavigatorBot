const { Composer, Markup } = require('telegraf')
const composer = new Composer()

// Кнопка "Об авторе"
composer.hears('❓ Об авторе', async (ctx) => {
  try {
    await ctx.replyWithPhoto({
      source: 'img/portrait.jpg'
    }, {
      caption: ctx.i18n.t('author'),
      parse_mode: "HTML",
      reply_markup: JSON.stringify({"inline_keyboard": [
        [
          Markup.button.url('YouTube', 'https://www.youtube.com/c/ITDoctor/about'),
          Markup.button.url('Stepik', 'https://stepik.org/users/387773773/teach'),
          Markup.button.url('GitHub', 'https://github.com/morphIsmail')
        ],
        [
          Markup.button.url('Где меня искать?', 'https://t.me/itdoctor_official/29')
        ]
      ]})
    }, {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error('error in About button', e)
  }
})

// Кнопка "Поддержать"
composer.hears('💰 Поддержать', async (ctx) => {
  try {
    await ctx.reply(ctx.i18n.t('donation'), Markup.inlineKeyboard(
      [
        Markup.button.url('Boosty', 'https://boosty.to/itdoctor'),
        Markup.button.url('ЮMoney', 'https://sobe.ru/na/itdoctor'),
      ]
    ))
  } catch (e) {
    console.error('error in Support button', e)
  }
})

// Кнопка "Обратная связь"
composer.hears('✍️ Обратная связь', async (ctx) => {
  try {
    await ctx.reply(ctx.i18n.t('feedback'), Markup.inlineKeyboard(
      [
        Markup.button.url('Группа', 'https://t.me/itdoctorstudio'),
        Markup.button.url('Канал', 'https://t.me/itdoctor_official')
      ]
    ))
  } catch (e) {
    console.error('error in Feedback button', e)
  }
})

module.exports = composer