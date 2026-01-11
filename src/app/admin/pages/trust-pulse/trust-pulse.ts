import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustPulseItem, TrustStatus } from './trust-pulse.model';

@Component({
  selector: 'admin-trust-pulse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust-pulse.html',
  styleUrl: './trust-pulse.css',
})
export class Trustpulse {
  pulses: TrustPulseItem[] = [
    {
      id: 1,
      userName: 'Alice',
      pair: 'ETH',
      exchange: 'Kraken',
      value: 393,
      expectedProfit: 1107.87,
      status: 'running' as TrustStatus,
      term: 30,
      createdAt: '2026-01-05 13:52:21',
    },
     {
      id: 2,
      userName: 'Bob',
      pair: 'USDT',
      exchange: 'Binance',
      value: 393,
      expectedProfit: 1107.87,
      status: 'completed' as TrustStatus,
      term: 30,
      createdAt: '2026-01-05 13:52:21',
    },
     {
      id: 3,  
      userName: 'Charlie',
      pair: 'USDC',
      exchange: 'OKX',
      value: 393,
      expectedProfit: 1107.87,
      status: 'stopped' as TrustStatus,
      term: 30,
      createdAt: '2026-01-05 13:52:21',
    },
  ];

   stop(p: TrustPulseItem) {
    p.status = 'stopped';
  }
}

