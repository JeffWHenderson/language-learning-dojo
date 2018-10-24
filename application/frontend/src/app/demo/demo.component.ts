import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {
  basicSentence: String;
  basicTranslation: String;
  counter: number;

  constructor() { }

  ngOnInit() {
    this.counter = 0;
    this.basicSentence = "This is a basic sentence";
    this.basicTranslation = "This is a basic translation"
  }

  nextTranslation() {
    this.basicSentence = this.sentences[this.counter]
    this.basicTranslation = this.translations[this.counter];
    this.counter +=1;
  }
  

  sentences: String[] = ["another basic sentence", "hello, I am boots", "good morning" ]
  translations: String[] = ["another basic translation", "hola, soy boots", "guten tag"]
}
