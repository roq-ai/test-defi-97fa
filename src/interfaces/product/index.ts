import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  type: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  user_id?: string;
}
