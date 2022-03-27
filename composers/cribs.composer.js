const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Команда /cribs - шпаргалки
composer.command('cribs', async (ctx) => {
  try {
    await ctx.replyWithHTML(`<b>Шпаргалки</b>`, Markup.inlineKeyboard([
      [
        Markup.button.callback('JavaScript Date', 'btn_crib_1'),
        Markup.button.callback('JavaScript regExp', 'btn_crib_2'),
      ],
      [
        Markup.button.callback('Python', 'btn_crib_3'),
        Markup.button.callback('Git', 'btn_crib_4'),
      ],
    ]))
  } catch (e) {
    console.error(e)
  }
})

// Шпаргалка по Date JS
lib.send_msg_action('btn_crib_1', false, 'crib_date_js', composer, [
  [
    Markup.button.url('Скачать', 'https://t.me/itdoctorstudio/1699'),
    Markup.button.url('Обзор', 'https://youtu.be/LBebvQI6raI')
  ]
])

// Шпаргалка по regExp JS
lib.send_msg_action('btn_crib_2', false, 'crib_regExp_js', composer, [
  [
    Markup.button.url('Скачать', 'https://t.me/itdoctorstudio/4899'),
    Markup.button.url('Обзор', 'https://youtu.be/uaDmuoZtIK4'),
    Markup.button.url('Тренажер', 'https://regex101.com/')
  ]
])

// Шпаргалка по Python
lib.send_msg_action('btn_crib_3', false, 'crib_python', composer, [
  [
    Markup.button.url('Скачать', 'https://t.me/itdoctorstudio/1700'),
    Markup.button.url('Обзор', 'https://youtu.be/aC6_iSq6Ngo')
  ]
])

// Шпаргалка по Git
lib.send_msg_action('btn_crib_4', false, 'crib_git', composer, [
  [
    Markup.button.url('Скачать', 'https://t.me/itdoctorstudio/4897'),
  ]
])

module.exports = composer