export const getAllProducts = callback  => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => callback(json.products));
}

export const getSingleProduct = (id, callback) => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(json => callback(json));
}