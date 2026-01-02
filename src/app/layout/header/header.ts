import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { WalletService } from '@/shared/wallet/wallet.service';
type Language = 'EN' | 'CH';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
   // Wallet mock
  walletConnected = false;
  walletAddress = '0xA3f9...92Bc';
mobileMenuOpen = false;

toggleSidebar() {
  // TODO: gọi LayoutService
  console.log('toggle sidebar');
}

  // Language
  currentLang: Language = 'EN';

  connectWallet() {
    this.walletConnected = true;
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'EN' ? 'CH' : 'EN';
  }
}
