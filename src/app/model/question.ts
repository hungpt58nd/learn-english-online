import {QuestionType} from './type';

export class Question {
  title: string;
  description: string;
  type: number;
  rightAnswer: string;
  answers: QuestionType;
}
