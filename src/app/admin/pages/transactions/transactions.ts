
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TxType = 'deposit' | 'withdraw';
type TxStatus = 'pending' | 'completed' | 'failed';

interface Transaction {
  id: number;
  mail: string;
  asset: string;
  amount: number;
  type: TxType;
  network: string;
  address: string;
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
 updateStatus(tx: Transaction, event: Event) {
  const value = (event.target as HTMLSelectElement).value as TxStatus;

  if (value === tx.status) return;

  // 🔒 Confirm (optional nhưng rất nên có)
  const ok = confirm(`Update transaction #${tx.id} to ${value.toUpperCase()}?`);
  if (!ok) return;

  // ✅ Update local state (optimistic UI)
  tx.status = value;

  // 🔗 Sau này gắn API tại đây
  // this.transactionService.updateStatus(tx.id, value).subscribe(...)
}

  transactions: Transaction[] = [
    {
      id: 1001,
      mail: 'vana@gmail.com',
      asset: 'USDT',
      amount: 5000,
      type: 'deposit',
      network: 'ERC20',
      address: '0x1234...abcd',
      status: 'completed',
      createdAt: '2025-01-15 09:12',
    },
    {
      id: 1002,
      mail: 'johndoe@gmail.com',
      asset: 'USDT',
      amount: 1200,
      type: 'withdraw',
      network: 'TRC20',
      address: 'TXYZ...wxyz',
      status: 'pending',
      createdAt: '2025-01-15 10:40',
    },
  ];
}

