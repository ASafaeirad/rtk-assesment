export type Weekday =
  | 'friday'
  | 'monday'
  | 'saturday'
  | 'sunday'
  | 'thursday'
  | 'tuesday'
  | 'wednesday';

export interface Install {
  day: Weekday;
  value: number;
}

export interface Revenue {
  day: Weekday;
  value: number;
}

export interface Overview {
  installs: Install[];
  revenue: Revenue[];
}
