import type { MonthlySummary } from "../types";
import client from "./client";

export async function getMonthlySummary(month?: string): Promise<MonthlySummary> {
    const params = month ? {month} : {};
    const response = await client.get('/summary/', {params});
    return response.data;
}