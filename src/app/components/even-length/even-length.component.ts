import { Component, Input, SimpleChanges } from '@angular/core';
import { WordInputComponent } from '../word-input/word-input.component';

@Component({
  selector: 'app-even-length',
  standalone: true,
  imports: [WordInputComponent],
  templateUrl: './even-length.component.html',
  styleUrl: './even-length.component.css'
})
export class EvenLengthComponent {
  @Input() evenLengthWordsInput: string | undefined;
  
  evenLengthWordsData: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['evenLengthWordsInput'] && changes['evenLengthWordsInput'].currentValue) {
      this.evenLengthWordsData.push(changes['evenLengthWordsInput'].currentValue);
    }
  } 
}
