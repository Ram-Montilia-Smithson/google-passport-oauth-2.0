// requirements
const app = require('express')();
const passport = require('passport');
const cookieParser = require('cookie-parser')();
const bodyParser = require('body-parser').urlencoded({ extended: true });
const expressSession = require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true });
require('./passport');

// middleware
app.use(cookieParser);
app.use(bodyParser);
app.use(expressSession)
app.use(passport.initialize());
app.use(passport.session());


// routes
app.get('/', (req, res) => { res.send('<p>Welcome! Please <a href="/login">log in</a>.</p>')});
app.get('/login', (req, res) => { res.send('<a href="/login/google">Log In with Google</a>')});
app.get('/login/google', passport.authenticate('google', { scope: ['profile'] }));
app.get('/return', passport.authenticate('google'), (req, res) => {res.redirect('/profile')});
app.get('/profile', (req, res) => {res.send('<h1>Profile</h1>')});

app.listen(5000, () => console.log(`Example app listening on port 5000!`))