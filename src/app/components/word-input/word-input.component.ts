import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  @Output() buttonSubmit = new EventEmitter<string>();
  currentWord: string = '';

  onInput(event: Event) {
      this.currentWord = (<HTMLInputElement>event.target).value;
  }

  onSubmit() {
    this.buttonSubmit.emit(this.currentWord);
  }
}
