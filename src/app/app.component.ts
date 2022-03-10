import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valori:{testo:string, nascondi:boolean}[] = [
    {testo:"0 - la banana", nascondi:false},
    {testo:"1 - la fragola", nascondi:false},
    {testo:"2 - il lampone", nascondi:false},
    {testo:"3 - il melone", nascondi:false}
  ];
  input:string = "";

  change() {
    for (let i = 0; i < this.valori.length; i++) {
      if (this.input == "") {
        this.valori[i].nascondi = false;
      } else {
        if (!(this.valori[i].testo.search(this.input) != -1)) {
          this.valori[i].nascondi = true;
        }
      }
    }
  }
}
