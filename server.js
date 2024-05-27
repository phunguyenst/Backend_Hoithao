// server.js (hoặc app.js)
const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config();
const mysql = require("mysql");
const cors = require('cors');
const configViewEngine = require("./config/viewEngine");
const initWebRoutes = require("./src/routers/web");
const session = require("express-session");
const connectFlash = require("connect-flash");
const passport = require("passport");

const taikhoanRoutes = require('./src/routers/taikhoan.routers');
const suKienRoutes = require('./src/routers/sukien.routers');
const taiLieuRoutes = require('./src/routers/tailieu.routers');
const hoiThaoRoutes = require('./src/routers/hoithao.routers');
const nguoidungRoutes = require('./src/routers/nguoidung.routers');
const nhanvienRoutes = require('./src/routers/nhanvien.routers');
const dangky_sukienRoutes = require('./src/routers/dangkysukien.routers');

const { google } = require('googleapis');
const dayjs = require('dayjs');
const {axios} = require('axios');
const { v4: uuid } = require('uuid');
const calendar = google.calendar({
  version: 'v3',
  auth: process.env.API_KEY,
});

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

const scopes = [
  'https://www.googleapis.com/auth/calendar'
];

// create express app
const app = express();

// Setup server port
const port = 3307;

//cors
var corsOptions = {
  origin: "http://localhost:3307",
  credentials: true
};

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Cho phép gửi credentials
}));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Cross-Origin-Resource-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(cookieParser("secret"));
//config session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: {
     maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
  }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.set('view engine', 'html');

// config view engine
configViewEngine(app);

//Enable flash message
app.use(connectFlash());

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

// init all web routes
initWebRoutes(app);

// Define routes for taikhoan, auth, and suKien
app.use('/api/taikhoan', taikhoanRoutes);
app.use('/api/sukien', suKienRoutes);
app.use('/api/tailieu', taiLieuRoutes);
app.use('/api/hoithao', hoiThaoRoutes);
app.use('/api/nguoidung',nguoidungRoutes);
app.use('/api/nhanvien',nhanvienRoutes);
app.use('/api/dangkysukien', dangky_sukienRoutes);

// Define Google OAuth routes
app.get('/google', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
  });
  res.redirect(url);
});

app.get('/google/redirect', async (req, res) => {
  const code = req.query.code;

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

    res.send({
      msg: "You have successfully logged in",
    });
});

// app.get('/google/schedule_event', async (req, res) => {
//   console.log(oauth2Client.credentials.access_token);
//   await calendar.events.insert({
//     calendarId: "primary", // Corrected parameter name
//     auth: oauth2Client,
//     conferenceDataVersion: 1,
//     requestBody: {
//       summary: "This is a test event ",
//       description: "Some event that is very important",
//       start: {
//         dateTime: dayjs(new Date()).add(1, "day").toISOString(),
//         timeZone: "Etc/GMT+7",
//       },
//       end: {
//         dateTime: dayjs(new Date()).add(1, "day").add(1, "hour").toISOString(),
//         timeZone: "Etc/GMT+7",
//       },
//       conferenceData : {
//         createRequest: {
//           requestId: uuid(),
//         },
//       },
//       attendees: [
//       {
//         email: "quynguyenpro1410@gmail.com"
//       }
//     ]
//     },
//   });
//   res.send({
//     msg: "Done",
//   });
// });



// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
