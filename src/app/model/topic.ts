import {Lesson} from './lesson';

export class Topic {
  level: number;
  title: string;
  description: string;
  lessonList: Array<Lesson>;
}
