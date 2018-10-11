import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})
export class StatisticalComponent implements OnInit {
  levelAt: string;
  right: string;
  wrong: string;
  constructor() { }

  ngOnInit() {
    this.levelAt = localStorage.getItem('level_at') ? localStorage.getItem('level_at'): '1';
    this.right = localStorage.getItem('right') ? localStorage.getItem('right'): '0';
    this.wrong = localStorage.getItem('wrong') ? localStorage.getItem('wrong'): '0';
    setInterval(() => {
      this.right = localStorage.getItem('right') ? localStorage.getItem('right'): '0';
      this.wrong = localStorage.getItem('wrong') ? localStorage.getItem('wrong'): '0';
      this.levelAt = localStorage.getItem('level_at') ? localStorage.getItem('level_at'): '1';
    }, 1000);
  }
}
