import { UserLoginData } from "@/type/user"
import axios from 'axios';
import { apiRoute } from '@/route'; 

const api = axios.create({
    baseURL: apiRoute.base.toString(), 
    headers: {"Content-Type": "application/json"},
});

api.interceptors.request.use((request) => {
    console.log(
        `URL: ${request.baseURL}${request.url}\nHeader: ${JSON.stringify(request.headers)}\nData: ${JSON.stringify(request.data)}`
    );

    return request;
});

export const login = async (data: UserLoginData) => {
    if (!data.account) {
        throw new Error('Account is null or undefined');
    }

    try {
        const response = await api.post('login', { account: data.account, password: data.password });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export default api; 
