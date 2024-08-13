import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
            <!-- abbiamo tre spazi uguali, con due rettagonli: uno blu piu grande, uno rosa piu piccolo. Poi uno spazio, il piu grande ddi tutti (circa come due deu precedenti) con un rettangolo verde -->
            <div class="riga">
                <div class="azzurro">
                    <img  class="img" src="../assets/img/item1.svg" alt="tem1">
                </div>
                <div class="rosa">
                    <span>
                        <h3>Un luogo a invito con tutto lo spazio necessario per parlare</h3>
                        <p class="testo">
                        I server Discord sono organizzati in canali tematici in cui puoi comunicare, collaborare o semplicemente condividere
                        </p>
                    </span>
                </div>
            </div>

            <div class="rigagrigia">
                <div class="rosa">
                    <span>
                        <h3>Dove trovarsi</h3>
                        <p class="testo">
                        Mettiti comodo in un canale vocale quando hai tempo. Gli amici nel tuo server possomno vedere che sei li e unirsi istantaneamente senza dover chiamare
                        </p>
                    </span>
                </div>
                <div class="azzurro">
                    <img src="../assets/img/item2.svg" alt="">
                </div>
               
            </div>

            <div class="riga">
                <div class="azzurro">
                    <img src="../assets/img/item3.svg" alt="">
                </div>
                <div class="rosa">
                    <span>
                        <h3>Da pochi a un fandom</h3>
                        <p class="testo">
                        Da inizio a una community di qualsiasi dimensiome con strumenti di moderazione e accesso ai membri personalizzavile. Concedi poteri speciali, crea canali e molto altro
                        </p>
                    </span>
                </div>
            </div>

            <div class="rigagrigia">
                <div id="green">
                    <h3 id="h3riga4">
                        Tecnologia affidabile per tenersi in contatto
                    </h3>
                    <p id="testoriga4">
                        Video e audio a bassa latenza ti faranno sentire come se fosse tutti nella stessa stanza. Fai ciao in vide, guarda gli amici giocare in streamimg o riunitevi in un sessione di disegmo con la condivisione schermo
                    </p>

                    <img src="../assets/img/item4-big.svg" alt="">

                    <h4>Pronto a iniziare la tua avventura?</h4>
                    <div id="b1-2">
                        Scarica per mac
                    </div>
                </div>
            </div>
        </main>

       
  `,
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {

}
