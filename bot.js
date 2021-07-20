// Подключение dotenv для скрытия токена
require('dotenv').config()
// Телеграф для создания бота
const {
  Telegraf,
  Markup
} = require('telegraf')
// Подключить файл с текстовыми константами
const COMMANDS = require('./const')
// Передать токен
const bot = new Telegraf(process.env.BOT_TOKEN)

// Старт бота
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name} ${ctx.message.from.last_name}! Посмотреть все доступные команды /help`))

// Команда /free_course - Бесплатные курсы
bot.command('free_course', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Бесплатные курсы на <a href="https://www.youtube.com/c/ITDoctor/playlists">YouTube</a></b>', Markup.inlineKeyboard([
      [Markup.button.callback('Редакторы кода', 'btn_category1')],
      [Markup.button.callback('Инструменты', 'btn_category2')],
      [Markup.button.callback('Основы вёрстки', 'btn_category3')],
      [Markup.button.callback('Вёрстка сайта с нуля', 'btn_category4')],
      [Markup.button.callback('Backend разработка', 'btn_category5')],
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
    await ctx.replyWithHTML('<b>Редакторы кода</b>\n71 видео урок\n8 часов', Markup.inlineKeyboard([
      [Markup.button.callback('Обзоры', 'category1_btn1')],
      [Markup.button.callback('VS Code', 'category1_btn2')],
      [Markup.button.callback('Sublime Text 3', 'category1_btn3')],
      [Markup.button.callback('Brackets', 'category1_btn4')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('category1_btn1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({
      source: 'img/free_course/c1_b1.jpg'
    });
    await ctx.replyWithHTML('В этом плейлисте добавлены видео, которые уже были на канале, но звук теперь более качественный и видео про редактор VS Code было объединено из плейлиста по VS Code в одно видео с таймкодами и с добавлением бонусной информации о темах для VS Code (см. в описании видео по VS Code). Вся информация в этом плейлисте актуальна и изучив её вы будите знать все о редаткоре в котором будите работать в дальнейшем. Обзор Brackets, продолжится коротким видео о том почему стоит переходить на VS Code и если вы сразу же решили начать с VS Code то переходите к обзору VS Code длительностью час и не тратьте время на редактор Brackets.\n\n5 видео уроков\n2 часа 30 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIO74IrW8y6DohRKaL5o1N1F">Смотреть</a>', {
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
    await ctx.replyWithHTML('В этом разделе вы найдёте видео по редактору Microsoft Visual Studio Code. Здесь я делаю обзор редактора, рассказываю про настройки VS Code, про доступный функционал, как создавать сниппеты в VS Code, а так же показываю расширения (плагины) и темы которые использую я и подробно про них рассказываю.\n\n9 видео уроков\n2 часа 5 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIMzp2sMA9NSj4UX_pI-jECS">Смотреть</a>', {
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
    await ctx.replyWithHTML('Видео курс по редактору кода Sublime Text 3. В данном курсе будут уроки по Sublime Text 3, в которых я покажу вам как установить редактор sublime text, как настроить, как установить плагины и темы в sublime text 3. Сделать разделение экрана и включить боковой сайдбар (панель файлов проекта) в sublime text 3. Здесь вы узнаете все про редактор sublime text от А до Я.\n\n17 видео уроков\n2 часа 20 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleIM_rvF3ARKFYu7jAjuRrON6">Смотреть</a>', {
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
    await ctx.replyWithHTML('В этом видео курсе мы будем говорить о редакторе кода Brackets. Редактор кода Brackets имеет большой функционал и набор инструментов для веб-разработчика.\n\n40 видео уроков\n1 час 50 минут\n\n<a href="https://www.youtube.com/playlist?list=PLuY6eeDuleINjpdYGtf2podRhv6DdrvKn">Смотреть</a>', {
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
    await ctx.replyWithHTML('<b>Инструменты</b>', Markup.inlineKeyboard([
      [Markup.button.callback('Полезные сервисы', 'category2_btn1')],
      [Markup.button.callback('Обзоры', 'category2_btn2')],
      [Markup.button.callback('Open Server', 'category2_btn3')],
      [Markup.button.callback('Photoshop', 'category2_btn4')],
      [Markup.button.callback('Bootstrap 4', 'category2_btn5')],
      [Markup.button.callback('Bootstrap 5', 'category2_btn6')],
      [Markup.button.callback('Git & GitHub', 'category2_btn7')],
      [Markup.button.callback('Сборщик Gulp 4', 'category2_btn8')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('btn_category3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Основы вёрстки</b>', Markup.inlineKeyboard([
      [Markup.button.callback('HTML', 'category3_btn1')],
      [Markup.button.callback('CSS', 'category3_btn2')],
      [Markup.button.callback('Emmet', 'category3_btn3')],
      [Markup.button.callback('Формы', 'category3_btn4')],
      [Markup.button.callback('JavaScript для новичков 2021', 'category3_btn5')],
      [Markup.button.callback('JavaScript базовый курс', 'category3_btn6')],
      [Markup.button.callback('JavaScript продвинутый', 'category3_btn7')],
      [Markup.button.callback('jQuery', 'category3_btn8')],
      [Markup.button.callback('Frontend практика', 'category3_btn9')],
      [Markup.button.callback('Препроцессоры', 'category3_btn10')]
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('btn_category4', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Вёрстка сайта с нуля</b>', Markup.inlineKeyboard([
      [Markup.button.callback('Вёрстка из PSD, Flexbox + Less', 'category4_btn1')],
      [Markup.button.callback('Вёрстка из PSD, Bootstrap + BEM', 'category4_btn2')],
      [Markup.button.callback('Сайт на Wordpress, Bootstrap + SASS', 'category4_btn3')],
      [Markup.button.callback('Вёрстка из Marsy', 'category4_btn4')],
      [Markup.button.callback('Вёрстка из Figma', 'category4_btn5')],
    ]))
  } catch (e) {
    console.error(e)
  }
})
bot.action('btn_category5', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Backend разработка</b>', Markup.inlineKeyboard([
      [Markup.button.callback('PHP', 'category5_btn1')],
      [Markup.button.callback('Базы данных MySQL', 'category5_btn2')],
      [Markup.button.callback('Wordpress', 'category5_btn3')],
      [Markup.button.callback('Одностраничный сайт на Wordpress', 'category5_btn4')],
      [Markup.button.callback('Многостраничный сайт на Wordpress', 'category5_btn5')],
      [Markup.button.callback('Python', 'category5_btn6')],
      [Markup.button.callback('Алгоритмы и блок-схемы', 'category5_btn7')],
      [Markup.button.callback('Windows и Linux', 'category5_btn8')]
    ]))
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
    await ctx.replyWithHTML('<b>3D и Gamedev</b>\n3 видео урока\n2 часа 16 минут', Markup.inlineKeyboard([
      Markup.button.callback('Blender', 'category7_btn1'),
      Markup.button.callback('Unity', 'category7_btn2'),
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