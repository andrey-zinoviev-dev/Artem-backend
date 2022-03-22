const express = require('express');
const router = express();
const { updateCart, loadOrderPage, loadInitialCart, loadInitialPage } = require('../controllers/pages');

router.get('/', loadInitialPage);
// router.get('/setcookie', setCartCookie);
router.get('/cartcookie', loadInitialCart);
router.get('/orderPage', loadOrderPage);
// router.get('/orderpage', loadOrderCartCookie);
router.post('/updateCart', updateCart);

module.exports = {
  router,
}