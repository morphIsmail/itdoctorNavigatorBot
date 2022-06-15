const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Обработка кнопок из категории Вёрстка сайта с нуля
composer.action('btn_category6', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(ctx.i18n.t('site_layout'), Markup.inlineKeyboard([
      [Markup.button.callback('1. Вёрстка из PSD, Flexbox + Less', 'category6_btn1')],
      [Markup.button.callback('2. Вёрстка из PSD, Bootstrap + BEM', 'category6_btn2')],
      [Markup.button.callback('3. Сайт на Wordpress, Bootstrap + SASS', 'category6_btn3')],
      [Markup.button.callback('4. Вёрстка из Marsy', 'category6_btn4')],
      [Markup.button.callback('5. Вёрстка из Figma', 'category6_btn5')],
      [Markup.button.callback('6. Вёрстка из Figma 2022', 'category6_btn6')],
    ]))
  } catch (e) {
    console.error(e)
  }
})
lib.send_msg_action('category6_btn1', 'img/y_course/c6_b1.jpg', 'site_layout_0', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPKCe3dSJfqkGXS-Ebky02v')]])
lib.send_msg_action('category6_btn2', 'img/y_course/c6_b2.jpg', 'site_layout_1', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMbdiCzaZuPjxXE24eAG5qo')]])
lib.send_msg_action('category6_btn3', 'img/y_course/c6_b3.jpg', 'site_layout_2', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMEIav0T-g0VBM52C3cAhLC')]])
lib.send_msg_action('category6_btn4', 'img/y_course/c6_b4.jpg', 'site_layout_3', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMsYvsJIxZ_PcLLwOHuvATv')]])
lib.send_msg_action('category6_btn5', 'img/y_course/c6_b5.jpg', 'site_layout_4', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMhg69FDlaLjzDermknWbaB')]])
lib.send_msg_action('category6_btn6', 'img/y_course/c6_b6.jpg', 'site_layout_5', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINcGnhxCG6U0kzja1Wh7fcd')]])

module.exports = composer