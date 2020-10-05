import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { StartGameApi } from '../../../api/creer-partie'

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

  constructor(
    private router: Router,
    private startGame: StartGameApi) { }

  ngOnInit(): void {
  }

  async commencerPartie () {
    this.joueurs.push(this.joueur1, this.joueur2, this.joueur3)
    const idGame: string = await this.startGame.execute(this.joueurs)
    console.log(idGame)
    this.router.navigateByUrl(`/game/${idGame}`)
  }
}
