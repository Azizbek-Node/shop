const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")
const seeMoreButton = document.querySelector(".see-more-btn") // See More tugmasini topish

const API_URL = "https://dummyjson.com"
let offset = 1
let perPageCount = 4
let closeBtn = 0
let category = "all"
async function fetchData(api){
    const response = await fetch(api)
    response
        .json()
        .then(res => {
            createCard(res)
            checkSeeMore(res) 
        })
        .catch(err => console.log(err))
        .finally(() => {
            loading.style.display = "none"
        })
}
fetchData(`${API_URL}/products?limit=${perPageCount * offset}`)

function getByCategory(selectedCategory){
    category = selectedCategory
    offset = 1;
    if(category == "all"){
        fetchData(`${API_URL}/products?limit=${perPageCount * offset}`)
    }
    else if(category == "beauty"){
        fetchData(`${API_URL}/products/category/beauty?limit=${perPageCount * offset}`)
    }
    else if(category == "fragrances"){
        fetchData(`${API_URL}/products/category/fragrances?limit=${perPageCount * offset}`)
    }
    else if(category == "furniture"){
        fetchData(`${API_URL}/products/category/furniture?limit=${perPageCount * offset}`)
    }
    else if(category == "groceries"){
        fetchData(`${API_URL}/products/category/groceries?limit=${perPageCount * offset}`)
    }
    else if(category == "home-decoration"){
        fetchData(`${API_URL}/products/category/home-decoration?limit=${perPageCount * offset}`)
    }
    else if(category == "kitchen-accesories"){
        fetchData(`${API_URL}/products/category/kitchen-accesories?limit=${perPageCount * offset}`)
    }
    else if(category == "laptops"){
        fetchData(`${API_URL}/products/category/laptops?limit=${perPageCount * offset}`)
    }
    else if(category == "mens-shirts"){
        fetchData(`${API_URL}/products/category/mens-shirts?limit=${perPageCount * offset}`)
    }
    else if(category == "mens-shoes"){
        fetchData(`${API_URL}/products/category/mens-shoes?limit=${perPageCount * offset}`)
    }
    else if(category == "mens-watches"){
        fetchData(`${API_URL}/products/category/mens-watches?limit=${perPageCount * offset}`)
    }
    else if(category == "mobile-accessories"){
        fetchData(`${API_URL}/products/category/mobile-accessories?limit=${perPageCount * offset}`)
    }
    else if(category == "motorcycle"){
        fetchData(`${API_URL}/products/category/motorcycle?limit=${perPageCount * offset}`)
    }
    else if(category == "skincare"){
        fetchData(`${API_URL}/products/category/skincare?limit=${perPageCount * offset}`)
    }
    else if(category == "smartphones"){
        fetchData(`${API_URL}/products/category/smartphones?limit=${perPageCount * offset}`)
    }
    else if(category == "sport-accesories"){
        fetchData(`${API_URL}/products/category/sport-accesories?limit=${perPageCount * offset}`)
    }
    else if(category == "sunglasses"){
        fetchData(`${API_URL}/products/category/sunglasses?limit=${perPageCount * offset}`)
    }
    else if(category == "tablets"){
        fetchData(`${API_URL}/products/category/tablets?limit=${perPageCount * offset}`)
    }
    else if(category == "tops"){
        fetchData(`${API_URL}/products/category/tops?limit=${perPageCount * offset}`)
    }
    else if(category == "vehicle"){
        fetchData(`${API_URL}/products/category/vehicle?limit=${perPageCount * offset}`)
    }
    else if(category == "womens-bags"){
        fetchData(`${API_URL}/products/category/womens-bags?limit=${perPageCount * offset}`)
    }
    else if(category == "womens-dresses"){
        fetchData(`${API_URL}/products/category/womens-dresses?limit=${perPageCount * offset}`)
    }
    else if(category == "womens-jewellery"){
        fetchData(`${API_URL}/products/category/womens-jewellery?limit=${perPageCount * offset}`)
    }
    else if(category == "womens-shoes"){
        fetchData(`${API_URL}/products/category/womens-shoes?limit=${perPageCount * offset}`)
    }
    else if(category == "womens-watches"){
        fetchData(`${API_URL}/products/category/womens-watches?limit=${perPageCount * offset}`)
    }
    else{
        fetchData(`${API_URL}/products/category/${category}?limit=${perPageCount * offset}`)
    }
}

function createCard(data){
    while(wrapper.firstChild){
        wrapper.firstChild.remove()
    }
    data.products.forEach(product => {
        const card = document.createElement("div")
        card.className =  "card"
        card.innerHTML = `
            <img src=${product.images[0]} alt=""/>
            <h3>${product.title}</h3>
            <strong>${product.price} USD</strong>
            <br>
            <button onclick="buyNow(${product.id})">Buy now</button>
        `
        wrapper.appendChild(card)
    })
    window.scrollTo(0, wrapper.scrollHeight)
}

function checkSeeMore(data){
    if (data.products.length < perPageCount) {
        seeMoreButton.style.display = "none"
    } else {
        seeMoreButton.style.display = "block"
    }
}

function seeMore(){
    loading.style.display = "flex"
    offset++
    let api;
    if (category == "all") {
        api = `${API_URL}/products?limit=${perPageCount * offset}`;
    } 
    else {
        api = `${API_URL}/products/category/${category}?limit=${perPageCount * offset}`;
    }
    fetchData(api)

}
