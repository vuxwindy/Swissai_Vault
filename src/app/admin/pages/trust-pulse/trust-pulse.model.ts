export type TrustStatus = 'running' | 'completed' | 'stopped';

export interface TrustPulseItem {
  id: number;
  userName?: string;
  pair: string;
  exchange: string;
  value: number;
  expectedProfit: number;
  term: number;
  status: TrustStatus;
  createdAt: string;
}