import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../assets/css/foundation.css','app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  public ngOnInit() {


  }

}

