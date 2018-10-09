import { Component, OnInit } from '@angular/core';
import {Question} from '../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  hearts: Array<string>;
  question: Question = new Question();
  constructor() { }

  ngOnInit() {
    this.hearts = ['black', 'red', 'red'];
  }

}
