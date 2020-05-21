const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/posts', (req, res) => {
  db.Post.findAll().then((results) => {
    res.render('posts.ejs', { postInfo: results });
  });
});

router.post('/posts', (req, res) => {
  let postTitle = req.body.title;
  let postBody = req.body.content;
  let postCategory = req.body.category;
  console.log(postTitle, postBody, postCategory);
  db.Post.create({
    title: postTitle,
    body: postBody,
    category: postCategory,
  }).then(function (post) {
    console.log(post);
    res.redirect('/posts');
  });
});

router.post('/delete-post', (req, res) => {
  let specificPost = req.body.specificPost;

  console.log(specificPost);
  db.Post.destroy({
    where: {
      id: specificPost,
    },
  }).then(function (rowDeleted) {
    if (rowDeleted === specificPost) {
      console.log('Deleted Post');
    }
    res.redirect('/posts');
  });
});

module.exports = router;
