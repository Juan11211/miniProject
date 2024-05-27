import axios from "../../../node_modules/axios/index"

// axios interceptorsWithStore here

export const apiRequest = () => {

    const defaultOptions = { 
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-Requestd-With, content-type, Authorization', 'Access-Control-Allow-Credentials': true,
            }
        }

        return {
            get: (url: string, options: any = {} ) => {
                return axios.get(url, {...defaultOptions, ...options});
            },
            post: (url: string, data: any, options: any = {} ) => {
                return axios.post(url, data, {...defaultOptions, ...options});
            },
            put: (url: string, data: any, options: any = {} ) => {
                return axios.put(url, data, {...defaultOptions, ...options});
            },
            delete: (url: string, options: any = {} ) => {
                return axios.delete(url, {...defaultOptions, ...options});
            },
        }
};