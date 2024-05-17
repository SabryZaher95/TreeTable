export interface Employee {
  id: number;
  name: string;
  manager_id: number | null;
  children?: Employee[];
}
