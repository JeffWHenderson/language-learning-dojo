import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  basicSentence: String;
  basicTranslation: String;
  counter: number;
  spanish: boolean = true;

  constructor() { }

  ngOnInit() {
    this.counter = 0;
    this.basicSentence = "This is a basic sentence";
    this.basicTranslation = "This is a basic translation"
  }

  nextTranslation() {
    if(this.spanish == true) {
      this.basicSentence = this.spanishSentences[this.counter]
      this.basicTranslation = this.spanishTranslations[this.counter];
    } else {
      this.basicSentence = this.chineseSentences[this.counter]
      this.basicTranslation = this.chineseTranslations[this.counter];
    }
    if(this.counter < 2) {
      this.counter +=1;
    } else {
      this.counter = 0;
    }
  }
  
  toggleLanguage() {
    this.spanish = !this.spanish;
  }

  spanishSentences: String[] = ["just an example", "hello, I am boots", "good morning" ]
  spanishTranslations: String[] = ["a dios mio", "hola, soy boots", "buenos dias"]

  chineseSentences: String[] = ["Walk slowly", "Eat some more", "good morning" ]
  chineseTranslations: String[] = ["Màn zǒu", "Nǐ duō chī yīdiǎn", "zao shang hao"]
}
