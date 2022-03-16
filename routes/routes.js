const express = require('express');
const router = express();
const { loadinitialPage , loadOrderPage } = require('../controllers/pages');

router.get('/orderpage', loadinitialPage);
router.post('/orderpage', loadOrderPage);

module.exports = {
  router,
}