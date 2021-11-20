// Подключение dotenv для скрытия токена
require('dotenv').config()
// Телеграф для создания бота
const {
  Telegraf,
  Markup
} = require('telegraf')
// Подключить текстовые константы
const CONST = require('./modules/const')
// Подключить текст для бесплатных курсов
const free_course = require('./modules/free_course')
// Подключить текст для платных курсов
const paid_course = require('./modules/paid_course')
// Передать токен
const bot = new Telegraf(process.env.BOT_TOKEN)

// Старт бота
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : "незнакомец"}`+CONST.START_MSG, Markup.keyboard([
  ["❓ Об авторе"], 
  ["💰 Поддержать"], 
  ["✍️ Обратная связь"]
]).resize()))

// Помощь
bot.help(async (ctx) => {
  try {
    await ctx.replyWithHTML(CONST.COMMANDS, Markup.inlineKeyboard(
      [
        Markup.button.url('Обзор бота', 'https://youtu.be/IZj7up7CDdU'),
        Markup.button.url('Как создать бота', 'https://youtu.be/YxHWfDdjIek'),
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Кнопка "Об авторе"
bot.hears('❓ Об авторе', async (ctx) => {
  try {
    await ctx.replyWithPhoto({
      source: 'img/portrait.jpg'
    }, {
      caption: CONST.AUTHOR,
      parse_mode: "HTML",
      reply_markup: JSON.stringify({"inline_keyboard": [
        [
          Markup.button.url('YouTube', 'https://www.youtube.com/c/ITDoctor/about'),
          Markup.button.url('Udemy', 'https://www.udemy.com/user/useinov-ismail-asanovich/'),
          Markup.button.url('GitHub', 'https://github.com/morphIsmail')
        ]
      ]})
    }, {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
// Кнопка "Поддержать"
bot.hears('💰 Поддержать', async (ctx) => {
  try {
    await ctx.reply(CONST.DONATION, Markup.inlineKeyboard(
      [
        Markup.button.url('YooMoney', 'https://sobe.ru/na/itdoctor'),
        Markup.button.url('PayPal', 'https://paypal.me/itdoctorstudio')
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})
// Кнопка "Обратная связь"
bot.hears('✍️ Обратная связь', async (ctx) => {
  try {
    await ctx.reply('🤔 Чтобы связаться с моим создателем, автором канала ITDoctor, перейди в группу канала нажав на кнопку ниже.', Markup.inlineKeyboard(
      [Markup.button.url('Написать письмо', 'https://t.me/itdoctorstudio')]))
  } catch (e) {
    console.error(e)
  }
})

/**
 * Функция для отправки сообщения при нажатии по кнопке или выполнении команды
 * @param {String} id Идентификатор кнопки для обработки
 * @param {String} src Путь к изображению, или false чтобы отправить только текст
 * @param {String} text Текстовое сообщение для отправки
 * @param {Boolean} preview Блокировать превью у ссылок или нет, true - блокировать, false - нет
 */
function send_msg_action(id, src, text, keyboard=[[]], preview=false) {
  bot.action(id, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      if (src) {
        await ctx.replyWithPhoto({
          source: src
        }, {
          caption: text,
          parse_mode: "HTML",
          reply_markup: JSON.stringify({"inline_keyboard": keyboard})
        });
      } else {
        await ctx.replyWithHTML(text, {
          disable_web_page_preview: !preview,
          reply_markup: JSON.stringify({"inline_keyboard": keyboard})
        })
      }
    } catch (e) {
      console.error(e)
    }
  })
}

// Команда /free_course - Бесплатные курсы
bot.command('free_course', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Бесплатные курсы на <a href="https://www.youtube.com/c/ITDoctor/playlists">YouTube</a></b>', Markup.inlineKeyboard([
      [Markup.button.callback('Редакторы кода', 'btn_category1')],
      [Markup.button.callback('Инструменты веб-разработчика', 'btn_category2')],
      [Markup.button.callback('Основы вёрстки HTML и CSS', 'btn_category3')],
      [Markup.button.callback('Frontend разработка JS и jQuery', 'btn_category4')],
      [Markup.button.callback('CSS и JS Фреймворки', 'btn_category5')],
      [Markup.button.callback('Вёрстка сайта с нуля', 'btn_category6')],
      [Markup.button.callback('Backend разработка PHP и MySQL', 'btn_category7')],
      [Markup.button.callback('Лайфхаки', 'btn_category8')],
      [Markup.button.callback('3D и Gamedev', 'btn_category9')]
    ]))
  } catch (e) {
    console.error(e)
  }
})

// Обработка кнопок из категории Редакторы кода
bot.action('btn_category1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Редакторы кода</b>\n4 курса\n71 видео урок\n8 часов', Markup.inlineKeyboard([
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
send_msg_action('category1_btn1', 'img/free_course/c1_b1.jpg', free_course[0][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIO74IrW8y6DohRKaL5o1N1F')]])
send_msg_action('category1_btn2', 'img/free_course/c1_b2.jpg', free_course[0][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMzp2sMA9NSj4UX_pI-jECS')]])
send_msg_action('category1_btn3', 'img/free_course/c1_b3.jpg', free_course[0][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIM_rvF3ARKFYu7jAjuRrON6')]])
send_msg_action('category1_btn4', 'img/free_course/c1_b4.jpg', free_course[0][3], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINjpdYGtf2podRhv6DdrvKn')]])

// Обработка кнопок из категории Инструменты
bot.action('btn_category2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Инструменты веб-разработчика</b>\n6 курсов\n75 видео уроков\n15 часов 50 минут', Markup.inlineKeyboard([
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
send_msg_action('category2_btn1', 'img/free_course/c2_b1.jpg', free_course[1][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINwXopVMV34_gWKV0yESNwJ')]])
send_msg_action('category2_btn2', 'img/free_course/c2_b2.jpg', free_course[1][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOq9sXC3Hnj8KrCsP1egO6T')]])
send_msg_action('category2_btn3', 'img/free_course/c2_b3.jpg', free_course[1][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINU_F29Ijq_MgeUwjrKaVqW')]])
send_msg_action('category2_btn4', 'img/free_course/c2_b4.jpg', free_course[1][3], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINP2w4V37k8f5Jxp5j8ndfU')]])
send_msg_action('category2_btn5', 'img/free_course/c2_b5.jpg', free_course[1][4], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOMB2R_Kky05ZfiAx2_pbAH')]])
send_msg_action('category2_btn6', 'img/free_course/c2_b6.jpg', free_course[1][5], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIM7fEgWkXJvfiVOd2ecZyEE')]])

// Обработка кнопок из категории Основы вёрстки HTML и CSS
bot.action('btn_category3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Основы вёрстки HTML и CSS</b>\n5 курсов\n121 видео урок\n16 часов 30 минут', Markup.inlineKeyboard([
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
send_msg_action('category3_btn1', 'img/free_course/c3_b1.jpg', free_course[2][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMjV7Kff8yf8RA-XwjXVGgl')]])
send_msg_action('category3_btn2', 'img/free_course/c3_b2.jpg', free_course[2][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOn8NTkZVsUn9jDCkdoJH9Z')]])
send_msg_action('category3_btn3', 'img/free_course/c3_b3.jpg', free_course[2][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOYCKHrvn65GXvTRTnnGXyI')]])
send_msg_action('category3_btn4', 'img/free_course/c3_b4.jpg', free_course[2][3], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOvzLBfgqsZKJJjphb-wugA')]])
send_msg_action('category3_btn5', 'img/free_course/c3_b5.jpg', free_course[2][4], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIM2_X9rA_5DDE0rX9cjUQoX')]])

// Обработка кнопок из категории Frontend разработка
bot.action('btn_category4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Frontend разработка JS и jQuery</b>\n5 курсов\n127 видео уроков\n32 часа 25 минут', Markup.inlineKeyboard([
      [Markup.button.callback('1. Java Script для новичков 2021', 'category4_btn1')],
      [Markup.button.callback('2. Java Script базовый курс', 'category4_btn2')],
      [Markup.button.callback('3. Java Script продвинутый', 'category4_btn3')],
      [
        Markup.button.callback('4. jQuery', 'category4_btn4'),
        Markup.button.callback('5. Практика', 'category4_btn5')
      ]
    ]))
  } catch (e) {
    console.error(e)
  }
})
send_msg_action('category4_btn1', 'img/free_course/c4_b1.jpg', free_course[3][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINoCQtGZsMoVVCSgEH7gKQ5')]])
send_msg_action('category4_btn2', 'img/free_course/c4_b2.jpg', free_course[3][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINjS4_G7KuYThU_T4uzpAuG')]])
send_msg_action('category4_btn3', 'img/free_course/c4_b3.jpg', free_course[3][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPyoo60E-DPECak0G46k6k8')]])
send_msg_action('category4_btn4', 'img/free_course/c4_b4.jpg', free_course[3][3], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIO6ys8_OmKphvobZxabbGBz')]])
send_msg_action('category4_btn5', 'img/free_course/c4_b5.jpg', free_course[3][4], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINC98aWpSOHXCqaUkH6vd4K')]])

// Обработка кнопок из категории Фреймворки
bot.action('btn_category5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>CSS и JS Фреймворки</b>\n3 курса\n38 видео уроков\n9 часов 40 минут', Markup.inlineKeyboard([
      [
        Markup.button.callback('1. Bootstrap 4', 'category5_btn1'),
        Markup.button.callback('2. Bootstrap 5', 'category5_btn2'),
        Markup.button.callback('3. Vue.js', 'category5_btn3'),
      ],
    ]))
  } catch (e) {
    console.error(e)
  }
})
send_msg_action('category5_btn1', 'img/free_course/c5_b1.jpg', free_course[4][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIP8cwKmwmT2pAGFMnhI5qNO')]])
send_msg_action('category5_btn2', 'img/free_course/c5_b2.jpg', free_course[4][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINmJ4DV22gtPL4--HQ49Df3')]])
send_msg_action('category5_btn3', 'img/paid_course/4.jpg', free_course[4][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPrHjeWPtEw6KWni2W35-XO')]])

// Обработка кнопок из категории Вёрстка сайта с нуля
bot.action('btn_category6', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Вёрстка сайта с нуля</b>\n5 курсов\n63 видео урока\n27 часов', Markup.inlineKeyboard([
      [Markup.button.callback('1. Вёрстка из PSD, Flexbox + Less', 'category6_btn1')],
      [Markup.button.callback('2. Вёрстка из PSD, Bootstrap + BEM', 'category6_btn2')],
      [Markup.button.callback('3. Сайт на Wordpress, Bootstrap + SASS', 'category6_btn3')],
      [Markup.button.callback('4. Вёрстка из Marsy', 'category6_btn4')],
      [Markup.button.callback('5. Вёрстка из Figma', 'category6_btn5')],
    ]))
  } catch (e) {
    console.error(e)
  }
})
send_msg_action('category6_btn1', 'img/free_course/c6_b1.jpg', free_course[5][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPKCe3dSJfqkGXS-Ebky02v')]])
send_msg_action('category6_btn2', 'img/free_course/c6_b2.jpg', free_course[5][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMbdiCzaZuPjxXE24eAG5qo')]])
send_msg_action('category6_btn3', 'img/free_course/c6_b3.jpg', free_course[5][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMEIav0T-g0VBM52C3cAhLC')]])
send_msg_action('category6_btn4', 'img/free_course/c6_b4.jpg', free_course[5][3], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMsYvsJIxZ_PcLLwOHuvATv')]])
send_msg_action('category6_btn5', 'img/free_course/c6_b5.jpg', free_course[5][4], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMhg69FDlaLjzDermknWbaB')]])

// Обработка кнопок из категории Backend разработка
bot.action('btn_category7', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Backend разработка PHP и MySQL</b>\n8 курсов\n108 видео уроков\n31 час', Markup.inlineKeyboard([
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
      [Markup.button.callback('8. Windows и Linux', 'category7_btn8')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
send_msg_action('category7_btn1', 'img/free_course/c7_b1.jpg', free_course[6][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIN_pFzp1vlu0PD3KXUrPTVS')]])
send_msg_action('category7_btn2', 'img/free_course/c7_b2.jpg', free_course[6][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINWpCD2IbtMm-R5ClBA70Dw')]])
send_msg_action('category7_btn3', 'img/free_course/c7_b3.jpg', free_course[6][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPgHRvtoFnIxSxyTt6vKGpi')]])
send_msg_action('category7_btn4', 'img/free_course/c7_b4.jpg', free_course[6][3], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMXRHhNW_lQHR7c6bUeRVpP')]])
send_msg_action('category7_btn5', 'img/free_course/c7_b5.jpg', free_course[6][4], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPnp9VCtshQ1F5pPsRhpTws')]])
send_msg_action('category7_btn6', 'img/free_course/c7_b6.jpg', free_course[6][5], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINhZpY34wXFORiH-19OvNd4')]])
send_msg_action('category7_btn7', 'img/free_course/c7_b7.jpg', free_course[6][6], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMcsw_n7C_7nrlupjB4RPK_')]])
send_msg_action('category7_btn8', 'img/free_course/c7_b8.jpg', free_course[6][7], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINmSDbs8doggI-tJnnIJzev')]])

// Обработка кнопок из категории Лайфхаки
send_msg_action('btn_category8', false, free_course[7][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIObijZKfE6zxneHDULP384M')]])

// Обработка кнопок из категории 3D и Gamedev
bot.action('btn_category9', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>3D и Gamedev</b>\n3 курса\n17 видео уроков\n5 часов 16 минут', Markup.inlineKeyboard([
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
send_msg_action('category9_btn1', 'img/free_course/c9_b1.jpg', free_course[8][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIN8XC9TS47ul2_-if5H2Whr')]])
send_msg_action('category9_btn2', 'img/free_course/c9_b2.jpg', free_course[8][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINkImTtyf73C9AH-iNk56ns')]])
send_msg_action('category9_btn3', 'img/paid_course/6.jpg', free_course[8][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIPZ8LgiKvEg6IGCDlvNzLz-')]])

// Команда /paid_course - платные курсы
bot.command('paid_course', async (ctx) => {
  try {
    await ctx.replyWithHTML(`<b>Платные курсы на Udemy и Stepik</b>`, Markup.inlineKeyboard([
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
      [Markup.button.callback('Frontend разработчик на HTML, CSS и JavaScript', 'btn_paid_12')],
    ]))
  } catch (e) {
    console.error(e)
  }
})
send_msg_action('btn_paid_1', 'img/paid_course/1.jpg', paid_course['html'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/itdoctor_html_css/?referralCode=A2836649F9071CB3F903'),
  Markup.button.url('Stepik', 'https://stepik.org/z/101175')
]])
send_msg_action('btn_paid_2', 'img/paid_course/2.jpg', paid_course['js'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/javascript-super/?referralCode=4C766EEB83F94DC1AE19'),
  //Markup.button.url('Stepik', '')
]])
send_msg_action('btn_paid_3', 'img/paid_course/3.jpg', paid_course['jquery'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/jquery-itd/?referralCode=06E84B2AD8EF9A680F2A'),
  //Markup.button.url('Stepik', '')
]])
send_msg_action('btn_paid_4', 'img/paid_course/4.jpg', paid_course['vue'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/vuejs-itd/?referralCode=D19FBC885A62ACA1CE8A'),
  Markup.button.url('Stepik', 'https://stepik.org/z/99855')
]])
send_msg_action('btn_paid_5', 'img/paid_course/5.jpg', paid_course['git'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/git-plus-github/?referralCode=28513EF1DA5DCB593C62'),
  Markup.button.url('Stepik', 'https://stepik.org/z/101092')
]])
send_msg_action('btn_paid_6', 'img/paid_course/6.jpg', paid_course['bolt'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/draft/4159514/?referralCode=A747EA924EEE4118DAEC'),
  Markup.button.url('Stepik', 'https://stepik.org/z/101091')
]])
send_msg_action('btn_paid_7', 'img/paid_course/7.jpg', paid_course['mysql'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/mysql-and-phpmyadmin/?referralCode=CF3FF19B65634D02C659'),
  Markup.button.url('Stepik', 'https://stepik.org/z/101093')
]])
send_msg_action('btn_paid_8', 'img/paid_course/8.jpg', paid_course['php'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/php-itdoctor/?referralCode=B35480F4A2AD149AB1C6'),
  //Markup.button.url('Stepik', '')
]])
send_msg_action('btn_paid_9', 'img/paid_course/9.jpg', paid_course['wp'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/landing-page-wordpress/?referralCode=1E19E5F729F287FA9466'),
  //Markup.button.url('Stepik', '')
]])
send_msg_action('btn_paid_10', 'img/paid_course/10.jpg', paid_course['gulp'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/draft/4239418/?referralCode=8E0E5539308712A9DF1C'),
  Markup.button.url('Stepik', 'https://stepik.org/z/101074')
]])
send_msg_action('btn_paid_11', 'img/paid_course/11.jpg', paid_course['bs'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/draft/4246612/?referralCode=DCD972B91654B47D63FA'),
  Markup.button.url('Stepik', 'https://stepik.org/z/101173')
]])
send_msg_action('btn_paid_12', 'img/paid_course/12.jpg', paid_course['frontend'], [[
  Markup.button.url('Udemy', 'https://www.udemy.com/course/draft/4402699/?referralCode=897A9E65D809AD2359AA'),
  //Markup.button.url('Stepik', '')
]])

// Команда /crib_js_date - Шпаргалка по date JS
bot.command('crib_js_date', async (ctx) => {
  try {
    await ctx.reply('Шпаргалка по работе с датой и временем на языке JavaScript', Markup.inlineKeyboard(
      [
        Markup.button.url('Шпаргалка', 'https://t.me/itdoctorstudio/1699'),
        Markup.button.url('Урок', 'https://youtu.be/LBebvQI6raI')
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Команда /crib_python - Шпаргалка по Python
bot.command('crib_python', async (ctx) => {
  try {
    await ctx.reply('Шпаргалка по языку Python', Markup.inlineKeyboard(
      [
        Markup.button.url('Шпаргалка', 'https://t.me/itdoctorstudio/1700'),
        Markup.button.url('Урок', 'https://youtu.be/aC6_iSq6Ngo')
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Команда /learn_css_grid - Изучить CSS Grid
bot.command('learn_css_grid', async (ctx) => {
  try {
    await ctx.reply('Изучить CSS Grid', Markup.inlineKeyboard(
      [
        Markup.button.url('Справочник', 'https://morphismail.github.io/css-grid-manual/'),
        Markup.button.url('Урок', 'https://youtu.be/yfDwiukzuUQ'),
        Markup.button.url('Игра', 'http://cssgridgarden.com/#ru'),
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Команда /learn_css_flexbox - Изучить CSS Flexbox
bot.command('learn_css_flexbox', async (ctx) => {
  try {
    await ctx.reply('Изучить CSS Flexbox', Markup.inlineKeyboard(
      [
        Markup.button.url('Справочник', 'https://yoksel.github.io/flex-cheatsheet/'),
        Markup.button.url('Урок', 'https://youtu.be/NddTNohooIs')
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Команда /learn_emmet - Быстрая вёрстка Emmet
bot.command('learn_emmet', async (ctx) => {
  try {
    await ctx.reply('Emmet позволяет использовать простые сокращения, которые позволяют очень быстро писать код на HTML и CSS', Markup.inlineKeyboard(
      [
        Markup.button.url('Документация', 'https://t.me/itdoctorstudio/1735'),
        Markup.button.url('Уроки', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOYCKHrvn65GXvTRTnnGXyI')
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Команда /training_plan_2021 - План обучения в 2021
bot.command('training_plan_2021', async (ctx) => {
  try {
    await ctx.reply('Это план обучения созданию сайтов в 2021 году. Посмотрев видео урок вы узнаете, как можно на моем канале бесплатно научится создавать сайты с 0. Обязательно пользуйтесь схемой-навигатором, там все подробно расписано по пунктам', Markup.inlineKeyboard(
      [
        Markup.button.url('Схема PDF', 'https://t.me/itdoctorstudio/1879'),
        Markup.button.url('Схема SVG', 'https://t.me/itdoctorstudio/1736'),
        Markup.button.url('Урок', 'https://youtu.be/GnF56lwjMb4'),
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Команда /css_generators - CSS генераторы кода
bot.command('css_generators', async (ctx) => {
  try {
    await ctx.reply('Я написал 4 простых, но полезных генератора CSS кода, которые сам постоянно использую в своей работе и хочется всегда держать их под рукой для быстрого доступа. Данный онлайн сервис содержит в себе: Генератор тени блока, Генератор тени текста, Генератор скруглений и Генератор треугольников', Markup.inlineKeyboard(
      [
        Markup.button.url('Генераторы', 'https://morphismail.github.io/myInstruments/'),
        Markup.button.url('Урок', 'https://youtu.be/u337lCjVwmE')
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Команда /materials - Полезные материалы
bot.command('materials', async (ctx) => {
  try {
    await ctx.reply('В этом разделе собраны полезные материалы, которые могут пригодиться любому разработчику', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Репозитироии GitHub', 'btn_category_m1')],
        [Markup.button.callback('Полезные сервисы', 'btn_category_m2')],
        [Markup.button.callback('Иконки', 'btn_category_m3')],
        [Markup.button.callback('3D Моделирование', 'btn_category_m4')],
        [Markup.button.callback('Книги', 'btn_category_m5')],
      ]
      ))
  } catch (e) {
    console.error(e)
  }
})
bot.action('btn_category_m1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.reply('Мои репозитории на GitHub. Вы можете смотреть код который я пишу, а так же читать подробное описание под кодом в файле README и запускать код в некоторых проектах (ссылку вы найдете в разделе About или Environments)', Markup.inlineKeyboard(
      [
        [Markup.button.url('Возможности ссылок', 'https://github.com/morphIsmail/featuresWithLinks')],
        [Markup.button.url('Фикс даты у фото', 'https://github.com/morphIsmail/date-rename')],
        [Markup.button.url('Курс по PHP', 'https://github.com/morphIsmail/learn-php')],
        [Markup.button.url('Курс по Python', 'https://github.com/morphIsmail/learn-python')],
        [Markup.button.url('Дата и время на JS', 'https://github.com/morphIsmail/stringTimeJS')],
        [Markup.button.url('Калькулятор на JS', 'https://github.com/morphIsmail/calculatorJS')],
        [Markup.button.url('Фильмы на Node.js', 'https://github.com/morphIsmail/films_json')],
        [Markup.button.url('Сборка Gulp 4', 'https://github.com/morphIsmail/gulp_build_3')],
        [Markup.button.url('ДМБ таймер', 'https://github.com/morphIsmail/timer')],
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})
bot.action('btn_category_m2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.reply('Полезные сервисы для разработчиков с помощью которых можно упростить и ускорить выполнение многих задач', Markup.inlineKeyboard(
      [
        [Markup.button.url('2 месяца бесплатного хостинга', 'http://handyhost.ru/?ref=101062')],
        [Markup.button.url('Шрифты', 'https://fonts.google.com/')],
        [Markup.button.url('Код онлайн', 'https://codepen.io/')],
        [Markup.button.url('Генератор фона', 'http://bg.siteorigin.com/')],
        [Markup.button.url('Онлайн конвертер', 'https://image.online-convert.com/ru')],
        [Markup.button.url('Палитра цветов', 'https://www.materialpalette.com/')],
        [Markup.button.url('Сделать адаптивное видео', 'http://embedresponsively.com/')],
        [Markup.button.url('Генератор градиента', 'https://www.colorzilla.com/gradient-editor/')],
        [Markup.button.url('Генератор фона', 'http://www.heropatterns.com/')],
        [Markup.button.url('Создать диаграмму', 'https://app.diagrams.net/')],
        [Markup.button.url('Слайдер Swiper', 'https://swiperjs.com/')],
        [Markup.button.url('Слайдер Slick', 'http://kenwheeler.github.io/slick/')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})
bot.action('btn_category_m3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.reply('Тут собраны различные полезные сервисы на которых можно скачать иконки или иконочные шрифты для подключения на своем сайте', Markup.inlineKeyboard(
      [
        [Markup.button.url('Font Awesome', 'https://fontawesome.com/')],
        [Markup.button.url('Material Icons', 'https://materializecss.com/icons.html')],
        [Markup.button.url('Иконки Flaticon', 'https://www.flaticon.com/')],
        [Markup.button.url('Fontello', 'https://fontello.com/')],
        [Markup.button.url('Wordpress Dashicons', 'https://developer.wordpress.org/resource/dashicons/')],
        [Markup.button.url('Наборы иконок Icomoon', 'https://icomoon.io/')],
        [Markup.button.url('Bootstrap 5 Icons', 'https://icons.getbootstrap.com/')],
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})
bot.action('btn_category_m4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.reply('В этом разделе собраны полезные сайты, где можно найти модели, текстуры, PBR материалы и многое другое для 3D моделирования', Markup.inlineKeyboard(
      [
        [Markup.button.url('Модели для 3D печати', 'https://www.thingiverse.com/')],
        [Markup.button.url('Текстуры', 'https://www.textures.com/library')],
        [Markup.button.url('HDRI, текстуры, модели', 'https://polyhaven.com/')],
        [Markup.button.url('Чертежи', 'https://www.dimensions.com/')],
        [Markup.button.url('PBR материалы', 'https://ambientcg.com/list?sort=Popular')],
        [Markup.button.url('Чертежи автомобилей', 'http://www.3dcar.ru/blueprints/')],
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})
bot.action('btn_category_m5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.reply('Книги по различным языкам, библиотекам и фреймворкам. Тут собраны только лучшие книги большинство из которых я сам прочитал и могу гарантировать их качество. Так же много задач для программирования на любом языке и отдельно для практики на JavaScript', Markup.inlineKeyboard(
      [
        [Markup.button.url('Книги по HTML и CSS', 'https://t.me/itdoctorstudio/2133')],
        [Markup.button.url('Книги по JavaScript', 'https://t.me/itdoctorstudio/2134')],
        [Markup.button.url('Книги по PHP', 'https://t.me/itdoctorstudio/2135')],
        [Markup.button.url('Книги по Python', 'https://t.me/itdoctorstudio/2139')],
        [Markup.button.url('Задачи по программированию', 'https://t.me/itdoctorstudio/2140')],
        [Markup.button.url('Книга по Git', 'https://t.me/itdoctorstudio/2141')],
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Запустить бота
bot.launch()

// Для удобства в консоле
console.log("Бот запущен")

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))