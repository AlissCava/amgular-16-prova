import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
     <footer>
            <!-- sopra due spazi incolonnati, uno rosso piu piccolo e uno verde piu grande diviso a sua volta in 4 colonne, e sotto un div con logo a sinistra e un bottone a destra-->

            <div id="footUP">
                <div id="red">
                    <h1 id="h1foot">Il posto per parlare</h1>

                    <h4 id="lingua">Italiano</h4>
                    <div id="cont">
                    <span class="logofoot">
                        <img src="img/logo.svg" alt="">
                    </span>
                    <span class="fo">registrati</span>
                </div>
               
                    
                    <p id="icon">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </p>
                    
                </div>

                <div class="greencolumn">
                    <div class="column">
                        <h4 class="primo">Prodotto</h4>
                        <p>scarica</p>
                        <p>perche discord</p>
                        <p>nitro</p>
                        <p>sicurezza</p>
                        <p>assistenza</p>
                    </div>
                </div>

                <div class="greencolumn">
                    <div class="column">
                        <h4 class="primo">Prodotto</h4>
                        <p>scarica</p>
                        <p>perche discord</p>
                        <p>nitro</p>
                        <p>sicurezza</p>
                        <p>assistenza</p>
                    </div>
                </div>

                <div class="greencolumn">
                    <div class="column">
                        <h4 class="primo">Prodotto</h4>
                        <p>scarica</p>
                        <p>perche discord</p>
                        <p>nitro</p>
                        <p>sicurezza</p>
                        <p>assistenza</p>
                        <p>scarica</p>
                        <p>perche discord</p>
                        <p>nitro</p>
                        <p>sicurezza</p>
                        <p>assistenza</p>
                    </div>
                </div>

                <div class="greencolumn">
                    <div class="column">
                        <h4 class="primo">Prodotto</h4>
                        <p>scarica</p>
                        <p>perche discord</p>
                        <p>nitro</p>
                        <p>sicurezza</p>
                        <p>assistenza</p>
                    </div>
                </div>
            </div>

            <div id="footDOWN">
            
            </div>
        </footer>
         
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}
