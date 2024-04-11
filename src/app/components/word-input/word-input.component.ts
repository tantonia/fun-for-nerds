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

    const value = (event.target as HTMLInputElement).value;
    this.currentWord = value;
  }

  onSubmit() {
    this.buttonSubmit.emit(this.currentWord);
  }
}
