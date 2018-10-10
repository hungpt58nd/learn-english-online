import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Question} from '../model/question';
import { QuestionService } from "./question.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  hearts: Array<string>;
  selectedImage: string;
  selectedIndex: number;
  processBar: number;
  selectedQuestion: Question = new Question();
  selectedIndexQuestion = 0;
  // backgroundFooter: string;
  isCheck: boolean;
  isRight: boolean;
  answer: string;
  questions: Array<Question> = new Array<Question>();
  constructor(
    private questionService: QuestionService,
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {
    this.questionService.getQuestions(activatedRoute.snapshot.paramMap.get('id')).subscribe(
      res => {
        this.questions = res.data;
        this.selectedIndex = -1;
        this.hearts = ['red', 'red'];
        this.selectedImage = '5px 10px 50px #a9a555';
        this.processBar = 0;
        this.selectedQuestion = this.questions[this.selectedIndexQuestion];
        this.answer = '';
      }
    );
  }
  
  onSelectAnswer(index: number): void {
    this.selectedIndex = index;
  }

  increaseProcessBar() {
    this.selectedIndexQuestion ++;
    if (this.selectedIndexQuestion == this.questions.length) {
      this.processBar = 100;
    } else {
      this.processBar = this.processBar + (100 / this.questions.length);
    }
  }

  onCancel(){
    this.increaseProcessBar();
    this.selectedQuestion = this.questions[this.selectedIndexQuestion];
    const indexHeart = this.hearts.lastIndexOf('black');
    if (indexHeart === 1) {
      alert('Bạn đã sai quá 2 lần');
      window.open('/', '_parent');
    } else {
      this.hearts[indexHeart + 1] = 'black';
    }
  }

  onCheckAnswer() {
    let flag = false;
    switch (this.selectedQuestion.type) {
      case 1: {
        break;
      }
      case 2: {
        // console.log(this.selectedQuestion.answers.chooses)
        if (this.selectedIndex === -1) {
          flag = true;
        } else {
          this.answer = this.selectedQuestion.title.replace('__', this.selectedQuestion.answers[this.selectedIndex]);
        }
        break;
      }
      case 3: {
        if (this.selectedIndex == -1) {
          flag = true;
        } else {
          this.answer = this.selectedQuestion.answers[this.selectedIndex].description;
        }
        break;
      }
      case 4: {
        break;
      }
    }
    if (this.answer === '' || flag) {
      alert('Input your answer');
      flag = false;
      return;
    } else {
      this.isCheck = true;
      if (this.answer === this.selectedQuestion.rightAnswer) {
        this.onPlayMP3('../../assets/sound/Correct.mp3');
        this.isRight = true;
      } else {
        this.onPlayMP3('../../assets/sound/Wrong.wav');
        this.isRight = false;
        const indexHeart = this.hearts.lastIndexOf('black');
        if (indexHeart === 1) {
          alert('Bạn đã sai quá 2 lần');
          window.open('/', '_parent');
        } else {
          this.hearts[indexHeart + 1] = 'black';
        }
      }
    }
    this.increaseProcessBar();
  }

  onForwardQuestion() {
    if (this.processBar >= 100) {
      alert('Bạn đã hoàn thành bài học');
      // const learnedLesson = localStorage.getItem('learnedLesson') ? localStorage.getItem('learnedLesson') : '-1';
      // const lessonId = localStorage.getItem('lesson_id');
      // localStorage.setItem('learnedLesson', learnedLesson + ',' + lessonId);
      this.router.navigate(['']);
    }
    this.selectedQuestion = this.questions[this.selectedIndexQuestion];
    this.isCheck = false;
    this.selectedIndex = -1;
    this.answer = '';
  }
  onPlayMP3(source) {
    const audio = new Audio();
    audio.src = source;
    audio.load();
    audio.play();
  }
}
