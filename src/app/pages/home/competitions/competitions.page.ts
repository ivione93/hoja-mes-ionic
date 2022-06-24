import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage implements OnInit {

  slidesOptions = {
    slidesPerView: 3.3
  }

  constructor(private router: Router) {}

  ngOnInit() {
  }

  createCompetition() {
    console.log("createCompetition");
    this.router.navigate(['/new-competition']);
  }

  showCompetition() {
    console.log("showCompetition");
    this.router.navigate(['/show-competition']);
  }

}
