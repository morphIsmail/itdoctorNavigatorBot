const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Команда /s_course - платные курсы
composer.command('s_course', async (ctx) => {
  try {
    await ctx.replyWithHTML(`<b>Курсы на Stepik</b>`, Markup.inlineKeyboard([
      [Markup.button.callback('Frontend разработчик на HTML, CSS и JavaScript', 'btn_paid_12')],
      [
        Markup.button.callback('HTML + CSS', 'btn_paid_1'),
        Markup.button.callback('Супер JavaScript', 'btn_paid_2')
      ],
      [
        Markup.button.callback('jQuery с нуля', 'btn_paid_3'),
        Markup.button.callback('Игра на Vue.js', 'btn_paid_4')
      ],
      [
        Markup.button.callback('Git + GitHub', 'btn_paid_5'),
        Markup.button.callback('Unity Bolt', 'btn_paid_6')
      ],
      [Markup.button.callback('Базы данных MySQL', 'btn_paid_7')],
      [Markup.button.callback('Язык программирования PHP', 'btn_paid_8')],
      [Markup.button.callback('Сайт на Wordpress', 'btn_paid_9')],
      [Markup.button.callback('Планировщик задач Gulp', 'btn_paid_10')],
      [Markup.button.callback('Bootstrap 5 для начинающих', 'btn_paid_11')], 
    ]))
  } catch (e) {
    console.error(e)
  }
})

lib.send_msg_action('btn_paid_12', 'img/s_course/12.jpg', 's_frontend', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/113402')]])
lib.send_msg_action('btn_paid_1', 'img/s_course/1.jpg', 's_html', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/101175')]])
lib.send_msg_action('btn_paid_2', 'img/s_course/2.jpg', 's_js', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/113653')]])
lib.send_msg_action('btn_paid_3', 'img/s_course/3.jpg', 's_jquery', composer, [[
  //Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/113651')
  Markup.button.url('Курс почти готов', 'https://stepik.org/users/387773773/teach')
]])
lib.send_msg_action('btn_paid_4', 'img/s_course/4.jpg', 's_vue', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/99855')]])
lib.send_msg_action('btn_paid_5', 'img/s_course/5.jpg', 's_git', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/101092')]])
lib.send_msg_action('btn_paid_6', 'img/s_course/6.jpg', 's_bolt', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/101091')]])
lib.send_msg_action('btn_paid_7', 'img/s_course/7.jpg', 's_mysql', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/101093')]])
lib.send_msg_action('btn_paid_8', 'img/s_course/8.jpg', 's_php', composer, [[
  //Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/113652')
  Markup.button.url('Курс почти готов', 'https://stepik.org/users/387773773/teach')
]])
lib.send_msg_action('btn_paid_9', 'img/s_course/9.jpg', 's_wp', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/course/113393/promo')]])
lib.send_msg_action('btn_paid_10', 'img/s_course/10.jpg', 's_gulp', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/101074')]])
lib.send_msg_action('btn_paid_11', 'img/s_course/11.jpg', 's_bs', composer, [[Markup.button.url('Подробнее о курсе', 'https://stepik.org/z/101173')]])

module.exports = composer