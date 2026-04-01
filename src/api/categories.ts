import type { Category } from "../types";
import client from "./client";

export async function getCategories(): Promise<Category[]> {
    const response = await client.get('/categories/');
    return response.data;
}

export async function createCategory(categoryData: Omit<Category, 'id'>): Promise<Category> {
    const response = await client.post('/categories/', categoryData);
    return response.data;
}

export async function updateCategory(id: number, updatedCategory: Partial<Category>): Promise<Category> {
    const response = await client.put(`/categories/${id}`, updatedCategory);
    return response.data;
}

export async function deleteCategory(id: number): Promise<void>{
    await client.delete(`/categories/${id}`)
}