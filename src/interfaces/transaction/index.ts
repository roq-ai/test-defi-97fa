import { UserInterface } from 'interfaces/user';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  amount: number;
  user_id?: string;
  customer_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  customer?: CustomerInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  customer_id?: string;
}
