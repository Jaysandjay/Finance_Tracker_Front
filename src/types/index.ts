
export interface Category {
    id: number;
    name: string;
    color: string
}

export interface Transaction {
    id: number;
    amount: string;
    type: 'income' | 'expense';
    category: number | null;
    categoryName: string | null
    description: string;
    date: string;
    createdAt: string
}

export interface Budget {
    id: number;
    category: number;
    categoryName: string;
    month: string;
    limit: string
}

export interface MonthlySummary {
    month: string;
    totalIncome: number;
    totalExpenses: number;
    net: number;
    byCategory: {
        categoryName: string;
        categoryColor: string;
        total: number
    }[];
}