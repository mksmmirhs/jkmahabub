const submitCartItem = () => {
  const productNameField = document.getElementById('item-name');
  const productPriceField = document.getElementById('item-price');
  const name = productNameField.value;
  const price = productPriceField.value;
  productNameField.value = '';
  productPriceField.value = '';
  showItemsToUI(name, price);
  saveCarTItemToLocal(name, price);
};

const showItemsToUI = (name, price) => {
  const selectUL = document.getElementById('ul-list');
  const createLi = document.createElement('li');
  createLi.innerText = `${name} - $${price}`;
  selectUL.appendChild(createLi);
};

const getCartFromLocal = () => {
  let cart = {};
  const storedCard = localStorage.getItem('cart');
  if (storedCard) {
    cart = JSON.parse(storedCard);
  }
  return cart;
};

const saveCarTItemToLocal = (name, price) => {
  const cart = getCartFromLocal();
  cart[name] = price;
  const cartString = JSON.stringify(cart);
  localStorage.setItem('cart', cartString);
};

const showItemsToUiFromLocal = () => {
  const carts = JSON.parse(localStorage.getItem('cart'));
  for (const cart in carts) {
    showItemsToUI(cart, carts[cart]);
  }
};
showItemsToUiFromLocal();
