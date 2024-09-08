import { renderOrderSummary } from "../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
async function loadPage() {
  try {
    //throw "error";
    await loadProductsFetch();
    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        // reject("value3");
        resolve("value");
      });
    });
  } catch (error) {
    console.log("unexpected error. try again later.");
  }
  renderOrderSummary();
  renderPaymentSummary();
  return "value";
}
loadPage().then((value) => {
  console.log("next step" + value);
});
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
// loadProducts(() => {
//     loadCart(() =>{
//         renderOrderSummary();
//   renderPaymentSummary();
//     })
// });
*/
//import'../data/cart-class.js';
// import "../data/backend-practice.js";
// new Promise((resolve) => {
//     resolve();
//     console.log("Synchronous log"); // This runs first, before the promise resolves.
//   }).then(() => {
//     console.log("Asynchronous log"); // This runs after the synchronous log.
//   });
