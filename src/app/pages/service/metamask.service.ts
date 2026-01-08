import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

@Injectable({ providedIn: 'root' })
export class MetamaskService {

  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private zone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /** SAFE ethereum getter */
  private get eth(): MetaMaskInpageProvider | undefined {
    if (!this.isBrowser) return undefined;
    return window.ethereum;
  }

  isMetaMaskAvailable(): boolean {
    return !!this.eth && (this.eth as any).isMetaMask;
  }

  async connect(): Promise<string> {
    if (!this.isMetaMaskAvailable()) {
      throw new Error('METAMASK_NOT_FOUND');
    }

    const accounts = await this.eth!.request({
      method: 'eth_requestAccounts',
    }) as string[];

    if (!accounts?.length) throw new Error('NO_ACCOUNT');
    return accounts[0];
  }

  async getAccounts(): Promise<string[]> {
    if (!this.eth) return [];
    return await this.eth.request({ method: 'eth_accounts' }) as string[];
  }

  async requestPermissionsForAccounts(): Promise<void> {
    if (!this.eth) throw new Error('METAMASK_NOT_FOUND');

    await this.eth.request({
      method: 'wallet_requestPermissions',
      params: [{ eth_accounts: {} }],
    });
  }

  onAccountsChanged(cb: (accounts: string[]) => void): void {
    if (!this.eth) return;

    this.eth.on?.('accountsChanged', (accs: unknown) => {
      this.zone.run(() => cb((accs as string[]) ?? []));
    });
  }

  onChainChanged(cb: (chainId: string) => void): void {
    if (!this.eth) return;

    this.eth.on?.('chainChanged', (id: unknown) => {
      this.zone.run(() => cb(String(id)));
    });
  }

  disconnectFrontendOnly() {
    // MetaMask không hỗ trợ disconnect bằng code
  }
}
