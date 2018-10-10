import {QuestionType} from './type';

class Image {
  imageLink: string;
  description: string;
  constructor(){
    this.imageLink = '';
    this.description = '';
  }
}

export class ImageQuestion implements QuestionType {
  imageQuestions: Array<Image>;
  constructor(){
    this.imageQuestions = new Array<Image>();
  }
}
