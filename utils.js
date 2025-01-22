import axios from "axios"

const url = "localhost:3000"

export const getProducts = async () =>
{
    const response = axios.get(url + "/products")
    return response
}

