import { Component, Input, SimpleChanges } from '@angular/core';
import { WordInputComponent } from '../word-input/word-input.component';

@Component({
  selector: 'app-odd-length',
  standalone: true,
  imports: [WordInputComponent],
  templateUrl: './odd-length.component.html',
  styleUrl: './odd-length.component.css'
})
export class OddLengthComponent {
  @Input() oddLengthWordsInput: string | undefined;
  
  oddLengthWordsData: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['oddLengthWordsInput'] && changes['oddLengthWordsInput'].currentValue) {
      this.oddLengthWordsData.push(changes['oddLengthWordsInput'].currentValue);
    }
  } 
}
