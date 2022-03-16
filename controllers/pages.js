let goods = [];
const loadinitialPage = (req, res) => {
  // console.log(goods)
  res.status(200).send({
    message: goods,
  });
};

const loadOrderPage = (req, res) => {
  req.body.forEach((good) => {
    goods.push(good);
  });
};

module.exports = {
  loadinitialPage,
  loadOrderPage,
}