const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('info', { title: 'Info web page' });
});

module.exports = router;
