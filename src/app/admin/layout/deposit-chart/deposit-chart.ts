import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler);

@Component({
  selector: 'deposit-chart',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './deposit-chart.html',
  styleUrl: './deposit-chart.css',
})
export class DepositChart implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;

  chart?: Chart;
  timer?: any;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    // ⛔ CHỐT HẠ: không chạy ở server
    if (!this.isBrowser) return;
    if (!this.canvas) return;

    this.initChart();
    this.startRealtime();
  }

  ngOnDestroy() {
    this.timer && clearInterval(this.timer);
    this.chart?.destroy();
  }

  initChart() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Total Deposit (USDT)',
            data: [],
            borderColor: '#22d3ee',
            backgroundColor: 'rgba(34,211,238,0.15)',
            tension: 0.35,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  startRealtime() {
    let total = 50000;

    this.timer = setInterval(() => {
      if (!this.chart) return;

      const now = new Date().toLocaleTimeString();
      total += Math.floor(Math.random() * 2000);

      this.chart.data.labels!.push(now);
      this.chart.data.datasets[0].data.push(total);

      if (this.chart.data.labels!.length > 10) {
        this.chart.data.labels!.shift();
        this.chart.data.datasets[0].data.shift();
      }

      this.chart.update();
    }, 3000);
  }
}