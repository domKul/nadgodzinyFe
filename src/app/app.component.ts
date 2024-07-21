import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OvertimeComponent} from "./components/overtime/overtime.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OvertimeComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoading = true;

  ngOnInit(): void {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // 2 seconds
  }

}
