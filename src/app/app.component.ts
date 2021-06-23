import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  showPassword: boolean = false;
  statusDisabled: boolean = true;//user.isAdmin;
  image: string = "assets/images/Mia.jpg";
  mia : boolean = false;
  toggleImage(): void
  {
    if(this.mia){
      this.image = "assets/images/Mia.jpg";
    }
    else{
      this.image = "assets/images/mountains.jpg";
    }
    this.mia = !this.mia;
  }

}
