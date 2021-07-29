const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('./config');
const MemoryStore = require('memorystore')(session)

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: config.serverUrl,
    credentials: true
}));

let sess = {
    secret: 'rsu_secret',
    name: 'rsu_secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    },
    store: new MemoryStore({
        checkPeriod: 24 * 60 * 60 * 1000 // prune expired entries every 24h
    }),
}

// if (app.get('env') === 'production') {
//     app.set('trust proxy', 1) // trust first proxy
//     sess.cookie.secure = true // serve secure cookies
// }

app.use(session(sess))

app.use(cookieParser('rsu_secret'));
app.use(passport.initialize());
app.use(passport.session());
require("./app/auth/passport-local/passport")(passport);

// passport jwt configs
require('./app/auth/passport-jwt/passport')(passport)

//routes
require('./app/routes')(app, passport);

//error handler
app.use((error, req, res, next) => {
    next(error)
})
app.use((error, req, res, next) => {
    const code = (!res.statusCode || res.statusCode === 200) ? 500 : res.statusCode
    const message = (error && error.message) ? error.message : error
    return res.status(code).send({ error: message || 'There was some errors while performing action.' })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Connected Rasi Universal Services @" + PORT);
});

//db.sync().then(() => {})

