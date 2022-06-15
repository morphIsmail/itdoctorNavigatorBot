const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib =  require('../modules/lib')

// Обработка кнопок из категории Backend разработка
composer.action('btn_category7', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(ctx.i18n.t('backend'), Markup.inlineKeyboard([
      [
        Markup.button.callback('1. PHP', 'category7_btn1'),
        Markup.button.callback('2. БД MySQL', 'category7_btn2')
      ],
      [
        Markup.button.callback('3. Wordpress', 'category7_btn3'),
        Markup.button.callback('4. Python', 'category7_btn4')
      ],
      [Markup.button.callback('5. Одностраничный сайт на Wordpress', 'category7_btn5')],
      [Markup.button.callback('6. Многостраничный сайт на Wordpress', 'category7_btn6')],
      [Markup.button.callback('7. Алгоритмы и блок-схемы', 'category7_btn7')],
      [Markup.button.callback('8. Windows и Linux', 'category7_btn8')],
      [Markup.button.callback('9. Уроки по PHP и MySQL', 'category7_btn9')],
    ]))
  } catch (e) {
    console.error(e)
  }
})

lib.send_msg_action('category7_btn1', 'img/y_course/c7_b1.jpg', 'backend_0', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIN_pFzp1vlu0PD3KXUrPTVS')]])
lib.send_msg_action('category7_btn2', 'img/y_course/c7_b2.jpg', 'backend_1', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINWpCD2IbtMm-R5ClBA70Dw')]])
lib.send_msg_action('category7_btn3', 'img/y_course/c7_b3.jpg', 'backend_2', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPgHRvtoFnIxSxyTt6vKGpi')]])
lib.send_msg_action('category7_btn4', 'img/y_course/c7_b4.jpg', 'backend_3', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMXRHhNW_lQHR7c6bUeRVpP')]])
lib.send_msg_action('category7_btn5', 'img/y_course/c7_b5.jpg', 'backend_4', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPnp9VCtshQ1F5pPsRhpTws')]])
lib.send_msg_action('category7_btn6', 'img/y_course/c7_b6.jpg', 'backend_5', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINhZpY34wXFORiH-19OvNd4')]])
lib.send_msg_action('category7_btn7', 'img/y_course/c7_b7.jpg', 'backend_6', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMcsw_n7C_7nrlupjB4RPK_')]])
lib.send_msg_action('category7_btn8', 'img/y_course/c7_b8.jpg', 'backend_7', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINmSDbs8doggI-tJnnIJzev')]])
lib.send_msg_action('category7_btn9', 'img/y_course/c7_b9.jpg', 'backend_8', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPUDtVRCM4aEWQwdONcTXW5')]])

module.exports = composer