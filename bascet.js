const anaDiv = document.querySelector('.productContainer')

function getCartData() {
    anaDiv.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((item, index) => {
        let box = document.createElement("div");
        box.className = "cards";
        box.innerHTML = `
    <img src=${item.thumbnail} alt="">
    <h3>${item.title}</h3>
    <p${item.brand}</p>
    <h3>${item.price}</h2>
              <button class="cartBtn" onclick="deleteItem(${index})">DELETEㅤ<i class="fa-solid fa-trash"></i></button>
            </div>
            `;
        anaDiv.appendChild(box);
    });
}


function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCartData()
}

getCartData()





