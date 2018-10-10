import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from '../model/lesson';

@Component({
  selector: 'app-lesson-container',
  templateUrl: './lesson-container.component.html',
  styleUrls: ['./lesson-container.component.css']
})
export class LessonContainerComponent implements OnInit {
  @Input() index: number;
  @Input() length: number;
  @Input() lesson: Lesson;
  @Input() isPass: boolean;
  constructor() {}

  ngOnInit() {
  }

}
