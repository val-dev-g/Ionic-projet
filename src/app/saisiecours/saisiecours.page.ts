import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ModelCours } from '../models/model-cours';
import { ApiCoursService } from '../services/api-cours.service';

@Component({
  selector: 'app-saisiecours',
  templateUrl: './saisiecours.page.html',
  styleUrls: ['./saisiecours.page.scss'],
})
export class SaisiecoursPage implements OnInit {
  @Input() couramodifie!: ModelCours;

  saisieform!: FormGroup;

  nomctrl!: FormControl;
  profctrl!: FormControl;
  nbelevectrl!: FormControl;

  constructor(
    private service: ApiCoursService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this.couramodifie) {
      this.nomctrl = this.fb.control(
        this.couramodifie.nom,
        Validators.required
      );
      this.profctrl = this.fb.control(
        this.couramodifie.professeur,
        Validators.required
      );
      this.nbelevectrl = this.fb.control(
        this.couramodifie.nbEleves,
        Validators.required
      );
    } else {
      this.nomctrl = this.fb.control('', Validators.required);
      this.profctrl = this.fb.control('', Validators.required);
      this.nbelevectrl = this.fb.control('', Validators.required);
    }

    this.saisieform = this.fb.group({
      nom: this.nomctrl,
      prof: this.profctrl,
      nbel: this.nbelevectrl,
    });
  }

  onSubmit() {
    if (this.saisieform.valid) {
      const c = new ModelCours();
      c.nom = this.nomctrl.value;
      c.professeur = this.profctrl.value;
      c.nbEleves = this.nbelevectrl.value;
      this.service.add(c).subscribe((data) => this.route.navigate(['/cours']));

      if (this.couramodifie) {
        c.id = this.couramodifie.id;
        this.service.update(c).subscribe(() => this.route.navigate(['/cours']));
      } else {
        this.service.add(c).subscribe(() => this.route.navigate(['/cours']));
      }
    }
  }
  // Delete
  remove(): void {
    const c = new ModelCours();
    c.nom = this.nomctrl.value;
    c.professeur = this.profctrl.value;
    c.nbEleves = this.nbelevectrl.value;
    this.service.delete(c).subscribe((data) => this.route.navigate(['/cours']));
  }
}
