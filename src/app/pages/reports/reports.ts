import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports {
  @Input() name = 'USDT Cross-DEX Arbitrage';
  @Input() pair = 'USDT / ETH';
  @Input() network = 'Arbitrum';
  @Input() roi = 4.2; // %
  @Input() risk: 'Low' | 'Medium' | 'High' = 'Medium';
  @Input() status: 'Running' | 'Paused' | 'Stopped' = 'Running';
}
