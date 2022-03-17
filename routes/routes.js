const express = require('express');
const router = express();
const { setCartCookie, loadinitialPage , changeCartCookie } = require('../controllers/pages');

router.get('/', setCartCookie);
// router.get('/orderpage', loadinitialPage);
router.post('/updateCart', changeCartCookie);

module.exports = {
  router,
}