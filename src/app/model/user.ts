export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  lessions: Array<string>;
  right: number;
  wrong: number;
  constructor() {
    this.id = 0;
    this.username = '';
    this.password = '';
    this.email = '';
    this.lessions = new Array<string>();
    this.right = 0;
    this.wrong = 0;
  }
}
