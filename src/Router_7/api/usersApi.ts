import axios from "axios";
import type { User } from "../types/user";


const api = axios.create({

    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
});

export async function getUsers(): Promise<User[]> {

    const response = await api.get<User[]>("/users");
    return response.data;
}

export async function getUserById(id: number): Promise<User> {

    const response = await api.get<User>(`/users/${id}`);
    return response.data;
}