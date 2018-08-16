// Server
import http from 'http';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const requestIp = require('request-ip');
// import methodOverride from 'method-override';

// // Passport
// import passport from 'passport';
// import crypto from 'crypto';
// import mongoose from 'mongoose';
// import { Strategy as LocalStrategy } from 'passport-local';
// import { User } from './models/models.js';
//
// import auth from './routes/auth';
// import routes from './routes/routes.js';
import serverSocket from './serverSocket';

const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8080;
server.listen(port);
console.log(`Server should be running at http://127.0.0.1:${port}/`);

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(methodOverride());
//
// // Hash Function
// const hashPassword = (password) => {
//   const hash = crypto.createHash('sha256');
//   hash.update(password);
//   return hash.digest('hex');
// };
//
// // Passport Methods
//
// passport.use(new LocalStrategy((username, password, done) => {
//   User.findOne({ username: username }, (err, user) => {
//     if (err) {
//       return done(err);
//     }
//     if (!user) {
//       return done(null, false);
//     }
//     if (user.password !== hashPassword(password)) {
//       return done(null, false);
//     }
//     return done(null, user);
//   });
// }));
//
// passport.serializeUser((user, done) => {
//   done(null, user._id);
// });
//
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });
//
// // For Sessions
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
//
// mongoose.connect(process.env.MONGODB_URI);
//
// app.use(session({
//   secret: process.env.SECRET,
//   store: new MongoStore({ mongooseConnection: mongoose.connection }),
// }));
//
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.use('/', auth(passport));

// app.use('/', routes);
//

// app.use(requestIp.mw())
// app.use((req,res, next) => {
//   console.log('IP detected', req.clientIp);
//   console.log('IP detected', req);
//   next();
// });


app.get('/testRoute', (req, res) => {
  res.send('test route!')
})

app.use(function(req, res) {
    const ip = req.clientIp;
    res.end("TESTING: This is your IP: "+ip);
});

// SOCKETS
console.log('line92')
serverSocket(io);

//zzzzz - how to supply the react bundle?
