import api from "../config/api"

export async function getUser(id: number) {
    try {
        const result = await api.get(`/usuario/${id}`)
        return result.data.id
    }catch(error){
        console.log(error)
        return null
    }
}