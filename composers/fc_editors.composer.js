const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Обработка кнопок из категории Редакторы кода
composer.action('btn_category1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(ctx.i18n.t('editors'), Markup.inlineKeyboard([
      [
        Markup.button.callback('1. Обзоры', 'category1_btn1'),
        Markup.button.callback('2. VS Code', 'category1_btn2')
      ],
      [
        Markup.button.callback('3. Sublime Text 3', 'category1_btn3'),
        Markup.button.callback('4. Brackets', 'category1_btn4')
      ]
    ]))
  } catch (e) {
    console.error(e)
  }
})

lib.send_msg_action('category1_btn1', 'img/y_course/c1_b1.jpg', 'editors_0', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIO74IrW8y6DohRKaL5o1N1F')]])
lib.send_msg_action('category1_btn2', 'img/y_course/c1_b2.jpg', 'editors_1', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMzp2sMA9NSj4UX_pI-jECS')]])
lib.send_msg_action('category1_btn3', 'img/y_course/c1_b3.jpg', 'editors_2', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIM_rvF3ARKFYu7jAjuRrON6')]])
lib.send_msg_action('category1_btn4', 'img/y_course/c1_b4.jpg', 'editors_3', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINjpdYGtf2podRhv6DdrvKn')]])

module.exports = composer