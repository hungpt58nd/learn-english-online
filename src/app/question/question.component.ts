import { Component, OnInit } from '@angular/core';
import {Question} from '../model/question';

const mockQuestion = [
  {
    title: 'How are you ?',
    description: 'Dịch câu tiếng anh sau sang tiếng việt',
    type: 1,
    rightAnswer: 'Bạn có khoẻ không ?',
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
  },
  {
    title: 'Boy',
    description: 'Chọn bức tranh phù hợp với từ',
    type: 3,
    rightAnswer: 'Cậu bé',
    answers: [
      {
        imageLink: 'url(../../assets/image/boy.png)',
        description: 'Cậu bé'
      },
      {
        imageLink: 'url(../../assets/image/girl.png)',
        description: 'Cô gái'
      },
      {
        imageLink: 'url(../../assets/image/man.png)',
        description: 'Người đàn ông'
      }
    ]
  },
  {
    title: '',
    description: '',
    type: 4,
    rightAnswer: 'boy',
    answers: {
      fileLink: '../../assets/sound/boy.mp3'
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
  answer: string;
  constructor() { }

  ngOnInit() {
    this.selectedIndex = -1;
    this.hearts = ['red', 'red'];
    this.selectedImage = '5px 10px 50px #a9a555';
    this.processBar = 0;
    this.selectedQuestion = mockQuestion[this.selectedIndexQuestion];
    this.answer = '';
  }

  onSelectAnswer(index: number): void {
    this.selectedIndex = index;
  }
  increaseProcessBar() {
    this.selectedIndexQuestion ++;
    if (this.selectedIndexQuestion === mockQuestion.length) {
      this.processBar = 100;
    } else {
      this.processBar = this.processBar + (100 / mockQuestion.length);
    }
  }
  onCheckAnswer() {
    let flag = false;
    switch (this.selectedQuestion.type) {
      case 1: {
        break;
      }
      case 2: {
        if (this.selectedIndex === -1) {
          flag = true;
        } else {
          this.answer = this.selectedQuestion.title.replace('__', this.selectedQuestion.answers.chooses[this.selectedIndex]);
        }
        break;
      }
      case 3: {
        if (this.selectedIndex === -1) {
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
      const learnedLesson = localStorage.getItem('learnedLesson') ? localStorage.getItem('learnedLesson') : '-1';
      const lessonId = localStorage.getItem('lesson_id');
      localStorage.setItem('learnedLesson', learnedLesson + ',' + lessonId);
      window.open('/', '_parent');
    }
    this.selectedQuestion = mockQuestion[this.selectedIndexQuestion];
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
