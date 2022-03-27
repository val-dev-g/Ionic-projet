/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  cours = [
    { nom: 'cours1', nb_etud: 3 },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    { nom: 'cours2', nb_etud: 6 },
  ];

  constructor() {}

  ngOnInit() {
    console.log('j\'arrive sur la page');
  }
  ionViewWillEnter() {
    console.log('je reviens sur la page des cours');
  }

}
