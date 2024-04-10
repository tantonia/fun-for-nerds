import { Component } from '@angular/core';
import { WordInputComponent } from "./components/word-input/word-input.component";
import { OddLengthComponent } from './components/odd-length/odd-length.component';
import { EvenLengthComponent } from './components/even-length/even-length.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [WordInputComponent, OddLengthComponent, EvenLengthComponent]
})
export class AppComponent {
  title = 'fun-for-nerds';
  oddLengthWords: string = '';
  evenLengthWords: string = '';

 
  onSubmit(event: string) {
    if (event.length % 2 === 0) {
      this.evenLengthWords = event;
    } else {
      this.oddLengthWords = event;
    } 
  } 
}
