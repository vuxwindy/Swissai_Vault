
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TxType = 'deposit' | 'withdraw';
type TxStatus = 'pending' | 'completed' | 'failed';

interface Transaction {
  id: number;
  user: string;
  asset: string;
  amount: number;
  type: TxType;
  network: string;
  status: TxStatus;
  createdAt: string;
}

@Component({
  selector: 'admin-transaction',
  standalone: true,
  imports: [CommonModule],
    templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions {
  transactions: Transaction[] = [
    {
      id: 1001,
      user: 'Nguyen Van A',
      asset: 'USDT',
      amount: 5000,
      type: 'deposit',
      network: 'ERC20',
      status: 'completed',
      createdAt: '2025-01-15 09:12',
    },
    {
      id: 1002,
      user: 'John Doe',
      asset: 'USDT',
      amount: 1200,
      type: 'withdraw',
      network: 'TRC20',
      status: 'pending',
      createdAt: '2025-01-15 10:40',
    },
  ];
}

