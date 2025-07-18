import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})

export class MessageComponent {
    @Input() author!: string;
    @Input() dateTime!: string;
    @Input() message!: string;
}
