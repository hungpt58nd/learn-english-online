import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-level-lesson',
  templateUrl: './level-lesson.component.html',
  styleUrls: ['./level-lesson.component.css']
})
export class LevelLessonComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
