import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { CurrencyRateService } from './currency-rate.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
})
export class CurrencyRateComponent implements OnInit {
  public cur1 = 'usd';
  public cur2 = 'uah';
  public value1: number | null = null;
  public value2: number | null = null;
  private currentRate: number | null = null;

  constructor(private currencyRate: CurrencyRateService) {}

  ngOnInit(): void {
    this.currencyRate.getRate(this.cur1, this.cur2).subscribe((response) => {
      const rate: number = Object.entries(response)[1][1].toFixed(2);
      this.currentRate = rate;
      this.value1 = 1;
      this.value2 = this.currentRate;
    });
  }

  handleChangeInput1() {
    if (this.currentRate && this.value1) {
      this.value2 = this.currentRate * this.value1;
    }
  }

  handleChangeInput2() {
    if (this.currentRate && this.value2) {
      this.value1 = this.value2 / this.currentRate;
    }
  }
}
