import { addToCart } from "./cart.js";
class Cart {
  #localStorageKey;
  cartItems;
  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }
  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionsId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionsId: "2",
        },
      ];
    }
  }
  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }
  addToCart(productId) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) matchingItem = cartItem;
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId, // Fixed typo here
        quantity: 1,
        deliveryOptionsId: "1", // Default delivery option for new items
      });
    }
    this.saveToStorage();
  }
  removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cardItem) => {
      if (cardItem.productId !== productId) newCart.push(cardItem);
    });
    this.cartItems = newCart;
    this.saveToStorage();
  }
  updateDeliveryOption(productId, deliveryOptionsId) {
    let matchingItem;
    this.cartItems.forEach((cardItem) => {
      if (cardItem.productId === productId) matchingItem = cardItem;
    });
    matchingItem.deliveryOptionsId = deliveryOptionsId;
    this.saveToStorage();
  }
}
const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");
console.log(cart);
console.log(businessCart);
