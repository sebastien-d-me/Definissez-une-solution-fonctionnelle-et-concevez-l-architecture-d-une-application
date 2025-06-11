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
    @Input() message!: string;
    @Input() order: number = 0;
    @Input() time!: string;

    ngOnInit() {
        this.author = this.order === 0 ? "Martin DUPONT" : "John DOE";
    }
}
