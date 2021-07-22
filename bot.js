// Подключение dotenv для скрытия токена
require('dotenv').config()
// Телеграф для создания бота
const {
  Telegraf,
  Markup
} = require('telegraf')
// Подключить текстовые константы
const COMMANDS = require('./modules/const')
// Подключить текст для бесплатных курсов
const free_course = require('./modules/free_course')
// Подключить текст для платных курсов Udemy
const paid_course_u = require('./modules/paid_course_u')
// Подключить текст для платных курсов Stepik
const paid_course_s = require('./modules/paid_course_s')
// Передать токен
const bot = new Telegraf(process.env.BOT_TOKEN)

// Старт бота
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}! Этот бот призван помочь тебе научиться создавать сайты, программировать, моделировать и изучить многое другое. Посмотреть все доступные команды /help`))

// Функция для обработки кнопок, name - название кнопки, src - путь к изображению, text - текст для вывода
function addActionBot(name, src, text) {
  bot.action(name, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      if (src !== false) {
        await ctx.replyWithPhoto({
          source: src
        });
      }
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: true
      })
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
      [Markup.button.callback('Фреймворки', 'btn_category5')],
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
addActionBot('category1_btn1', 'img/free_course/c1_b1.jpg', free_course[0][0])
addActionBot('category1_btn2', 'img/free_course/c1_b2.jpg', free_course[0][1])
addActionBot('category1_btn3', 'img/free_course/c1_b3.jpg', free_course[0][2])
addActionBot('category1_btn4', 'img/free_course/c1_b4.jpg', free_course[0][3])

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
addActionBot('category2_btn1', 'img/free_course/c2_b1.jpg', free_course[1][0])
addActionBot('category2_btn2', 'img/free_course/c2_b2.jpg', free_course[1][1])
addActionBot('category2_btn3', 'img/free_course/c2_b3.jpg', free_course[1][2])
addActionBot('category2_btn4', 'img/free_course/c2_b4.jpg', free_course[1][3])
addActionBot('category2_btn5', 'img/free_course/c2_b5.jpg', free_course[1][4])
addActionBot('category2_btn6', 'img/free_course/c2_b6.jpg', free_course[1][5])

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
addActionBot('category3_btn1', 'img/free_course/c3_b1.jpg', free_course[2][0])
addActionBot('category3_btn2', 'img/free_course/c3_b2.jpg', free_course[2][1])
addActionBot('category3_btn3', 'img/free_course/c3_b3.jpg', free_course[2][2])
addActionBot('category3_btn4', 'img/free_course/c3_b4.jpg', free_course[2][3])
addActionBot('category3_btn5', 'img/free_course/c3_b5.jpg', free_course[2][4])

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
addActionBot('category4_btn1', 'img/free_course/c4_b1.jpg', free_course[3][0])
addActionBot('category4_btn2', 'img/free_course/c4_b2.jpg', free_course[3][1])
addActionBot('category4_btn3', 'img/free_course/c4_b3.jpg', free_course[3][2])
addActionBot('category4_btn4', 'img/free_course/c4_b4.jpg', free_course[3][3])
addActionBot('category4_btn5', 'img/free_course/c4_b5.jpg', free_course[3][4])

// Обработка кнопок из категории Фреймворки
bot.action('btn_category5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Фреймворки</b>\n2 курса\n23 видео урока\n6 часов 40 минут', Markup.inlineKeyboard([
      [
        Markup.button.callback('1. Bootstrap 4', 'category5_btn1'),
        Markup.button.callback('2. Bootstrap 5', 'category5_btn2')
      ],
    ]))
  } catch (e) {
    console.error(e)
  }
})
addActionBot('category5_btn1', 'img/free_course/c5_b1.jpg', free_course[4][0])
addActionBot('category5_btn2', 'img/free_course/c5_b2.jpg', free_course[4][1])

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
addActionBot('category6_btn1', 'img/free_course/c6_b1.jpg', free_course[5][0])
addActionBot('category6_btn2', 'img/free_course/c6_b2.jpg', free_course[5][1])
addActionBot('category6_btn3', 'img/free_course/c6_b3.jpg', free_course[5][2])
addActionBot('category6_btn4', 'img/free_course/c6_b4.jpg', free_course[5][3])
addActionBot('category6_btn5', 'img/free_course/c6_b5.jpg', free_course[5][4])

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
addActionBot('category7_btn1', 'img/free_course/c7_b1.jpg', free_course[6][0])
addActionBot('category7_btn2', 'img/free_course/c7_b2.jpg', free_course[6][1])
addActionBot('category7_btn3', 'img/free_course/c7_b3.jpg', free_course[6][2])
addActionBot('category7_btn4', 'img/free_course/c7_b4.jpg', free_course[6][3])
addActionBot('category7_btn5', 'img/free_course/c7_b5.jpg', free_course[6][4])
addActionBot('category7_btn6', 'img/free_course/c7_b6.jpg', free_course[6][5])
addActionBot('category7_btn7', 'img/free_course/c7_b7.jpg', free_course[6][6])
addActionBot('category7_btn8', 'img/free_course/c7_b8.jpg', free_course[6][7])

// Обработка кнопок из категории Лайфхаки
addActionBot('btn_category8', false, free_course[7][0])

// Обработка кнопок из категории 3D и Gamedev
bot.action('btn_category9', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>3D и Gamedev</b>\n2 курса\n3 видео урока\n2 часа 16 минут', Markup.inlineKeyboard([
      Markup.button.callback('1. Blender', 'category9_btn1'),
      Markup.button.callback('2. Unity', 'category9_btn2'),
    ]))
  } catch (e) {
    console.error(e)
  }
})
addActionBot('category9_btn1', 'img/free_course/c9_b1.jpg', free_course[8][0])
addActionBot('category9_btn2', 'img/free_course/c9_b2.jpg', free_course[8][1])

// Команда /paid_course_u - Udemy курсы
bot.command('paid_course_u', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Платные курсы на <a href="https://www.udemy.com/user/useinov-ismail-asanovich/">Udemy</a></b>', {
      disable_web_page_preview: true
    })
    await ctx.reply('Выберите курс для того чтобы получить подробную информацию о нём.', Markup.inlineKeyboard([
      [
        Markup.button.callback('HTML + CSS', 'btn_category_u1'),
        Markup.button.callback('Супер JavaScript', 'btn_category_u2')
      ],
      [
        Markup.button.callback('jQuery с нуля', 'btn_category_u3'),
        Markup.button.callback('Игра на Vue.js', 'btn_category_u4')
      ],
      [
        Markup.button.callback('Git + GitHub', 'btn_category_u5'),
        Markup.button.callback('Unity Bolt', 'btn_category_u6')
      ],
      [Markup.button.callback('Базы данных MySQL', 'btn_category_u7')],
      [Markup.button.callback('Язык программирования PHP', 'btn_category_u8')],
      [Markup.button.callback('Сайт на Wordpress', 'btn_category_u9')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
addActionBot('btn_category_u1', 'img/paid_course/u1.jpg', paid_course_u[0])
addActionBot('btn_category_u2', 'img/paid_course/u2.jpg', paid_course_u[1])
addActionBot('btn_category_u3', 'img/paid_course/u3.jpg', paid_course_u[2])
addActionBot('btn_category_u4', 'img/paid_course/u4.jpg', paid_course_u[3])
addActionBot('btn_category_u5', 'img/paid_course/u5.jpg', paid_course_u[4])
addActionBot('btn_category_u6', 'img/paid_course/u6.jpg', paid_course_u[5])
addActionBot('btn_category_u7', 'img/paid_course/u7.jpg', paid_course_u[6])
addActionBot('btn_category_u8', 'img/paid_course/u8.jpg', paid_course_u[7])
addActionBot('btn_category_u9', 'img/paid_course/u9.jpg', paid_course_u[8])

// Команда /paid_course_s - Stepik курсы
bot.command('paid_course_s', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Платные курсы на <a href="https://stepik.org/users/387773773/teach">Stepik</a></b>', {
      disable_web_page_preview: true
    })
    await ctx.reply('Выберите курс для того чтобы получить подробную информацию о нём.', Markup.inlineKeyboard([
      [Markup.button.callback('Игра на Vue.js', 'btn_category_s4')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
addActionBot('btn_category_s4', 'img/paid_course/u4.jpg', paid_course_s[3])

// Команда /crib_js_date - Шпаргалка по date JS
bot.command('crib_js_date', async (ctx) => {
  try {
    await ctx.replyWithHTML('<a href="https://t.me/itdoctorstudio/1699">Шпаргалка по работе с датой и временем на JavaScript</a>\n<a href="https://youtu.be/LBebvQI6raI">Видео урок</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Команда /crib_python - Шпаргалка по Python
bot.command('crib_python', async (ctx) => {
  try {
    await ctx.replyWithHTML('<a href="https://t.me/itdoctorstudio/1700">Шпаргалка по Python</a>\n<a href="https://youtu.be/aC6_iSq6Ngo">Видео урок</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Команда /learn_css_grid - Изучить CSS Grid
bot.command('learn_css_grid', async (ctx) => {
  try {
    await ctx.replyWithHTML('<a href="https://morphismail.github.io/css-grid-manual/">Справочник по CSS Grid</a>\n<a href="https://youtu.be/yfDwiukzuUQ">Видео урок</a>\n<a href="http://cssgridgarden.com/#ru">Игра Grid Garden</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Команда /learn_css_flexbox - Изучить CSS Flexbox
bot.command('learn_css_flexbox', async (ctx) => {
  try {
    await ctx.replyWithHTML('<a href="https://yoksel.github.io/flex-cheatsheet/">Справочник по CSS Flexbox</a>\n<a href="https://youtu.be/NddTNohooIs">Видео урок</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Команда /learn_emmet - Быстрая вёрстка Emmet
bot.command('learn_emmet', async (ctx) => {
  try {
    await ctx.replyWithHTML('Emmet позволяет использовать простые сокращения, которые позволяют очень быстро писать код на HTML и CSS.\n<a href="https://t.me/itdoctorstudio/1735">Документация Emmet</a>\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIOYCKHrvn65GXvTRTnnGXyI">Видео уроки по Emmet</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Команда /training_plan_2021 - План обучения в 2021
bot.command('training_plan_2021', async (ctx) => {
  try {
    await ctx.replyWithHTML('Посмотрев видео вы узнаете, как можно на моем канале бесплатно научится создавать сайты с 0. Обязательной пользуйтесь схемой-навигатором, там все подробно расписано по пунктам.\n<a href="https://t.me/itdoctorstudio/1879">Схема обучения (PDF)</a>\n<a href="https://t.me/itdoctorstudio/1736">Схема обучения (SVG)</a>\n<a href="https://youtu.be/GnF56lwjMb4">Видео урок по схеме</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Команда /css_generators - CSS генераторы кода
bot.command('css_generators', async (ctx) => {
  try {
    await ctx.replyWithHTML('Я написал 4 простых, но полезных генератора CSS кода, которые сам постоянно использую в своей работе и хочется всегда держать их под рукой для быстрого доступа. Данный онлайн сервис содержит в себе: Генератор тени блока, Генератор тени текста, Генератор скруглений и Генератор треугольников.\n<a href="https://morphismail.github.io/myInstruments/">CSS Генераторы онлайн</a>\n<a href="https://youtu.be/u337lCjVwmE">Видео урок</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Команда /files - Полезные материалы
bot.command('files', async (ctx) => {
  try {
    await ctx.replyWithHTML('Этот раздел пока пуст.', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Команда /author - Об авторе канала ITDoctor
bot.command('author', async (ctx) => {
  try {
    await ctx.replyWithPhoto({
      source: 'img/portrait.jpg'
    });
    await ctx.replyWithHTML(`Меня зовут, Исмаил Усеинов, я автор образовательного канала ITDoctor (ITD), который создан для обучения начинающих разработчиков созданию сайтов своими силами. Здесь вы найдете уроки по HTML, CSS, JavaScript, PHP, MySQL, Gulp, различным фреймворкам и библиотекам и многое другое, что нужно знать будущему Frontend-разработчику.

