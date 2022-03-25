const path = require ('path');
const bcrypt = require('bcrypt');

// const loadInitialPage = (req, res) => {
//   return res.sendFile(path.join(__dirname, '/index.html'));
// };

const loadOrderPage = (req, res) => {
  return res.sendFile(path.join(__dirname, '/order.html'));
};

const loadInitialCart = (req, res) => {
  if(!req.cookies.cart) {
    return res.status(200).send({
      message: 'Cart is empty, no cookie',
    })
  };
  return res.status(200).send({
    cart: req.cookies.cart,
  });
};

const updateCart = (req, res) => {
  const { cart } = req.body;

  let arrayToSend = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
  
  arrayToSend.push(cart);

  return res.cookie('cart', JSON.stringify(arrayToSend), {
      httpOnly: true,
      path:'/',
      secure: true,
    }).send({
      message: 'Cookie set',
  });
};

module.exports = {
  // loadInitialPage,
  loadOrderPage,
  loadInitialCart,
  updateCart,
}