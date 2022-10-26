import { Component, OnInit } from '@angular/core';
import { CurrencyRateService } from './currency-rate.service';
import {
  ChangeAmountEvent,
  ChangeCurrencyEvent,
  Currencies,
} from './currency-types';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
})
export class CurrencyRateComponent implements OnInit {
  public covertFromCurrency: keyof typeof Currencies = Currencies.usd;
  public covertToCurrency: keyof typeof Currencies = Currencies.uah;
  public currencyAmountFrom: number;
  public currencyAmountTo: number;
  private currentRate: number;

  constructor(private currencyRate: CurrencyRateService) {}

  ngOnInit(): void {
    this.currencyRate
      .getRate(this.covertFromCurrency, this.covertToCurrency)
      .subscribe((response) => {
        const rate: number = Object.entries(response)[1][1].toFixed(2);
        this.currentRate = rate;
        this.currencyAmountFrom = 1;
        this.currencyAmountTo = this.currentRate;
      });
  }

  onChangeAmount(event: ChangeAmountEvent) {
    if (event.amount <= 0) {
      this.currencyAmountFrom = this.currencyAmountTo = 0;
      return;
    }
    if (event.convertType === 'to') {
      this.currencyAmountTo = event.amount;
      this.currencyAmountFrom = event.amount / this.currentRate;
    }
    if (event.convertType === 'from') {
      this.currencyAmountFrom = event.amount;
      this.currencyAmountTo = this.currentRate * event.amount;
    }
  }

  onChangeCurrency(event: ChangeCurrencyEvent) {
    if (event.convertType === 'from') {
      this.covertFromCurrency = event.currency;
    }
    if (event.convertType === 'to') {
      this.covertToCurrency = event.currency;
    }
    this.currencyRate
      .getRate(this.covertFromCurrency, this.covertToCurrency)
      .subscribe((response) => {
        const rate: number = Object.entries(response)[1][1];
        this.currentRate = rate;
        this.currencyAmountTo = this.currencyAmountFrom * rate;
      });
  }
}
