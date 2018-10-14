import {Component, Input, OnInit} from '@angular/core';
import { User } from "../model/user"

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  @Input() levelAt: string;
  constructor() { 
  }

  ngOnInit() {
  }

}
