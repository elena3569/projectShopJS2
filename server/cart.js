const add = (cart, req) => {
  cart.totalSum += req.body.price;
  cart.amount += +req.body.quantity;
  cart.contents.push(req.body);
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  const find = cart.contents.find((el) => el.id_product === +req.params.id);
  cart.totalSum += find.price * +req.body.quantity;
  cart.amount += +req.body.quantity;
  find.quantity += req.body.quantity;
  return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {
  const find = cart.contents.find((el) => el.id_product === +req.params.id);
  cart.totalSum -= find.price * find.quantity;
  cart.amount -= find.quantity;
  cart.contents.splice(cart.contents.indexOf(find), 1);
  return JSON.stringify(cart, null, 4);
};

module.exports = {
  add,
  change,
  del,
};
