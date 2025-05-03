export interface Period {
    id: number;
    year: string;
    start_date: string;
    end_date: string;
    is_current: boolean;
    created_at: string;
    updated_at: string;
  }
  
  export interface PeriodPayload {
    year: string;
    start_date: string;
    end_date: string;
    is_current: boolean;
  }
  