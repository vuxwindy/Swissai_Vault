import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
 

@Component({
  selector: 'proposals',
 
  imports: [CommonModule, FormsModule],
  templateUrl: './proposals.html',
  styleUrl: './proposals.css',
})
export class Proposals {
activeTab: 'deposit' | 'withdraw' = 'deposit';
amount: number = 0;
setActiveTab(tab: 'deposit' | 'withdraw') {
  this.activeTab = tab;
}
 selectedNetwork = 'Arbitrum One';

  networkAddresses: Record<string, string> = {
    'Arbitrum One': '0x6a45D971FFce81a0adB8A2E4cee109C2D1dcb7d3',
    'TRC20': 'TNNZxM6JLfv6c7u4kvh3qfGvHQ8hAxVXB1',
    'ERC20': '0x6a45D971FFce81a0adB8A2E4cee109C2D1dcb7d3',
    'BEP20': 'bc1pmyta28r0z4vp7yp3qa0k58kh3m90v30462hh3qa6wlvels6wlamquv4zzz',
    'BTC': 'bc1pmyta28r0z4vp7yp3qa0k58kh3m90v30462hh3qa6wlvels6wlamquv4zzz',
    'ETH': '0x6a45D971FFce81a0adB8A2E4cee109C2D1dcb7d3',
  };

  transactions = [
  {
    value: 5000,
    protocol: 'TRC20',
    wallet: 'TQ7mP9Lx...D8FJ',
    type: 'Deposit',
    time: '2025-12-21 10:23',
    status: 'Completed',
  },
  {
    value: 1200,
    protocol: 'ERC20',
    wallet: '0xErc...A92B',
    type: 'Withdraw',
    time: '2025-12-22 08:11',
    status: 'Pending',
  },
];


 get depositAddress(): string {
    return this.networkAddresses[this.selectedNetwork];
  }

  copyAddress() {
    navigator.clipboard.writeText(this.depositAddress);
  }

}
