var express = require('express'),
path = require('path'),
nodeMailer = require('nodemailer'),
bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var port = 3000;

app.get('/', function (req, res) {
	res.render('index');
});

app.post('/send', function (req, res) {
	let transporter = nodeMailer.createTransport({
		host: 'smtp.mailtrap.io',
		port: 465,
		secure: false,
		auth: {
			user: '9e93dcf4106f41',
			pass: '53e19dcc0ebdba'
		}
	});
	let mailOptions = {
		from: 'F&F company',
		to: req.body.to,
		subject: req.body.subject,
		html: req.body.message,
	};

  	transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
          res.render('index');
    });
});

app.listen(port, function(){
	console.log('Server is running at port: ',port);
});