import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
  <div class="commentsContainer">
    <h2>
      El Quijote
    </h2>
    <img alt="Foto del Quijote" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYYIb1vUPzELC1IvAhzgCCun_ZLXv6XNWIwtFLYG1CA&s">
    <p>
      Lorem, ipsum dolor. 
      Provident vitae corporis omnis, tempora sit inventore! Vel maxime quasi magni doloremque ratione? 
      Soluta tempore saepe temporibus perspiciatis debitis unde asperiores facilis molestias quae commodi nostrum nihil et 
      eligendi delectus ut, quis aperiam est? Reiciendis, deserunt iste! Aperiam repellat libero nobis sequi, 
      at quas natus a vitae adipisci, ipsam placeat in. Dignissimos, totam architecto odio cupiditate non eius velit ex ab possimus 
      quos ea repellendus eligendi cum eum quibusdam corrupti asperiores sequi, consequatur recusandae doloribus, sunt fugiat deserunt?
    </p>
    </div>`,
  styles: `
  img{
    width: 350px;
    height: auto;
  }
  .commentsContainer{
    width: 500px;
    margin: 0 auto;
    text-align: center;
  }
  p{
    font-size:18px
  }`
})
export class CommentsComponent {

}
