import { Component, OnInit } from '@angular/core';
import { StartGameApi } from '../../api/start-game.api'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  joueurs: string[] = []
  joueur1: string
  joueur2: string
  joueur3: string

  constructor(private startGame: StartGameApi) { }

  ngOnInit(): void {
  }

  commencerPartie () {
    this.joueurs.push(this.joueur1, this.joueur2, this.joueur3)
    this.startGame.execute(this.joueurs)
  }
}
