import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  // @Output() word = new EventEmitter<>()
  // @Output() word = new EventEmitter<>()
  currentWord: string = '';

  onInput(event: Event) {
    


  }

  onSubmit(){
    this.currentWord
  }
}
