import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {

  public warenkorb: BehaviorSubject<Warenkorb> = new BehaviorSubject<Warenkorb>(
    { items: [], gesamtpreis: 0 }
  );

  addToWarenkorb(item: WarenkorbItem) {
    const buch = this.warenkorb.getValue().items.find(i => i.isbn === item.isbn);
    if (buch) {
      buch.menge += item.menge;
    }
    else {
      this.warenkorb.getValue().items.push(item);
    }
    this.warenkorb.getValue().gesamtpreis += item.menge * item.preis;
  }
}

export interface Warenkorb {
  items: WarenkorbItem[];
  gesamtpreis: number;
}

export interface WarenkorbItem {
  isbn: string;
  name: string;
  preis: number;
  menge: number;
}
