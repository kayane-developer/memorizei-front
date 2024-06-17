import api from '@/src/config/api';

export async function loginUser(usuario: string, senha: string) {
    if(!usuario || !senha) return null
    try{
        const result = await api.post(`usuario/validar/${usuario}/${senha}`)
        return result
    }catch(error){
        console.log(error)
        return null
    }
}