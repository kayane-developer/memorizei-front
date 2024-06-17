import api from '@/src/config/api';

export const saveUser = async (data) => {
    try{
        await api.post("/usuario", data)
    }catch (error){
        console.log(error)
    }
}