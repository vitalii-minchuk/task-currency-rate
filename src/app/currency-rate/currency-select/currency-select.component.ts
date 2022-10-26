import { Component, OnInit } from '@angular/core';

enum Currencies {
  'usd' = 'usd',
  'uah' = 'uah',
  'pln' = 'pln',
  'eur' = 'eur',
}

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
})
export class CurrencySelectComponent implements OnInit {
  public currencyOptions: Array<keyof typeof Currencies> = [
    'uah',
    'eur',
    'usd',
    'pln',
  ];
  public selectedCurrency = Currencies.usd;

  constructor() {}

  ngOnInit(): void {}

  onCurrencyChange() {
    console.log(this.selectedCurrency);
  }
}
