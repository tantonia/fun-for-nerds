import { Component } from '@angular/core';
import { WordInputComponent } from "./components/word-input/word-input.component";
import { OddLengthComponent } from './components/odd-length/odd-length.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [WordInputComponent, OddLengthComponent]
})
export class AppComponent {
  title = 'fun-for-nerds';
  oddLengthWords: string = '';
  evenLengthWords: string = '';

 
  onSubmit(word: string) {
    if (word.length % 2 === 0) {
      this.evenLengthWords = word;
    } else {
      this.oddLengthWords = word;
    } return word;
  } 
}
