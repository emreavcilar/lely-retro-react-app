const express = require("express");
const cors = require('cors');
const createError = require('http-errors')
// const { get } = require("http");
const PORT = process.env.PORT || 3001;
const app = express();
// const path = require('path');
const userData = require("./data/signIn/user.json");
const userCompanies = require("./data/manageUsers/userCompanies.json");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
    ],
  })
);

// app.all('*', function (req, res) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   //...
// });

// LOGIN ----------------------------------
app.post("/api/signIn", (req, res, next) => {
  const { body, session } = req;
  const { email, password } = body;

  if (!email || !password) {
    res.status(400).json({ message: "E-mail and password can not be empty or null" })
  }

  res.json(userData);
});

app.post('/api/signOut', (req, res, next) => {
  res.json({ signOut: true });
});

// MANAGE USERS -----------------------
app.post("/api/essentials/user/companies", (req, res, next) => {
  const { body, session } = req;
  const { email, username } = body;

  if (!email || !username) {
    res.status(400).json({ message: "E-mail and username can not be empty or null" })
  }

  res.json(userCompanies);
})

// app.get('/products/:id', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a Single Route'})
// })

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;