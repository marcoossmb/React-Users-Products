export const getProductDetail = async (id) =>{
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    
    return data
}