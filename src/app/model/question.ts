import {QuestionType} from './type';

export class Question {
  title: string;
  description: string;
  type: number;
  rightAnswer: string;
  answers: QuestionType;
  constructor() {
    this.title = '';
    this.description = '';
    this.rightAnswer = '';
    this.type = 0;
    this.answers = null;
  }
}
