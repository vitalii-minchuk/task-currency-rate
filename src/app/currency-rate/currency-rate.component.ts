import { Component, OnInit } from '@angular/core';
import { CurrencyRateService } from './currency-rate.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
})
export class CurrencyRateComponent implements OnInit {
  public covertFromCurrency = 'usd';
  public covertToCurrency = 'uah';
  public value1: number | null = null;
  public value2: number | null = null;
  private currentRate: number | null = null;

  constructor(private currencyRate: CurrencyRateService) {}

  ngOnInit(): void {
    this.currencyRate
      .getRate(this.covertFromCurrency, this.covertToCurrency)
      .subscribe((response) => {
        const rate: number = Object.entries(response)[1][1].toFixed(2);
        this.currentRate = rate;
        this.value1 = 1;
        this.value2 = this.currentRate;
        console.log(rate);
      });
  }

  handleChangeInput1() {
    if (this.value1 && this.value1 <= 0) {
      this.value2 = this.value1 = 0;
    }
    if (this.currentRate && this.value1) {
      this.value2 = this.currentRate * this.value1;
    }
  }

  handleChangeInput2() {
    if (this.value2 && this.value2 <= 0) {
      this.value1 = this.value2 = 0;
    }
    if (this.currentRate && this.value2) {
      this.value1 = this.value2 / this.currentRate;
    }
  }

  // onChangeCurrency1() {
  //   this.currencyRate.getRate(this.cur1, this.cur2).subscribe((response) => {
  //     const rate: number = Object.entries(response)[1][1];
  //     this.currentRate = rate;
  //     if (this.value1) {
  //       this.value2 = this.value1 * rate;
  //     }
  //     console.log(this.value2);
  //   });
  // }

  // onChangeCurrency2() {
  //   this.currencyRate.getRate(this.cur1, this.cur2).subscribe((response) => {
  //     const rate: number = Object.entries(response)[1][1];
  //     this.currentRate = rate;
  //     if (this.value2) {
  //       this.value1 = this.value2 / this.currentRate;
  //     }
  //   });
  // }
}
