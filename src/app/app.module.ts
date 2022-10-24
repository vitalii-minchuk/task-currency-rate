import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyRateComponent } from './currency-rate/currency-rate.component';

@NgModule({
  declarations: [AppComponent, CurrencyRateComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
