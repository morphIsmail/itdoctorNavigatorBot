const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Обработка кнопок из категории Лайфхаки
lib.send_msg_action('btn_category8', false, 'lifehacks', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIObijZKfE6zxneHDULP384M')]])

module.exports = composer