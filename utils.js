import axios from "axios"

const url = "http://localhost:3000"

export const getProducts = async (setState) => {
    const response = await axios.get(url + "/products")
    setState(response.data)
    return
}

