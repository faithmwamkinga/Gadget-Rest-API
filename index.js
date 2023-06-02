const productContainer=document.getElementById("products")
const getProducts=()=>{
  return fetch("https://dummyjson.com/products?limit=8")
  .then(response=>response.json())
  .then(response=>response)
  .catch(error=>error)
}


const displayProducts=async()=>{
  const products=await getProducts();
  console.log(products);
  products.products.map(item=>{
    let div=document.createElement("div")
    let image=document.createElement("img")
    let price=document.createElement("p")
    let discountPercentage=document.createElement("p")
    let rating=document.createElement("p")
    let stock=document.createElement("p")
    let brand=document.createElement("p")
    let category=document.createElement("p")

    image.src=item.thumbnail
    price.innerHTML=item.price
    discountPercentage.innerHTML=item.discount
    rating.innerHTML=item.rating
    stock.innerHTML=item.stock
    brand.innerHTML=item.brand
    category.innerHTML=item.category

    div.appendChild(image)
    div.appendChild(price)
    div.appendChild(discountPercentage)
    div.appendChild(rating)
    div.appendChild(stock)
    div.appendChild(brand)
    div.appendChild(category)
    div.id='key'
    div.setAttribute('class','product')
    productContainer.appendChild(div)
  })
}
displayProducts();