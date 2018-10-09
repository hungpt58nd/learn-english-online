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
  selectedImage: string;
  selectedIndex: number;

  constructor() { }

  ngOnInit() {
    this.selectedIndex = -1;
    this.hearts = ['black', 'red', 'red'];
    this.selectedImage = '5px 10px 50px #a9a555';
  }

  onSelectAnswer(index: number): void {
    this.selectedIndex = index;
  }
}
