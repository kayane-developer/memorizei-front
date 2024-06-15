import api from '@/src/config/api';

export const saveUser = async (data, setLoading, setError, setSuccess) => {
    setLoading(true);

    try{
        await api.post("/usuario", data)
        setLoading(false);
        setSuccess(true);
    }catch (e){
        setLoading(false);
        setError(true);
    }
}