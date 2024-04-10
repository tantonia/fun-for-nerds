import { Component } from '@angular/core';
import { WordInputComponent } from "./components/word-input/word-input.component";
// import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [WordInputComponent]
})
export class AppComponent {
  title = 'fun-for-nerds';
  partialOddWord: string;
  partialEvenWord: string;
  oddLengthWords: string;
  evenLengthWords: string;

  onWord(word: string) {

  }

  onPartialWord(word: string) {
    if (word.length % 2 === 0) {
      return this.evenLengthWords;
    } else {
      return this.oddLengthWords;
    }
  }
}
