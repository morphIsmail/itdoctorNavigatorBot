const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Обработка кнопок из категории 3D и Gamedev
composer.action('btn_category9', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(ctx.i18n.t('modeling'), Markup.inlineKeyboard([
      [
        Markup.button.callback('1. Blender', 'category9_btn1'),
        Markup.button.callback('2. Unity', 'category9_btn2'),
      ],
      [
        Markup.button.callback('3. Платформер Unity Bolt', 'category9_btn3'),
      ],
    ]))
  } catch (e) {
    console.error(e)
  }
})

lib.send_msg_action('category9_btn1', 'img/y_course/c9_b1.jpg', 'modeling_0', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIN8XC9TS47ul2_-if5H2Whr')]])
lib.send_msg_action('category9_btn2', 'img/y_course/c9_b2.jpg', 'modeling_1', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINkImTtyf73C9AH-iNk56ns')]])
lib.send_msg_action('category9_btn3', 'img/s_course/6.jpg', 'modeling_2', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPZ8LgiKvEg6IGCDlvNzLz-')]])

module.exports = composer