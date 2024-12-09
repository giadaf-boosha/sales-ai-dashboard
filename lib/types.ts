export interface Opportunity {
  id: string;
  name: string;
  value: number;
  stage: 'New' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  owner: string;
  closingDate: string;
  createdAt: string;
  lastModified: string;
  probability?: number;
  notes?: string;
  company?: string;
  channel?: string;
  product?: string;
}

export interface SalesMetrics {
  totalRevenue: number;
  totalOpportunities: number;
  winRate: number;
  averageDealSize: number;
  pipelineValue: number;
  periodComparison: {
    revenue: number;
    opportunities: number;
    winRate: number;
  };
}

export interface ChartDataPoint {
  date: string;
  revenue: number;
  opportunities: number;
  wonDeals: number;
  conversion: number;
}

export interface FunnelStage {
  name: string;
  count: number;
  value: number;
  conversion: number;
}

export interface FilterState {
  dateRange: 'week' | 'month' | 'quarter' | 'year' | 'custom';
  startDate?: string;
  endDate?: string;
  stage?: string[];
  owner?: string[];
  product?: string[];
  channel?: string[];
  minValue?: number;
  maxValue?: number;
}