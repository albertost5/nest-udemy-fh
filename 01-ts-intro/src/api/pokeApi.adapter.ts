import axios from "axios";

export class PokeApiAdapter {

    private readonly axiosClient = axios;

    async get(url: string) {
        const { data } = await this.axiosClient.get(url);
        return data;
    }

    async post(url: string, payload: any) {
        return;
    }

    async patch(url: string, payload: any) {
        return;
    }

    async delete(url: string) {
        return;
    }
}