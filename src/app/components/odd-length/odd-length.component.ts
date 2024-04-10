import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-length',
  standalone: true,
  imports: [],
  templateUrl: './odd-length.component.html',
  styleUrl: './odd-length.component.css'
})
export class OddLengthComponent {
  @Input() oddLengthWordsInput: string | undefined;
  
  oddLengthWordsData: string[] = [];
}
