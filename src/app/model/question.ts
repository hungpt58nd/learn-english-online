import {QuestionType} from './type';

export class Question {
  title: string;
  description: string;
  type: number;
  rightAnswer: string;
  answers: QuestionType;
  constructor(title: string, description: string, rightAnswer: string, answers: QuestionType) {
    this.title = title;
    this.description = description;
    this.rightAnswer = rightAnswer;
    this.answers = answers;
  }
}
