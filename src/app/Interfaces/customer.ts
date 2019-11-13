import { Contact } from './contact';

export interface Customer {
  id?: number;
  companyName: string;
  address: string;
  contacts: Contact[];
}
