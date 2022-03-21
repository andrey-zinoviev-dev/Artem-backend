const path = require ('path');
const bcrypt = require('bcrypt');

// const loadInitialPage = (req, res) => {
//   return res.sendFile(path.join(__dirname, '/order.html'));
// };

const loadOrderPage = (req, res) => {
  return res.sendFile(path.join(__dirname, '/order.html'));
};

const loadInitialCart = (req, res) => {
  console.log(req.body);
};

// const setCartCookie = (req, res) => {
//   if(!req.cookies.cart) {
//     return res.cookie('cart', "empty", {
//       // sameSite: 'None',
//       httpOnly: true,
//       // expires: new Date(Date.now() + 90000000),
//       // secure: true,
//     }).status(200).send({
//       message: 'Cookie set',
//     });
//   };

//   return res.status(200).send(req.cookies.cart);
// };

// const loadOrderCartCookie = (req, res) => {
//   if(!req.cookies.cart) {
//     return res.status(400).send({
//       message: "Cookie is missing",
//     });
//   };
//   return res.status(200).send(req.cookies.cart);
// };

const updateCart = (req, res) => {
  console.log(req.body);
  let cryptedBody; 
  // console.log(cryptedBody.localeCompare)
  if(req.body.hash === null) {
    return bcrypt.hash(JSON.stringify(req.body.cart), 10).then((hash) => {
      cryptedBody = hash;
      res.status(201).send({hash});
    })
  };
  
  console.log('hash exists');
  // return res.status(200).send({
  //   name: 'cart',
  //   content: req.body,
  // });
  // if(!req.cookies.cart) {
  //   return res.status(400).send({
  //     message: 'Cookie is missing',
  //   });
  // }
  // return res.cookie('cart', JSON.stringify(req.body), {
  //   httpOnly: true,
  // }).status(201).send({
  //   message: "Cookie updated",
  // });
  // console.log(req.body);
};

module.exports = {
  loadOrderPage,
  loadInitialCart,
  // setCartCookie,
  // loadOrderCartCookie,
  updateCart,
}