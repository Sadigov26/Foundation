var counters = [
    { id: 'nomreBirinci', start: 0, end: 15 },
    { id: 'nomreIkinci', start: 0, end: 392 },
    { id: 'nomreUcuncu', start: 0, end: 3293 },
    { id: 'nomreDorduncu', start: 0, end: 1212 },
    { id: 'numberSchools', start: 0, end: 15 },
    { id: 'numberStudents', start: 0, end: 1039 },
    { id: 'numberChildren', start: 0, end: 3298 },
    { id: 'numberOrphanage', start: 0, end: 32 },
];
var interval = 10;
var speed = 1; 

function startCounting() {
    counters.forEach(function(counter) {
        var counterElement = document.getElementById(counter.id);
        var count = counter.start;
        var maxCount = counter.end;

        var intervalId = setInterval(function() {
            if (count <= maxCount) {
                counterElement.textContent = count;
                count += speed;
            }
        }, interval);
    });
}

startCounting();


const div = document.querySelector('.productContainer')
const count = document.querySelector('.alo')


let db

function getAllData() {
    axios.get('https://dummyjson.com/products').then(res => {
            db = res.data.products
            db.forEach(item => {
                let box = document.createElement("div");
                box.className = "cards";
                box.innerHTML = `
                <img src=${item.thumbnail} alt="">
                        <h3>${item.title}</h3>
                        <p${item.brand}</p>
                        <h3>${item.price}</h2>
                        <button onclick="addToCart(${item.id})">ADD TO CART</button>
                        </div>
                `
                div.appendChild(box)
            })
        })
}



function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

getAllData();





