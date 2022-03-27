const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Команда /files - Полезные материалы
composer.command('files', async (ctx) => {
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

composer.action('btn_category_m1', async (ctx) => {
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

composer.action('btn_category_m2', async (ctx) => {
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

composer.action('btn_category_m3', async (ctx) => {
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

composer.action('btn_category_m4', async (ctx) => {
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

composer.action('btn_category_m5', async (ctx) => {
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

module.exports = composer