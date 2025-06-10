import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-label',
  standalone: true,
  imports: [],
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.scss'
})

export class InputLabelComponent {
    @Input() label: string;
    @Input() type: string;

    constructor() {
        this.label = "";
        this.type = "";
    }
}
