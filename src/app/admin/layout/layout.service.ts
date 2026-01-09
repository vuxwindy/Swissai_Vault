import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  collapsed = false;
  mobileOpen = false;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  get isDesktop(): boolean {
    if (!this.isBrowser) {
      return false; // SSR / Vite
    }
    return window.innerWidth >= 1024;
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile() {
    this.mobileOpen = false;
  }
}
