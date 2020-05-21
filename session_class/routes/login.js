const express = require('express');
const router = express.Router();
let sessions = require('express-session');

router.use(
  sessions({
    secret: 'my puppy',
    cookie: { secure: false, maxAge: 14 * 24 * 60 * 60 * 1000 },
  })
);

router.get('/login', (req, res) => {
  res.render('login.ejs');
});
router.post('/login', (req, res) => {
  let username = req.body.username;
  // let password = req.body.password;

  req.session.userid = username;
  res.redirect('/');
});

module.exports = router;
