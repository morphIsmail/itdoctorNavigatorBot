const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Обработка кнопок из категории Основы вёрстки HTML и CSS
composer.action('btn_category3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(ctx.i18n.t('html_css'), Markup.inlineKeyboard([
      [
        Markup.button.callback('1. HTML', 'category3_btn1'),
        Markup.button.callback('2. CSS', 'category3_btn2')
      ],
      [
        Markup.button.callback('3. Emmet', 'category3_btn3'),
        Markup.button.callback('4. Формы', 'category3_btn4')
      ],
      [
        Markup.button.callback('5. Препроцессоры SCSS, Less', 'category3_btn5')
      ]
    ]))
  } catch (e) {
    console.error(e)
  }
})
lib.send_msg_action('category3_btn1', 'img/y_course/c3_b1.jpg', 'html_css_0', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMjV7Kff8yf8RA-XwjXVGgl')]])
lib.send_msg_action('category3_btn2', 'img/y_course/c3_b2.jpg', 'html_css_1', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOn8NTkZVsUn9jDCkdoJH9Z')]])
lib.send_msg_action('category3_btn3', 'img/y_course/c3_b3.jpg', 'html_css_2', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOYCKHrvn65GXvTRTnnGXyI')]])
lib.send_msg_action('category3_btn4', 'img/y_course/c3_b4.jpg', 'html_css_3', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOvzLBfgqsZKJJjphb-wugA')]])
lib.send_msg_action('category3_btn5', 'img/y_course/c3_b5.jpg', 'html_css_4', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIM2_X9rA_5DDE0rX9cjUQoX')]])

module.exports = composer