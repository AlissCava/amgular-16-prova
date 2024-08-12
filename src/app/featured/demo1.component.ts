import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      demo1 works!
    </p>

    <main>
            <!-- abbiamo tre spazi uguali, con due rettagonli: uno blu piu grande, uno rosa piu piccolo. Poi uno spazio, il piu grande ddi tutti (circa come due deu precedenti) con un rettangolo verde -->

            <div class="riga">
                <div class="azzurro"> </div>
                <div class="rosa"></div>
            </div>

            <div class="rigagrigia">
                <div class="rosa"></div>
                <div class="azzurro"></div>
               
            </div>

            <div class="riga">
                <div class="azzurro"></div>
                <div class="rosa"></div>
            </div>

            <div class="rigagrigia">
                <div id="green"></div>
            </div>
        </main>

        <footer>
            <!-- sopra due spazi incolonnati, uno rosso piu piccolo e uno verde piu grande diviso a sua volta in 4 colonne, e sotto un div con logo a sinistra e un bottone a destra-->

            <div id="footUP">
                <div id="red"></div>

                <div class="greencolumn"></div>
                <div class="greencolumn"></div><div class="greencolumn"></div><div class="greencolumn"></div>
            </div>
            <hr>
            <div id="footDOWN">
                <div id="cont">
                    <span class="fo">logo</span>
                    <span class="fo">bottone</span>
                </div>
               
            </div>
        </footer>

  `,
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {

}
