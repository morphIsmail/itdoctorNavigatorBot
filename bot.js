// Подключение dotenv для скрытия токена
require('dotenv').config()
// Телеграф для создания бота
const {
  Telegraf,
  Markup
} = require('telegraf')
// Подключить текстовые константы
const COMMANDS = require('./const')
// Подключить текст для курсов
const free_course = require('./free_course')
// Передать токен
const bot = new Telegraf(process.env.BOT_TOKEN)

// Старт бота
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name} ${ctx.message.from.last_name}! Посмотреть все доступные команды /help`))

// Команда /free_course - Бесплатные курсы
bot.command('free_course', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Бесплатные курсы на <a href="https://www.youtube.com/c/ITDoctor/playlists">YouTube</a></b>', Markup.inlineKeyboard([
      [Markup.button.callback('Редакторы кода', 'btn_category1')],
      [Markup.button.callback('Инструменты веб-разработчика', 'btn_category2')],
      [Markup.button.callback('Основы вёрстки HTML и CSS', 'btn_category3')],
      [Markup.button.callback('Frontend разработка JS и jQuery', 'btn_category8')],
      [Markup.button.callback('Фреймворки', 'btn_category9')],
      [Markup.button.callback('Вёрстка сайта с нуля', 'btn_category4')],
      [Markup.button.callback('Backend разработка PHP и MySQL', 'btn_category5')],
      [Markup.button.callback('Лайфхаки', 'btn_category6')],
      [Markup.button.callback('3D и Gamedev', 'btn_category7')]
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
      [Markup.button.callback('1. Обзоры', 'category1_btn1'), Markup.button.callback('2. VS Code', 'category1_btn2')],
      [Markup.button.callback('3. Sublime Text 3', 'category1_btn3'), Markup.button.callback('4. Brackets', 'category1_btn4')]
    ]))
  } catch (e) {
    console.error(e)
  }
})

function addActionBot(name, src, text) {
  bot.action(name, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({
        source: src
      });
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: true
      })
    } catch (e) {
      console.error(e)
    }
  })
}
addActionBot('category1_btn1', 'img/free_course/c1_b1.jpg', free_course[0][0])
addActionBot('category1_btn2', 'img/free_course/c1_b2.jpg', free_course[0][1])
addActionBot('category1_btn3', 'img/free_course/c1_b3.jpg', free_course[0][2])
addActionBot('category1_btn4', 'img/free_course/c1_b4.jpg', free_course[0][3])

/*
bot.action('category1_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c1_b1.jpg'
    });
    await ctx.replyWithHTML(free_course[0][0], {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category1_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c1_b2.jpg'
    });
    await ctx.replyWithHTML(free_course[0][1], {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category1_btn3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c1_b3.jpg'
    });
    await ctx.replyWithHTML(free_course[0][2], {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category1_btn4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c1_b4.jpg'
    });
    await ctx.replyWithHTML(free_course[0][3], {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
*/

// Обработка кнопок из категории Фреймворки
bot.action('btn_category9', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Фреймворки</b>\n2 курса\n23 видео урока\n6 часов 40 минут', Markup.inlineKeyboard([
      [Markup.button.callback('1. Bootstrap 4', 'category9_btn1'), Markup.button.callback('2. Bootstrap 5', 'category9_btn2')],
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('category9_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c9_b1.jpg'
    });
    await ctx.replyWithHTML('В этом видео курсе мы будем изучать фрэймворк Bootstrap 4, рассмотрим способы подключения Bootstrap к нашему проекту и изучим основные приемы работы с сеткой и компонентами Bootstrap 4.\n\n12 видео уроков\n1 час 40 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIP8cwKmwmT2pAGFMnhI5qNO">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category9_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c9_b2.jpg'
    });
    await ctx.replyWithHTML('Видео курс по Bootstrap 5. В этом курсе я расскажу вам: что такое Bootstrap 5, как подключить Bootstrap 5, как работать с сеткой Bootstrap 5 и создавать адаптинвые сайты с помощью Bootstrap 5.\n\n11 видео уроков\n5 часов\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINmJ4DV22gtPL4--HQ49Df3">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Обработка кнопок из категории Инструменты
bot.action('btn_category2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Инструменты веб-разработчика</b>\n6 курсов\n75 видео уроков\n15 часов 50 минут', Markup.inlineKeyboard([
      [Markup.button.callback('1. Полезные сервисы', 'category2_btn1'), Markup.button.callback('2. Обзоры', 'category2_btn2')],
      [Markup.button.callback('3. Open Server', 'category2_btn3'), Markup.button.callback('4. Photoshop', 'category2_btn4')],
      [Markup.button.callback('5. Git & GitHub', 'category2_btn5'), Markup.button.callback('6. Сборщик Gulp 4', 'category2_btn6')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('category2_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c2_b1.jpg'
    });
    await ctx.replyWithHTML('В этом видео курсе мы будем устанавливать необходимы для веб-разработки программы. Так же я расскажу вам о некоторых полезных сайтах (сервисах), которые помогут нам выполнять некоторые действия. Мы рассмотрим работу с Google Fonts, Font Awesome, Swiper.js, 960 grid system, Hover.css, Firefox Developer Edition, CodePen, Material Palette и многое другое.\n\n21 видео урок\n1 час 20 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINwXopVMV34_gWKV0yESNwJ">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category2_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c2_b2.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте собраны видео обзоры различных систем и технологий с канала ITDoctor.\n\n10 видео уроков\n3 часа\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIOq9sXC3Hnj8KrCsP1egO6T">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category2_btn3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c2_b3.jpg'
    });
    await ctx.replyWithHTML('Это видео курс по Open Server, в котором я расскажу вам, что такое локальный сервер и зачем нужен Open Server. Мы рассмотрим как проходит установка Open Server на компьютер и я научу вас как использовать локальный сервер Open Server при создании сайтов.\n\n8 видео уроков\n1 час\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINU_F29Ijq_MgeUwjrKaVqW">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category2_btn4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c2_b4.jpg'
    });
    await ctx.replyWithHTML('Видео курс по редактору Photoshop призван научить вас основам работы в фотошопе. Если вы хотите научиться хотя бы базовым приемам веб-дизайна чтобы самому выполнять многие действия а не обращаться каждый раз к другим специалистам, то вы можете пройти обучение по видео урокам из курса "Уроки Photohop для начинающих". Данные уроки научат вас основам работы в фотошопе и пользоваться инструментами для веб дизайнеров.\n\n13 видео уроков\n2 часа\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINP2w4V37k8f5Jxp5j8ndfU">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category2_btn5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c2_b5.jpg'
    });
    await ctx.replyWithHTML('В этом видео курсе мы познакомимся с системой контроля версий и научимся с ней работать. Мы будем использовать Git, а хранить свои репозитории будем на GitHub. Я подробно и на примерах покажу вам как работать с Git и GitHub.\n\n17 видео уроков\n3 часа 40 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIOMB2R_Kky05ZfiAx2_pbAH">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category2_btn6', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c2_b6.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте собраны видео уроки по работе со сборщиком Gulp, а именно с Gulp 4. Мы будем рассматривать принципы создания сборки проекта, а так же рассматривать разные плагины для Gulp.\n\n6 видео уроков\n2 часа 50 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIM7fEgWkXJvfiVOd2ecZyEE">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Обработка кнопок из категории Основы вёрстки HTML и CSS
bot.action('btn_category3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Основы вёрстки HTML и CSS</b>\n5 курсов\n121 видео урок\n16 часов 30 минут', Markup.inlineKeyboard([
      [Markup.button.callback('1. HTML', 'category3_btn1'), Markup.button.callback('2. CSS', 'category3_btn2')],
      [Markup.button.callback('3. Emmet', 'category3_btn3'), Markup.button.callback('4. Формы', 'category3_btn4')],
      [Markup.button.callback('5. Препроцессоры SCSS, Less', 'category3_btn5')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('category3_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c3_b1.jpg'
    });
    await ctx.replyWithHTML('В видео курсе по языку гипертекстовой разметки HTML мы будем изучать структуру html документа, а так же теги html. Будем создавать сайт на основе полученных знаний используя язык гипертекстовой разметки html.\n\n55 видео уроков\n5 часов\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIMjV7Kff8yf8RA-XwjXVGgl">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category3_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c3_b2.jpg'
    });
    await ctx.replyWithHTML('В этом видео курсе мы будем изучать Каскадные таблицы стилей CSS. С помощью CSS можно создавать красивое оформление на сайте так же делать анимацию для разных объектов тем самым создавая интерактивность на странице. Каскадные таблицы стилей CSS открывают огромные возможности в создании сайтов.\n\n35 видео уроков\n6 часов 10 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIOn8NTkZVsUn9jDCkdoJH9Z">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category3_btn3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c3_b3.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте собраны видео уроки посвященные плагину Emmet. Данный плагин позволяет молниеносно писать код с помощью специальных сокращений. В редакторе VS Code он встроен по умолчанию, а вдругих редакторах может потребоваться установка. Смотрите все видео из этого плейлиста чтобы полностью овладеть даным плагином.\n\n6 видео уроков\n1 час\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIOYCKHrvn65GXvTRTnnGXyI">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category3_btn4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c3_b4.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте собраны уроки по HTML, CSS, JS и PHP, в которых мы изучаем формы. Как создавать формы, какие бывают атрибуты у элементов форм и как правильно и красиво оформить формы вы можете узнать из этого раздела.\n\n19 видео уроков\n2 часа 40 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIOvzLBfgqsZKJJjphb-wugA">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category3_btn5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c3_b5.jpg'
    });
    await ctx.replyWithHTML('В этом разделе вы найдете информацию про CSS Препроцессоры, такие как Less, Sass и некоторых других.\n\n6 видео уроков\n1 час 40 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIM2_X9rA_5DDE0rX9cjUQoX">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Обработка кнопок из категории Frontend разработка
bot.action('btn_category8', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Frontend разработка JS и jQuery</b>\n5 курсов\n127 видео уроков\n32 часа 25 минут', Markup.inlineKeyboard([
      [Markup.button.callback('1. Java Script для новичков 2021', 'category8_btn1')],
      [Markup.button.callback('2. Java Script базовый курс', 'category8_btn2')],
      [Markup.button.callback('3. Java Script продвинутый', 'category8_btn3')],
      [Markup.button.callback('4. jQuery', 'category8_btn4'), Markup.button.callback('5. Практика', 'category8_btn5')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('category8_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c8_b1.jpg'
    });
    await ctx.replyWithHTML('Видео курс JavaScript для новичков состоит из 12 уроков. В этом курсе вы узнаете основы языка программирования, без которых невозможно изучать библиотеки, фрэймворки или создавать свои собственные интересные скрипты. За 12 уроков вы научитесь работать с переменными разных типов, массивами, объектами, узнаете как проверять условия и создавать циклы. Научитесь создавать свои собственные функции, работать с датой и временем, правильно документировать код и отлавливать ошибки. Так же я расскажу про объектно ориентированный подход в программирования на языке JavaScript и рассмотрим интересные возможности стандарта ECMAScript 2015 (ES6), который уже максимально хорошо поддерживается всеми браузерами и не требует дополнительной компиляции в более старые версии стандарта ES. Данный курс имеет свое логическое продолжение в виде курса "Супер JavaScript". Узнать подробнее о курсе "Супер JavaScript" можно будет после завршения данного курса.\n\n13 видео уроков\n5 часов 30 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINoCQtGZsMoVVCSgEH7gKQ5">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category8_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c8_b2.jpg'
    });
    await ctx.replyWithHTML('Видео курс по языку программирования Java Script предназначен для начинающих веб программистов. В этом разделе вы найдете уроки для начинающих и сможете выучить язык Java Script. Так же на канале ITDoctor много других обучающих видео уроков на темы HTML, CSS, Open Server, Flexbox, Less и многое другое. Учим язык Java Script "с нуля".\n\n36 видео уроков\n8 часов 45 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINjS4_G7KuYThU_T4uzpAuG">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category8_btn3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c8_b3.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте будут размещаться видео уроки, где я буду показывать возможности языка JavaScript без сторонних библиотек и фреймворков. Мы будем создавать различные интерактивные элементы сайта, такие как выпадающие списки, слайдеры, галереи и прочие элементы современных интерфейсов.\n\n21 видео уроков\n5 часов\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIPyoo60E-DPECak0G46k6k8">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category8_btn4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c8_b4.jpg'
    });
    await ctx.replyWithHTML('jQuery видео курс для начинающих. Эти уроки по jQuery нацелены для максимально быстрого и качественного обучения начинающих разработчиков, которые хотят освоить библиотеку jQuery. Уроки по jQuery в этом плейлисте идут от легкого к более сложному так же есть несколько практических занятий и написания кода на js и jquery для создания интерактивных веб-приложений. В этих уроках мы будем писать код на реальных примерах. Минимум воды, максимум кода и практики на jquery.\n\n49 видео уроков\n10 часов 10 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIO6ys8_OmKphvobZxabbGBz">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category8_btn5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c8_b5.jpg'
    });
    await ctx.replyWithHTML('В этом разделе будут видео уроки по Frontend практике. Мы будем создавать различные элементы страниц и использовать разные инструменты, такие как HTML, CSS, JS, а так же Препроцессоры, Сборщики, Библиотеки и многое другое. Тут мы будем создавать такие элементы как меню, формы, таблицы, различные виды разметок, сайдбары, хэдеры, футеры, аккордеоны, карусели, хлебные крошки и многое другое.\n\n8 видео уроков\n3 часа\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINC98aWpSOHXCqaUkH6vd4K">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Обработка кнопок из категории Вёрстка сайта с нуля
bot.action('btn_category4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Вёрстка сайта с нуля</b>\n5 курсов\n63 видео урока\n27 часов', Markup.inlineKeyboard([
      [Markup.button.callback('1. Вёрстка из PSD, Flexbox + Less', 'category4_btn1')],
      [Markup.button.callback('2. Вёрстка из PSD, Bootstrap + BEM', 'category4_btn2')],
      [Markup.button.callback('3. Сайт на Wordpress, Bootstrap + SASS', 'category4_btn3')],
      [Markup.button.callback('4. Вёрстка из Marsy', 'category4_btn4')],
      [Markup.button.callback('5. Вёрстка из Figma', 'category4_btn5')],
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('category4_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c4_b1.jpg'
    });
    await ctx.replyWithHTML('В этом видео курсе мы изучаем Flexbox и Less, а также по плану верстка адаптивного сайта из макета PSD. В этом курсе вы найдете уроки по Flexbox и Less верстка адаптивного сайта из макета PSD. Верстка адаптивного сайта и flexbox практика позволят вам создавать современные сайты. Что такое flexbox, flexbox верстка и как создать сайт на flexbox вы узнаете в курсе Flexbox верстка сайта из макета PSD. В этом уроке: Верстка сайта из psd с нуля по макету. Вы узнаете почему верстка из psd так важна в веб разработке. Верстка flexbox это Адаптивная верстка сайта, для всех типов устройств. Верстка сайта адаптивно и уроки flexbox практика в цикле видео уроков по Flexbox и Less.\n\n13 видео уроков\n6 часов\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIPKCe3dSJfqkGXS-Ebky02v">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category4_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c4_b2.jpg'
    });
    await ctx.replyWithHTML('В этом видео курсе мы будем верстать лендинг по макету PSD, используя в своей работе Bootstrap4, Методологию БЭМ, Adobe Photoshop, Font Awesome, GitHub и многое другое.\n\n13 видео уроков\n8 часов\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIMbdiCzaZuPjxXE24eAG5qo">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category4_btn3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c4_b3.jpg'
    });
    await ctx.replyWithHTML('В видео курсе "Cайт с нуля на Bootstrap 4 + SCSS + Wordpress", мы будем на реальном примере создавать сайт с самого начала и до адаптации на CMS (например Wordpress). Я буду максимально подробно рассказывать о всех мелочах и показывать реальный процесс от начала создания сайта и до его завершения.\n\n21 видео урок\n3 часа 40 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIMEIav0T-g0VBM52C3cAhLC">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category4_btn4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c4_b4.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте мы рассмотрим пример верстки сайта с помощью сервиса Marsy. Это бесплатный аналог Avocode который помогает упростить процесс верстки. Мы будем верстать интересный макет сайта от начала и до конца используя HTML, CSS и JS.\n\n9 видео уроков\n4 часа 40 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIMsYvsJIxZ_PcLLwOHuvATv">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category4_btn5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c4_b5.jpg'
    });
    await ctx.replyWithHTML('В этом видео курсе мы будем верстать макет сайта из Figma. Рассмотрим особенности работы с Figma и научимся верстать сайт из Figma.\n\n7 видео уроков\n4 часа 40 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIMhg69FDlaLjzDermknWbaB">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Обработка кнопок из категории Backend разработка
bot.action('btn_category5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Backend разработка PHP и MySQL</b>\n8 курсов\n108 видео уроков\n31 час', Markup.inlineKeyboard([
      [Markup.button.callback('1. PHP', 'category5_btn1'), Markup.button.callback('2. БД MySQL', 'category5_btn2')],
      [Markup.button.callback('3. Wordpress', 'category5_btn3'), Markup.button.callback('4. Python', 'category5_btn4')],
      [Markup.button.callback('5. Одностраничный сайт на Wordpress', 'category5_btn5')],
      [Markup.button.callback('6. Многостраничный сайт на Wordpress', 'category5_btn6')],
      [Markup.button.callback('7. Алгоритмы и блок-схемы', 'category5_btn7')],
      [Markup.button.callback('8. Windows и Linux', 'category5_btn8')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('category5_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c5_b1.jpg'
    });
    await ctx.replyWithHTML('Уроки по языку PHP собраны в этом плейлисте. Выучить яызк PHP можно просматривая видео курс по языку PHP в отдельных коротких уроках или в одном восьми часовом видео.\n\n56 видео уроков\n16 часов\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIN_pFzp1vlu0PD3KXUrPTVS">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category5_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c5_b2.jpg'
    });
    await ctx.replyWithHTML('В этом видео курсе мы будем изучать базы данных на примере системы управления базами данных phpMyAdmin, так же немного затронем язык SQL, а графическая оболочка phpMyAdmin поможет нам очень просто и удобно управлять базами данных. Мы будем: создавать, удалять, редактировать базы данных, добавлять новые таблицы, создавать структуру и связи между ними, частично затронем язык SQL и изучим основы данного языка. Этот курс создан для того чтобы научить вас создавать базы данных на MySQL в phpMyAdmin, уроки для начинающих, которые хотят с нуля разобраться в базах данных.\n\n11 видео уроков\n3 часа 30 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINWpCD2IbtMm-R5ClBA70Dw">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category5_btn3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c5_b3.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте можно изучить работу с CMS Wordpress. Работу с темами, с консолью, узнать про обновления Wordpress и различные интересные плагины. Научиться устанавливать плагины и настраивать их чтобы создать надежный и защищенный сайт на Wordpress.\n\n4 видео урока\n55 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIPgHRvtoFnIxSxyTt6vKGpi">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category5_btn4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c5_b4.jpg'
    });
    await ctx.replyWithHTML('В этом курсе вы изучите язык Python. Сравнение языка Python с другими языками программирования. Выявление отличий, минусов и плюсов в сравнении с PHP, JavaScript, C++, Pascal. Python язык для тех кто любит минимализм, код написанный на Python получается короткий и аккуратный. На Python можно писать на любой операционной системе. В этом курсе я покажу как писать на Python на Linux и Windows. Установка Python очень проста, а изучение языка Python за один урок это посильная задача даже для самых начинающих. Я расскажу как быстро выучить Python на практических примерах.\n\n2 видео урока\n1 час\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIMXRHhNW_lQHR7c6bUeRVpP">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category5_btn5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c5_b5.jpg'
    });
    await ctx.replyWithHTML('В этом видео курсе я покажу весь жизненный цикл переноса одностраничного сайта на Wordpress. Мы начнем с установки CMS Wodpress и создания базы данных в phpMyAdmin. После этого приступим к созданию своей темы, научимся подключать стили, скрипты и шрифты. Добавим возможность выбора логотипа сайта через панель настроек Wordpress. После этого познакомимся с произвольными полями на CMS Wordpress, установим плагин Custom Field Suite и научимся работать с ним. Создадим слайлдер с помощью Swiper.js и бесплатного повторителя в плагине CFS. Постепенно перенесем все остальные разделы сайта на Wordpress с помощь плагина CFS, подключим и настроим плагин Contact Form 7 для отправки писем через форму обратной связи. В завершение работы над сайтом мы перенесем его с локального сервера Open Server на реальный хостинг, я покажу как перенести сайт максимально просто и быстро, настроим Contact Form 7 на оправку писем, добавим защиту от спама с помощью интеграции Google Recapcha и скроем значок recapcha на нашем сайте.\n\n12 видео уроков\n2 часа 40 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIPnp9VCtshQ1F5pPsRhpTws">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category5_btn6', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c5_b6.jpg'
    });
    await ctx.replyWithHTML('В этом курсе мы создадим многостраничный сайт компании изготавливающей двери на заказ на Wordpress. Тут мы не будем верстать сайт, а вы сможете скачать готовый код верстки состоящий из 10 страниц и сразу же приступить к натяжке вёрстки на Wordpress. В рамках этого курса мы создадим многостраничный сайт на Wordpress. Настроим каталог товаров с фильтрацией по категориям, настроим пагинацию в каталоге чтобы товары отображались на нескольких страницах если их слишком много. Сделаем страницу товара с галереей, характеристиками и формой заказа товара. Настроим страницу с портфолио компании, где подключим галерею изображений. Научимся выводит записи из разных рубрик, выводить формы с помощью шорткодов, работать с плагином CFS и Contact Form 7 и в завершении курса перенесем все на настойщий хостинг, создадим почтовый домен, настроим работу наших форм и завершим создание сайта.\n\n14 видео уроков\n5 часов 30 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINhZpY34wXFORiH-19OvNd4">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category5_btn7', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c5_b7.jpg'
    });
    await ctx.replyWithHTML('В этом разделе мы будем изучать алгоритмы в теории и на практике. Научимся читать и создавать блок-схемы алгоритмов, а так же будем реализовывать различные интересные алгоритмы на разных языках программирования.\n\n2 видео урока\n40 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIMcsw_n7C_7nrlupjB4RPK_">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category5_btn8', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c5_b8.jpg'
    });
    await ctx.replyWithHTML('В этом разделе видео на тему операционной системы MS Windows. Работа с Windows, Сложности, решение проблем в Windows. А так же другие операционные системы, Linux Mint, Ubuntu и другие.\n\n7 видео уроков\n1 час\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINmSDbs8doggI-tJnnIJzev">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Обработка кнопок из категории Лайфхаки
bot.action('btn_category6', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Лайфхаки</b>\n\nВ этом плейлисте собраны короткие видео YouTube Shorts с разными полезными лайфхаками. Каждое видео длится не дольше одной минуты.\n\n28 видео\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIObijZKfE6zxneHDULP384M">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})

// Обработка кнопок из категории 3D и Gamedev
bot.action('btn_category7', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>3D и Gamedev</b>\n2 курса\n3 видео урока\n2 часа 16 минут', Markup.inlineKeyboard([
      Markup.button.callback('1. Blender', 'category7_btn1'),
      Markup.button.callback('2. Unity', 'category7_btn2'),
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('category7_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c7_b1.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте вы найдете уроки посвященные 3D моделированию в Blender.\n\n2 видео урока\n2 часа 10 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIN8XC9TS47ul2_-if5H2Whr">Смотреть</a>', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
bot.action('category7_btn2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c7_b2.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте будут видео уроки по редактору Unity и созданию игр.\n\n1 видео урок\n6 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINkImTtyf73C9AH-iNk56ns">Смотреть</a>', {
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