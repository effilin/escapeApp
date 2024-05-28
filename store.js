const products =[
    {id:1, product: "Sticker", description:"this is an very cool colorful sticker that you win when you escape", price: "free"},
    {id:2, product: "Shirt", description:"a t-shirt styled similarly to the pages art", price: '$30.00'},
    {id:3, product: "Hat", description:"this baseball styler hat features colorful artwork similar to this page's art", price: '$10.00'},
]

function addCard(array) { 

    for(let i=0; i <array.length; i++) {
   
     let title = array[i].product
     let content =array[i].description
     let myPrice = array[i].price
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = content;
    template.querySelector('.card-price').innerText = myPrice;
    document.querySelector('#myCards').appendChild(template);
    }
}
addCard(products);