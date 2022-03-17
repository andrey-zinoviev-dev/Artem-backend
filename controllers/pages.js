const setCartCookie = (req, res) => {
  if(!req.cookies.cart) {
    return res.cookie('cart', JSON.stringify([]), {
      httpOnly: true,
      expires: new Date(Date.now() + 90000000),
    }).status(200).send({
      message: 'Cookie set',
    });
  };

  return res.status(200).send(req.cookies.cart);
};

const loadinitialPage = (req, res) => {
  // res.status(200).send({
  //   message: goods,
  // });
};

const changeCartCookie = (req, res) => {
  if(!req.cookies.cart) {
    return res.status(400).send({
      message: 'Cookie is missing',
    });
  }
  return res.cookie('cart', JSON.stringify(req.body), {
    httpOnly: true,
  }).status(201).send({
    message: "Cookie updated",
  });
  // console.log(req.body);
};

module.exports = {
  setCartCookie,
  loadinitialPage,
  changeCartCookie,
}