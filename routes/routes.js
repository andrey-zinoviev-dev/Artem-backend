const express = require('express');
const router = express();
const { updateCart, loadOrderPage, loadInitialCart } = require('../controllers/pages');

// router.get('/', loadInitialPage);
// router.get('/setcookie', setCartCookie);
router.post('/', loadInitialCart);
router.get('/orderPage', loadOrderPage);
// router.get('/orderpage', loadOrderCartCookie);
router.post('/updateCart', updateCart);

module.exports = {
  router,
}