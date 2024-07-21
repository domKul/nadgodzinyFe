import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OvertimeComponent} from "./components/overtime/OvertimeComponent";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OvertimeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NadgodzinyFe';
}
