import { TransactionEntry } from "../entities/transaction-entry.entity";

export interface ITransactionEntry {
    id?: number;
    txnDay?: number;
    txnMonth?: number;
    txnYear?: number;
    description: string;
    amount: number;
    expense?: boolean;
   
}
