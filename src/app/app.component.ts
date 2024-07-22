import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {OvertimeComponent} from "./components/overtime/overtime.component";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OvertimeComponent, NgIf, MatButton],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // 2 seconds
  }
}
