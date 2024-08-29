export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionsId : '1'
},{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1,
    deliveryOptionsId : '2'
}
];
}
// Normalizing the data 
function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
export function addToCart(productId){
    let matchingItem;
cart.forEach((cardItem) => {
    if(cardItem.productId === productId)
    matchingItem = cardItem; 
});
if (matchingItem) {

    matchingItem.quantity += 1;
} else {
    cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionsId : '1' // Default delivery option for new items
    });
}
saveToStorage();
}
export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cardItem) => {
        if(cardItem.productId!== productId)
        newCart.push(cardItem);
    });
    cart = newCart;
    saveToStorage();    
}
