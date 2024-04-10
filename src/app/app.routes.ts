import { Routes } from '@angular/router';
import { WordInputComponent } from './components/word-input/word-input.component';
import { OddLengthComponent } from './components/odd-length/odd-length.component';
import { EvenLengthComponent } from './components/even-length/even-length.component';

export const routes: Routes = [
    { path: 'word-input', component: WordInputComponent},
    { path: 'odd-length', component: OddLengthComponent},
    { path: 'even-length', component: EvenLengthComponent}
];
