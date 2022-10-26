import {
  Currencies,
  ConvertType,
  ChangeCurrencyEvent,
  ChangeAmountEvent,
} from './../currency-types';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-convert-from',
  templateUrl: './convert-from.component.html',
})
export class ConvertFromComponent implements OnInit {
  @Output() outCurrencyAmount = new EventEmitter<ChangeAmountEvent>();
  @Output() outConvertCurrency = new EventEmitter<ChangeCurrencyEvent>();
  @Input() covertFromCurrency: keyof typeof Currencies;
  @Input() currencyAmountFrom: number;
  public convertType: ConvertType = 'from';
  public selectedCurrency: keyof typeof Currencies;

  constructor() {}

  ngOnInit(): void {
    this.selectedCurrency = this.covertFromCurrency;
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
