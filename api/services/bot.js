var TelegramBot = require('node-telegram-bot-api');

var token = 'key';

var bot = new TelegramBot(
    token, {
        polling:true
    });

bot.getMe().then(function (me){
    console.log('Hola mi nombre es: %s!', me.username);
});


bot.onText(/^\/Yo soy (.+)$/, function (msg, match) {
    var name = match[1];
    console.log(msg.chat.id);
    bot.sendMessage(msg.chat.id, `Hola ${name} !`).then(function (){
        console.log(`Saludos ${name}`);
    });
});


bot.onText(/^\/foto(.+)$/,function(msg,match){
  var chatId = msg.chat.id;
  var photo = './assets/images/frase.jpg';
  bot.sendPhoto(chatId, photo);
console.log('Imagen enviada');
});


bot.onText(/^\/ubicacion(.+)$/,function(msg,match){
  var chatId = msg.chat.id;
  bot.sendLocation(chatId,19.868056,-98.251944);
console.log('Cargando Ubicacion');
});

bot.onText(/^\/audio(.+)$/,function(msg,match){
  var chatId = msg.chat.id;
  var audio = './assets/audio/TearsInHeaven.mp3';
  bot.sendAudio(chatId,audio);
console.log('Audio enviado');
});