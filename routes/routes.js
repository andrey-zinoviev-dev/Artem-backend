const express = require('express');
const router = express();
const { updateCart, loadOrderPage, loadInitialCart, loadInitialPage, deleteElementFromCart } = require('../controllers/pages');

// router.get('/', loadInitialPage);

// router.get('/setcookie', setCartCookie);
router.get('/cartcookie', loadInitialCart);
router.get('/orderPage', loadOrderPage);
// router.get('/orderpage', loadOrderCartCookie);
router.post('/updateCart', updateCart);
router.post('/deleteFromCart', deleteElementFromCart);

module.exports = {
  router,
}