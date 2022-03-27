import { Component, OnInit } from '@angular/core';
import { ModelCours } from '../models/model-cours';
import { ApiCoursService } from '../services/api-cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.page.html',
  styleUrls: ['./cours.page.scss'],
})
export class CoursPage implements OnInit {

  listeCours: ModelCours[];

  cours!: ModelCours;

  title = 'Liste des Cours';

  searchnom = '';



  constructor(private servicecours: ApiCoursService) { }

  search(){
    if(this.searchnom && this.searchnom !== '')
    {
      this.servicecours.findAll().
      subscribe(listeC => {
        this.listeCours = listeC.filter(
          data => data.nom.toLocaleUpperCase() ===
          this.searchnom.toLocaleUpperCase()
        );
      });
    }
  }

  ngOnInit() {

    this.cours = new ModelCours();
    this.servicecours.findAll().subscribe(data => this.listeCours = data);
  }

  ionViewWillEnter(){
    this.ngOnInit();
  }

  ajout(c: ModelCours){
    // this.listeCours.push(c);
    this.servicecours.add(c).subscribe(
      () => this.ngOnInit()
    );
  }

  delete(c: ModelCours){
    this.servicecours.delete(c).subscribe(()=> this.ngOnInit());
  }

  update(c: ModelCours){
    this.servicecours.update(c).subscribe(()=> this.ngOnInit());
  }

}
