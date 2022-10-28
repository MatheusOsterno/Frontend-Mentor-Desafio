var products = [
    {"photo": "./images/image-product-1.jpg/",
    "name": "Sneakers",
    "price": 125 ,
    "quantity": 0
},
];

const sneakersProduct = {
    data() {
        return{
            products: window.products
        }
    }
};

Vue.createApp(sneakersProduct).mount('#app');