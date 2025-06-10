import { Component } from '@angular/core';
import { InputLabelComponent } from "../../components/input-label/input-label.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputLabelComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
