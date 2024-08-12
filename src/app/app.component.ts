import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Demo1Component } from "./featured/demo1.component";
import { Demo2Component } from "./featured/demo2.component";
import { Demo3Component } from "./featured/demo3.component";
import { NavBarComponent } from "./core/nav-bar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    NavBarComponent
],


  template: `
    <app-nav-bar/>
    <!--The content below is only a placeholder and can be replaced.-->
    <h1>
      Welcome to {{title}}!
    </h1>
    
   

   
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amgular-16-prova';
}
