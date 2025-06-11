import { Component } from '@angular/core';
import { MessageComponent } from "../../components/message/message.component";

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {

}
