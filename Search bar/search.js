const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: 100,
    },
    {
        id: 4,
        image: 'image/bb-1.jpg',
        title: 'Audio Microphone',
        price: 230,
    },
    {
        id: 5,
        image: 'image/cc-1.jpg',
        title: 'Smart Watch',
        price: 100,
    },
];


const SearchBar=document.getElementById("searchbar");

SearchBar.addEventListener('keyup',(e)=>{
    const searchdata=e.target.value.toLowerCase();
    const filteredData=product.filter((item)=>{
       
        return(
            item.title.toLowerCase().includes(searchdata)
        )
        
    })
    displayItem(filteredData);
   
})
const root=document.getElementById('root');
const displayItem = (items) => {
    root.innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(product);

