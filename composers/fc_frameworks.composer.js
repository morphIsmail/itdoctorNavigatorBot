const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib =  require('../modules/lib')

// Обработка кнопок из категории Фреймворки
composer.action('btn_category5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(ctx.i18n.t('frameworks'), Markup.inlineKeyboard([
      [
        Markup.button.callback('1. Bootstrap 4', 'category5_btn1'),
        Markup.button.callback('2. Bootstrap 5', 'category5_btn2'),
      ],
      [
        Markup.button.callback('3. Vue.js', 'category5_btn3'),
        Markup.button.callback('4. Materialize CSS', 'category5_btn4'),
      ],
    ]))
  } catch (e) {
    console.error(e)
  }
})

lib.send_msg_action('category5_btn1', 'img/y_course/c5_b1.jpg', 'frameworks_0', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIP8cwKmwmT2pAGFMnhI5qNO')]])
lib.send_msg_action('category5_btn2', 'img/y_course/c5_b2.jpg', 'frameworks_1', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINmJ4DV22gtPL4--HQ49Df3')]])
lib.send_msg_action('category5_btn3', 'img/s_course/4.jpg', 'frameworks_2', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPrHjeWPtEw6KWni2W35-XO')]])
lib.send_msg_action('category5_btn4', 'img/y_course/c5_b3.jpg', 'frameworks_3', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINySQR63hZJDR4qdvcK__PZ')]])

module.exports = composer