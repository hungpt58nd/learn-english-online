import {QuestionType} from './type';

class Choose {
  answer: string;
}

export class ChooseQuestion implements QuestionType {
  chooses: Array<Choose>;
}
