let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/RI/NS/KO/23744269/tea-packaging-box-design-service-1000x1000.jpg'
    },
];

for (const item of products) {
    document.write(
        `<div>
<h3 class="product-title">${item.title} | Price - ${item.price}</h3>
<img class="product-image" src="${item.image}" alt="product">
</div>`
    )
}
