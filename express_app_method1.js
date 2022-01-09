var app = require('./config/server.config');
var Register = require('./models/model.employee');

app.get('/', function(req, res) {
    // res.send('Welcome to Express!');
    res.render('login', { "title": "User Login" });
});

app.post('/', function(req, res) {
    let employee_name = req.body.employee_name;
    res.send(employee_name + ' Welcome to MCA Dept!');
});

app.post('/add', function(req, res) {
    let operand1 = req.body.operand1;
    let operand2 = req.body.operand2;
    let result = operand1 + operand2;
    res.send('Result of Addition is : ' + result);
});

app.post('/register', function(req, res, next) {
    var registeremployee = new Register(req.body);
    registeremployee.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(registeremployee);
        }
    });
});


app.post('/update_employee', function(req, res, next) {
    var email = req.body.email;
    var employee_name = req.body.employee_name;
    Register.updateOne({ "email": email }, { "employee_name": employee_name }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});