<a href="https://www.youtube.com/c/ITDoctor">YouTube</a>
<a href="https://www.udemy.com/user/useinov-ismail-asanovich/">Курсы Udemy</a>
<a href="https://github.com/morphIsmail">GitHub</a>
ismail_2016@mail.ru

Поддержать автора ₽ублем:
1. Сбер: 4274 3200 3233 1582
2. <a href="https://sobe.ru/na/itdoctor">YooMoney</a>
3. <a href="https://paypal.me/itdoctorstudio">PayPal</a>

Социальные сети:
<a href="https://t.me/itdoctorstudio">Telegram</a>
<a href="https://instagram.com/ismail_asanovich/">Instagram</a>
<a href="https://vk.com/itdoctorstudio">VK</a>
<a href="https://www.youtube.com/c/IsmailUseinov">YouTube Live</a>
<a href="https://www.patreon.com/IsmailUseinov?fan_landing=true">Patreon</a>
<a href="https://www.facebook.com/drinei">Facebook</a>
<a href="https://twitter.com/ITDoctor_morph">Twitter</a>
<a href="https://www.tiktok.com/@overmind95">TikTok</a>
<a href="https://www.pinterest.ru/drinei92/_created/">Pinterest</a>
<a href="https://zen.yandex.ru/id/5f994406f3d1290ebf9287d5">Я.Дзен</a>
<a href="https://rutube.ru/channel/23500045/">Rutube</a>
`, {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Помощь
bot.help((ctx) => ctx.reply(COMMANDS))

// Запустить бота
bot.launch()

// Для удобства в консоле
console.log("Бот запущен")

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))