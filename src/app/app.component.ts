import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: '<h1>Hello World</h1>',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.css'
  ]
  
})
export class AppComponent {
  name: string = "Eduardo"
  imgUrl: string = 'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0';
  
  getName(): string {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImage(e: string):void {
    console.log(e);
  }
}