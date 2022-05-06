import { apiClient } from "../models/axiosConfif";


export async function test(): Promise<string> {
    const response: string = await apiClient
        .get('/').then(responseArr => {
            const response: string = responseArr.data;
            return response;
        });
    return response as string;
}