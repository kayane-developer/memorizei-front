import api from '@/src/config/api';

export const saveDeck = async (data, setLoading, setError, setSuccess) => {
    setLoading(true);

    try{
        await api.post("/baralho", data)
        setLoading(false);
        setSuccess(true);
    }catch (e){
        setLoading(false);
        setError(true);
    }
}