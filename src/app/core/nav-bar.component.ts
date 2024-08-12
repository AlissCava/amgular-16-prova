import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `

    

    <header>
            <!-- nell header abbiamo: nav con logo, link e login, il riquadro blu con il rettangolo rosa ( nav e due div)-->
            <div id="headUP">
                <nav> 
                    <span>logo</span>
                    <span>
                      <button routerLink = "demo1">Home</button>
                      <button routerLink = "demo2">Demo 2</button>
                      <button routerLink = "demo3">Demo 3</button>
                    </span>
                    <span>
                        login
                    </span>
                </nav>
            </div>

            <div id="headDOWN">
                <div id="headIMG"></div>
            </div>
            
        </header>
  `,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

}
