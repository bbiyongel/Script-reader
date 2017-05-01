var pwconfig = require('../config/password');
var request = require('request');

module.exports = function(app, fs) {
  app.get('/', function(req, res) {
    res.render('index', {
      title: "Script-reader"
    });
  });

  app.post('/tts', function (req, res) {
    var data = {
      'speaker': req.body.speaker,
      'speed': req.body.speed,
      'text': req.body.text
    };
    var api_url = 'https://openapi.naver.com/v1/voice/tts.bin';
    var options = {
      url: api_url,
      form: {'speaker': data.speaker, 'speed': data.speed, 'text': data.text},
      headers: {'X-Naver-Client-Id': pwconfig.client_id, 'X-Naver-Client-Secret': pwconfig.client_secret}
    };
    var writeStream = fs.createWriteStream('./tts1.mp3');
    var _req = request.post(options).on('response', function(response) {
      console.log(response.statusCode);
      console.log(response.headers['content-type']);
    });
    _req.pipe(writeStream);
    _req.pipe(res);
  });
};
