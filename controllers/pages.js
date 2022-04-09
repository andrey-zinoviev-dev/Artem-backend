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
  
  const cartElementKeys = Object.keys(cart).filter((key) => {
    return key !== 'quantity' && key !== 'price';
  });
  
  const seekedElementInArray = arrayToSend.findIndex((element) => {
    return cartElementKeys.every((key) => {
      return element[key] === cart[key];
    });
  });

  if(seekedElementInArray > -1) {
    let elementQuantity = Number(arrayToSend[seekedElementInArray].quantity);
    let elementPrice = arrayToSend[seekedElementInArray].price;
    elementQuantity += Number(cart.quantity);
    
    elementPrice = cart.price * elementQuantity;
    
    arrayToSend[seekedElementInArray].quantity = `${elementQuantity}`;
    arrayToSend[seekedElementInArray].price = elementPrice;

    return res.cookie('cart', JSON.stringify(arrayToSend), {
      httpOnly: true,
      path:'/',
      secure: true,
    }).send(arrayToSend);
  }

  arrayToSend.push(cart);

  return res.cookie('cart', JSON.stringify(arrayToSend), {
      httpOnly: true,
      path:'/',
      secure: true,
    }).send(arrayToSend);
};

const deleteElementFromCart = (req, res) => {
  const { cart } = req.cookies;
  const { cartElement } = req.body;
 
  const cartJson = JSON.parse(cart);

  const elementIndexOfBodyInArray = cartJson.findIndex((element) => {
    return Object.keys(element).every((key => {
      return element[key] === cartElement[key];
    }));
    // keys.forEach((key) => {
    //   console.log(element[key] === cartElement[key]);
    // })
  });

  cartJson.splice(elementIndexOfBodyInArray, 1);
  
  return res.cookie('cart', JSON.stringify(cartJson), {
    httpOnly: true,
    path:'/',
    secure: true,
  }).send(cartJson)
};

module.exports = {
  // loadInitialPage,
  loadOrderPage,
  loadInitialCart,
  updateCart,
  deleteElementFromCart
}