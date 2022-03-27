const { Composer, Markup } = require('telegraf')
const composer = new Composer()

// Команда /y_course - Бесплатные курсы
composer.command('y_course', async (ctx) => {
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

module.exports = composer