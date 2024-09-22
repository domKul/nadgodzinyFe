import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    MatButton
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {
  }

  goToOvertime(): void {
    this.router.navigate(['/overtime']);
  }
}
