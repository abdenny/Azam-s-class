const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  console.log('Post submitted');
  let title = req.body.title;
  let description = req.body.description;
  let date = req.body.date;
  res.send(
    JSON.stringify(
      `Task Title:${title}, Task Description:${description}, Date: ${date}`
    )
  );
});

module.exports = router;
