const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Обработка кнопок из категории Frontend разработка
composer.action('btn_category4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(ctx.i18n.t('javascript'), Markup.inlineKeyboard([
      [Markup.button.callback('1. JavaScript с нуля', 'category4_btn1')],
      [Markup.button.callback('2. Уроки по JavaScript', 'category4_btn2')],
      [Markup.button.callback('3. Уроки по jQuery', 'category4_btn3')],
      [Markup.button.callback('4. Как сделать сайт', 'category4_btn4')],
      [Markup.button.callback('5. Уроки Node.js', 'category4_btn5')],
    ]))
  } catch (e) {
    console.error(e)
  }
})

lib.send_msg_action('category4_btn1', 'img/y_course/c4_b1.jpg', 'javascript_0', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINoCQtGZsMoVVCSgEH7gKQ5')]])
lib.send_msg_action('category4_btn2', 'img/y_course/c4_b2.jpg', 'javascript_1', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINjS4_G7KuYThU_T4uzpAuG')]])
lib.send_msg_action('category4_btn3', 'img/y_course/c4_b3.jpg', 'javascript_2', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIO6ys8_OmKphvobZxabbGBz')]])
lib.send_msg_action('category4_btn4', 'img/y_course/c4_b4.jpg', 'javascript_3', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINC98aWpSOHXCqaUkH6vd4K')]])
lib.send_msg_action('category4_btn5', 'img/y_course/c4_b5.jpg', 'javascript_4', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOmCbpBUPDIdkNqn9XSnhsG')]])

module.exports = composer