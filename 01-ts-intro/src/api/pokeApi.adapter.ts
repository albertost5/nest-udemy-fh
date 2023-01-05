import axios from "axios";

export interface HttpAdapter {

    get<T>(url: string): Promise<T>;

}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log('fetch data => ', data);
        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axiosClient = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.axiosClient.get<T>(url);
        console.log('axios data => ', data);
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