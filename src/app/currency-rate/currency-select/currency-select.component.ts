import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currencies } from '../currency-types';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
})
export class CurrencySelectComponent implements OnInit {
  @Output() outCurrency = new EventEmitter<keyof typeof Currencies>();
  @Input() selectedByDefault: keyof typeof Currencies;

  public currencyOptions: Array<keyof typeof Currencies> = [
    'uah',
    'eur',
    'usd',
    'pln',
  ];
  public selectedCurrency: keyof typeof Currencies;

  constructor() {}

  ngOnInit(): void {
    this.selectedCurrency = this.selectedByDefault;
  }

  onCurrencyChange() {
    this.outCurrency.emit(this.selectedCurrency);
  }
}
