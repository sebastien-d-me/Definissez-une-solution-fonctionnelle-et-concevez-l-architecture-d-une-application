import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})

export class MessageComponent {
    @Input() authorId!: number;
    @Input() authorName!: string;
    @Input() message!: string;
    @Input() time!: string;

    
    ngOnInit() {
        this.authorName = this.authorId === 0 ? "Martin DUPONT" : "John DOE";
    }
}
