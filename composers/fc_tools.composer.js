const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Обработка кнопок из категории Инструменты
composer.action('btn_category2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(ctx.i18n.t('tools'), Markup.inlineKeyboard([
      [
        Markup.button.callback('1. Полезные сервисы', 'category2_btn1'),
        Markup.button.callback('2. Обзоры', 'category2_btn2')
      ],
      [
        Markup.button.callback('3. Open Server', 'category2_btn3'),
        Markup.button.callback('4. Photoshop', 'category2_btn4')
      ],
      [
        Markup.button.callback('5. Git & GitHub', 'category2_btn5'),
        Markup.button.callback('6. Сборщик Gulp 4', 'category2_btn6')
      ]
    ]))
  } catch (e) {
    console.error(e)
  }
})

lib.send_msg_action('category2_btn1', 'img/y_course/c2_b1.jpg', 'tools_0', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINwXopVMV34_gWKV0yESNwJ')]])
lib.send_msg_action('category2_btn2', 'img/y_course/c2_b2.jpg', 'tools_1', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOq9sXC3Hnj8KrCsP1egO6T')]])
lib.send_msg_action('category2_btn3', 'img/y_course/c2_b3.jpg', 'tools_2', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINU_F29Ijq_MgeUwjrKaVqW')]])
lib.send_msg_action('category2_btn4', 'img/y_course/c2_b4.jpg', 'tools_3', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINP2w4V37k8f5Jxp5j8ndfU')]])
lib.send_msg_action('category2_btn5', 'img/y_course/c2_b5.jpg', 'tools_4', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOMB2R_Kky05ZfiAx2_pbAH')]])
lib.send_msg_action('category2_btn6', 'img/y_course/c2_b6.jpg', 'tools_5', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIM7fEgWkXJvfiVOd2ecZyEE')]])

module.exports = composer