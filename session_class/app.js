const express = require('express');
const app = express();

global.users;
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./routes/'));
app.use(require('./routes/login.js'));

app.listen(3000, () => {
  console.log('Listening on 3000');
});
