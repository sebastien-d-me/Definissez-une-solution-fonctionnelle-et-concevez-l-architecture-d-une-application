import { Component } from '@angular/core';
import { MessageComponent } from "../../components/message/message.component";
import { DividerComponent } from "../../components/divider/divider.component";

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [MessageComponent, DividerComponent],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
    currentView: number = 0;

    changeView(order: number) {
        this.currentView = order;
    }

    switchOrder(authorId: number): "#7EBEFF" | "#FFAB79" {
        return authorId === this.currentView ? "#7EBEFF" : "#FFAB79";
    }
}
