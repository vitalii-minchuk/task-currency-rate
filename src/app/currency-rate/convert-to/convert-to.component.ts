import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ChangeAmountEvent,
  ChangeCurrencyEvent,
  ConvertType,
  Currencies,
} from '../currency-types';

@Component({
  selector: 'app-convert-to',
  templateUrl: './convert-to.component.html',
})
export class ConvertToComponent implements OnInit {
  @Output() outCurrencyAmount = new EventEmitter<ChangeAmountEvent>();
  @Output() outConvertCurrency = new EventEmitter<ChangeCurrencyEvent>();
  @Input() covertToCurrency: keyof typeof Currencies;
  @Input() currencyAmountTo: number;

  public convertType: ConvertType = 'to';
  public selectedCurrency: keyof typeof Currencies;

  constructor() {}

  ngOnInit(): void {
    this.selectedCurrency = this.covertToCurrency;
  }

  getCurrency(currency: keyof typeof Currencies) {
    this.outConvertCurrency.emit({
      currency,
      convertType: this.convertType,
    });
  }

  getAmount(evt: Event) {
    const value = (evt.target as HTMLInputElement).value;
    this.outCurrencyAmount.emit({
      amount: Number(value),
      convertType: this.convertType,
    });
  }
}
