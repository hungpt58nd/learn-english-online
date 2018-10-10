import {QuestionType} from './type';


export class ChooseQuestion implements QuestionType {
  chooses: Array<string>;
  constructor(){
    this.chooses = new Array<string>();
  }
}
