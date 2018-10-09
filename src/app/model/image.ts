import {QuestionType} from './type';

class Image {
  imageLink: string;
  description: string;
}

export class ImageQuestion implements QuestionType {
  imageQuestions: Array<Image>;
}
