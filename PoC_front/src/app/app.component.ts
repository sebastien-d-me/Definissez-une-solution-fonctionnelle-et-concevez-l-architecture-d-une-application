import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Client, IMessage } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { MessageComponent } from "./components/message/message.component";
import { DividerComponent } from "./components/divider/divider.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
    imports: [FormsModule, MessageComponent, DividerComponent, CommonModule],
})

export class AppComponent {
    /* Add the message */
    messagesList: { 
        author: string; 
        dateTime: string;
        content: string; 
    }[] = [];
    addMessage(message: IMessage) {
        const getMessage = JSON.parse(message.body);
        this.messagesList.push(getMessage);
    }



    stompClient: Client;

    constructor() {
        const socket = new SockJS("http://127.0.0.1:8080/websocket");
        this.stompClient = new Client({ webSocketFactory: () => socket });
        this.stompClient.onConnect = () => {
           this.stompClient.subscribe("/topic/messages", (message: IMessage) => {
                this.addMessage(message);
            });
        }
        this.stompClient.activate();
    }


    /* When leave */
    ngOnLeave() {
        this.stompClient.deactivate();
    }


    /* Change the user */
    selectedUser: string = "Martin DUPONT";

    changeUser(user: string) {
        this.selectedUser = user === "userRole" ? "Martin DUPONT" : "John DOE";
    }


    /* Manage the background */
    manageBackground(author: string) {
        return author === "Martin DUPONT" ? "#FFAB79" : "#7EBEFF";
    }


    /* Get the datetime */
    getDateTime() {
        let currentDate = new Date();
        let formattedTimeOnly = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
        let formattedDateTime = `${new Date().toLocaleDateString()} à ${formattedTimeOnly}`;
        return formattedDateTime;
    }


    /* Send the message */
    formMessage: string = "";
    currentDateTime: string = "";

    sendMessage() {
        this.currentDateTime = this.getDateTime();
        const message = {
            author: this.selectedUser,
            dateTime: this.currentDateTime,
            content: this.formMessage,
            
        };
        this.stompClient.publish({
            body: JSON.stringify(message),
            destination: "/app/chat"
        });
    }
}
