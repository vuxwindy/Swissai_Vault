import {
  AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild,
  Inject, PLATFORM_ID
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports implements AfterViewInit, OnDestroy {
  @Input() name = 'USDT Cross-DEX Arbitrage';
  @Input() pair = 'USDT / ETH';
  @Input() network = 'Arbitrum';
  @Input() roi = 4.2;
  @Input() risk: 'Low' | 'Medium' | 'High' = 'Medium';
  @Input() status: 'Running' | 'Paused' | 'Stopped' = 'Running';

  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

  @Input() symbol: string = 'NASDAQ:AAPL';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() interval: string = 'D';
  @Input() locale: string = 'en';
  @Input() timezone: string = 'Etc/UTC';

  private scriptEl?: HTMLScriptElement;
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return; // ✅ SSR: skip
    this.loadWidget();
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;

    if (this.scriptEl?.parentNode) this.scriptEl.parentNode.removeChild(this.scriptEl);
    if (this.container?.nativeElement) this.container.nativeElement.innerHTML = '';
  }

  private loadWidget(): void {
    const host = this.container.nativeElement;

    // Clear trước (tránh append nhiều lần)
    host.innerHTML = `
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span class="blue-text">Chart</span>
        </a>
        <span class="trademark"> by TradingView</span>
      </div>
    `;

    const script = this.doc.createElement('script'); // ✅ dùng DOCUMENT
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;

    script.innerHTML = JSON.stringify({
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: this.interval,
      locale: this.locale,
      save_image: true,
      style: '1',
      symbol: this.symbol,
      theme: this.theme,
      timezone: this.timezone,
      backgroundColor: '#ffffff',
      gridColor: 'rgba(46, 46, 46, 0.06)',
      watchlist: [],
      withdateranges: false,
      compareSymbols: [],
      studies: [],
      autosize: true,
    });

    this.scriptEl = script;
    host.appendChild(script);
  }
}
