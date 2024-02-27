import * as mongoose from 'mongoose';

export const BillSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    merchant: { type: String, required: true },
    dueDate: { type: Date, required: true },
    isRecurring: { type: Boolean, required: true },
    frequency: { type: String, enum: ['WEEKLY', 'BIWEEKLY', 'MONTHLY', 'YEARLY'] },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: [{ type: String }],
    isPaid: { type: Boolean, default: false },
    lastPaidDate: { type: Date },
});

