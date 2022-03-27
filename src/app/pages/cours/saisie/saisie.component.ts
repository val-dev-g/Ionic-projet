import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModelCours } from 'src/app/models/model-cours';

/**
 * <app-saisie onajout="ajout($event)"></app-saisie>
 */

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.scss'],
})
export class SaisieComponent implements OnInit {
  @Input() couramodifie!: ModelCours;

  @Output() onajout: EventEmitter<ModelCours> = new EventEmitter<ModelCours>();

  cours: ModelCours = new ModelCours();

  constructor() {}

  ngOnInit() {
    if (this.couramodifie) {
      this.cours = this.couramodifie;
    }
  }

  ajout(c: ModelCours): void {
    this.onajout.emit(c);
  }
}
