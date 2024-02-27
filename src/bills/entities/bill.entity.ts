export class Bill {
    createdAt: Date;
    user: string;
    merchant: string;
    dueDate: Date;
    isRecurring: boolean;
    frequency: string;
    description: string;
    amount: number;
    category: string[];
    isPaid: boolean;
    lastPaidDate: Date;
}

