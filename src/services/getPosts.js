export const getPosts = async (id) =>{
    const response = await fetch(`https://dummyjson.com/posts/user/${id}`)
    const data = await response.json()

    return data.posts
}