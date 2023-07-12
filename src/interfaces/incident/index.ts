import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface IncidentInterface {
  id?: string;
  description: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface IncidentGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  user_id?: string;
}
