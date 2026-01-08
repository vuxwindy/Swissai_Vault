import {Component, Inject, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {MetamaskService} from '../../pages/service/metamask.service';
// import { WalletService } from '@/shared/wallet/wallet.service';
type Language = 'EN' | 'CH';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header implements OnInit{
  walletConnected = false;
  walletAddress = '';
  mobileMenuOpen = false;
  currentLang = 'EN';

  private isBrowser: boolean;

  constructor(
    private mm: MetamaskService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async ngOnInit() {
    if (!this.isBrowser) return; // ⛔ SSR STOP HERE

    const accounts = await this.mm.getAccounts();
    if (accounts.length) this.setConnected(accounts[0]);

    this.mm.onAccountsChanged((accs) => {
      if (!accs.length) this.setDisconnected();
      else this.setConnected(accs[0]);
    });
  }

  async connectWallet() {
    if (!this.isBrowser) return;

    try {
      await this.mm.requestPermissionsForAccounts();
      const addr = await this.mm.connect();
      this.setConnected(addr);
    } catch (e: any) {
      if (e?.code === 4001) alert('Bạn đã từ chối kết nối.');
      else alert('Không thể kết nối MetaMask.');
      console.error(e);
    }
  }

  disconnectWallet() {
    this.setDisconnected();
    this.mobileMenuOpen = false;
  }

  private setConnected(addr: string) {
    this.walletConnected = true;
    this.walletAddress = this.shortenAddress(addr);
  }

  private setDisconnected() {
    this.walletConnected = false;
    this.walletAddress = '';
  }

  private shortenAddress(addr: string) {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }

  toggleSidebar() {}

  toggleLanguage() {
    this.currentLang = this.currentLang === 'EN' ? 'VI' : 'EN';
  }
}
