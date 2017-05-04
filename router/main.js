var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var request = require('request');
var pwconfig = require('../config/password');

module.exports = function(app, fs) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/', function(req, res) {
    res.render('index', {
      title: "Script-reader"
    });
  });

  app.post('/tts', upload.array(), function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/voice/tts.bin';
    var speaker = req.body.speaker;
    var speed = req.body.speed;
    var text = req.body.text;
    var options = {
      url: api_url,
      form: {
        'speaker': speaker,
        'speed': speed,
        'text': text
      },
      headers: {
        'X-Naver-Client-Id': pwconfig.client_id,
        'X-Naver-Client-Secret': pwconfig.client_secret
      }
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