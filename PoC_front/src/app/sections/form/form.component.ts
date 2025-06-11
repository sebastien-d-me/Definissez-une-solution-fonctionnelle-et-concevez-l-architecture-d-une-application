import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
    defaultName: string = "Choisir un type d'utilisateur";

    changeUser(user: string) {
        this.defaultName = user === "user" ? "Martin DUPONT" : "John DOE";
    }
}
