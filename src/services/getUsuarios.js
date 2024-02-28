export const getUsuarios = async () =>{
    const response = await fetch(`https://dummyjson.com/users?limit=9`)
    const data = await response.json()

    return data.users
}