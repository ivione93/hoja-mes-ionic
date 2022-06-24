import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {

  slidesOptions = {
    slidesPerView: 3.3
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createTraining() {
    this.router.navigate(['/new-training']);
  }

  showTraining() {
    this.router.navigate(['/show-training']);
  }

}
