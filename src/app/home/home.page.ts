import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  // Function to handle button click event
  goToDashboard() {
    // Navigate to the /dashboard route
    this.router.navigate(['/dashboard']);
  }

}
