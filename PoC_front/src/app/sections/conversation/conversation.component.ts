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

}
