import {Topic} from './topic';

export class Levels {
  status: string;
  data: Array<Topic>;
  message: string;
  constructor(){
    this.status = '';
    this.data = new Array<Topic>();
    this.message = '';
  }
}

