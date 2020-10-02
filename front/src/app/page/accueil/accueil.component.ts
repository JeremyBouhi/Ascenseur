import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  joueursForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.joueursForm = new FormGroup({
      joueur1: new FormControl('John Doe'),
      joueur2: new FormControl('Mister X'),
      joueur3: new FormControl('Anonymous')
  })
  }

  commencerPartie () {
    console.warn(this.joueursForm.value);
  }
}
