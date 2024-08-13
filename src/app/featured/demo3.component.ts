import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      demo3 works!
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

       
  `,
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component {

}
