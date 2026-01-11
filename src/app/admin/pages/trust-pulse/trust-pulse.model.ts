export type TrustStatus = 'running' | 'completed' | 'stopped';

export interface TrustPulseItem {
  id: number;
  pair: string;
  exchange: string;
  value: number;
  expectedProfit: number;
  term: number;
  status: TrustStatus;
  createdAt: string;
}