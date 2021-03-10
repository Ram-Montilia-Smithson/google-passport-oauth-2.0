// requirements
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {done(null, user)});
passport.deserializeUser((user, done) => {done(null, user)});

passport.use(new GoogleStrategy({
    clientID: "932080990193-eloaiqbpq43lqnea8793o8b3gs651pj9.apps.googleusercontent.com",
    clientSecret: "WiLgLu7_80Kz4CWwJIqTaI9C",
    callbackURL: '/return'
}, (accessToken, refreshToken, profile, done) => {
    // console.log(accessToken, "accessToken");
    // console.log(refreshToken, "refreshToken");
    return done(null, profile)
}));