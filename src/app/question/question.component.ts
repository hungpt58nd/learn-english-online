import { Component, OnInit } from '@angular/core';
import {Question} from '../model/question';
import { QuestionService } from "./question.service";

const mockQuestion = [
  {
    title: 'How are you ?',
    description: 'Dịch câu tiếng anh sau sang tiếng việt',
    type: 1,
    rightAnswer: 'Bạn có khỏe không ?',
    answers: null
  },
  {
    title: 'How __ you ?',
    description: 'Chọn đáp án đúng cho câu dưới đây',
    type: 2,
    rightAnswer: 'How are you ?',
    answers: {
      chooses: ['are', 'do', 'what']
    }
  }
];

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  hearts: Array<string>;
  // question: Question = new Question();
  selectedImage: string;
  selectedIndex: number;
  processBar: number;
  selectedQuestion: Question = new Question();
  selectedIndexQuestion = 0;
  backgroundFooter: string;
  isCheck: boolean;
  isRight: boolean;
  constructor(private questionService: QuestionService) {
    this.questionService.getQuestions("2").subscribe(
      res => {
        console.log(res)
      }
    );
  }

  ngOnInit() {
    this.selectedIndex = -1;
    this.hearts = ['black', 'red'];
    this.selectedImage = '5px 10px 50px #a9a555';
    this.processBar = 0;
    this.selectedQuestion = mockQuestion[this.selectedIndexQuestion];
  }

  onSelectAnswer(index: number): void {
    this.selectedIndex = index;
  }
  increaseProcessBar() {
    this.selectedIndexQuestion ++;
    this.selectedQuestion = mockQuestion[this.selectedIndexQuestion];
    this.processBar = this.processBar + 20;
    if (this.processBar === 100) {
      alert('Bạn đã hoàn thành bài học');
    }
  }
  onCheckAnswer() {
    this.isCheck = true;
    this.isRight = false;
  }
  onForwardQuestion() {
    this.increaseProcessBar();
    this.isCheck = false;
  }
}
