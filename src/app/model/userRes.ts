import {User} from './user';

export class UserRes {
  status: string;
  data: User;
  message: string;
  constructor(){
    this.status = '';
    this.data = new User();
    this.message = '';
  }
}