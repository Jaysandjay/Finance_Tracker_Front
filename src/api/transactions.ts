import client from './client'
import type { Transaction } from '../types'

export async function getTransactions(month?:string): Promise<Transaction[]> {
    const params = month ? {month} : {};
    const response = await client.get('/transactions/', {params});
    return response.data;
}

export async function createTransaction(transactionData: Omit<Transaction, 'id'|'createdAt'|'categoryName'>): Promise<Transaction> {
    const response = await client.post('/transactions/', transactionData);
    return response.data;
}

export async function updateTransaction(id: number, updatedTransaction: Partial<Transaction>): Promise<Transaction> {
    const response = await client.put(`/transactions/${id}/`, updatedTransaction);
    return response.data;
} 

export async function deleteTransaction(id: number): Promise<void> {
    await client.delete(`transactions/${id}`)
}