import {QuestionType} from './type';

export class SoundQuestion implements QuestionType {
  fileLink: string;
  constructor(){
    this.fileLink = '';
  }
}
