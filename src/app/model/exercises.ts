import {Question} from './question';

export class Exercises {
  status: string;
  data: Array<Question>;
  message: string;
  constructor(){
    this.status = '';
    this.data = new Array<Question>();
    this.message = '';
  }
}

