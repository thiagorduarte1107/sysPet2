import { Pet } from './pet.model';

export interface Customer {
  id?: number;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  pets?: Pet[];
}