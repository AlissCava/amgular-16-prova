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
                    <span>
                        <img src="../assets/img/logo.svg" alt="logo">
                    </span>
                    <span>
                       <button routerLink="demo1">HOME</button>
                       <button routerLink="demo2">PAGE 2</button>
                       <button routerLink="demo3">PAGE 3</button>
                    </span>
                    <span>
                        <button class="link" href="https://hammerandchisel.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fsupport.discord.com%2Fhc%2Fit&theme=hc&locale=it&brand_id=96508&auth_origin=96508%2Ctrue%2Ctrue">Login</button>
                    </span>
                </nav>
            </div>

            <div id="headDOWN">
                <div id="headIMG">
                    <h1>Il tuo posto per parlare</h1>
                    <p id="sottotitolo">
                        ... dove far parte di un club scolastico, un gruppo di gamer, una community artistica mondiale o dove trascorrere tempo assieme a un piccolo gruppo di amici: uno spazio in cui è più facile chiacchierare ogni giorno e ritrovarsi più spesso.
                    </p>

                    <div id="bottoni">
                        <span id="b1">
                            Scarica per mac
                        </span>
                        <span id="b2">
                            Apri Discord nel tuo browser
                        </span>
                    </div>
                </div>
            </div>
            
        </header>
  `,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

}
