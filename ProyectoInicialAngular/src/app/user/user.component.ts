import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = "Alejandro Gómez";
  isLogged: boolean = false;
  favouriteGame: string = "";

  greetUser(username:string): void{
    alert(`Hola, ${username}`);
  }

  changeLoginStatus(){
    this.isLogged = !this.isLogged;
  }

  getFavouriteGame(game: string){
    this.favouriteGame = game;
  }
}
