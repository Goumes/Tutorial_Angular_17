import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>Los juegos favoritos de {{username}} son: </p>
    <ul>
    @for (game of games; track $index) {
        <li (click)="favouriteGame(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username:string = "";
  @Output() addFavouriteEvent = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn 4'
    },
    {
      id: 3,
      name: 'Bloodborne'
    },
  ]

  favouriteGame(game: string): void{
    alert(`A ${this.username} le gusta jugar a ${game}`);
    this.addFavouriteEvent.emit(game);
  }
}
