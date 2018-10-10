import {Lesson} from './lesson';

export class Topic {
  level: number;
  title: string;
  description: string;
  lessonList: Array<Lesson>;
  constructor() {
    this.level = 0;
    this.title = '';
    this.description = '';
    this.lessonList = new Array<Lesson>();
  }
}
