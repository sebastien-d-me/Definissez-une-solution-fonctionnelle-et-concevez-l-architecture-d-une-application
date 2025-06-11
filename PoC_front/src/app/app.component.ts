import { Component } from '@angular/core';
import { FormComponent } from "./sections/form/form.component";
import { ConversationComponent } from "./sections/conversation/conversation.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [FormComponent, ConversationComponent]
})

export class AppComponent {
    
}
