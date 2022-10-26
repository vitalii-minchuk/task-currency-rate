import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyRateComponent } from './currency-rate/currency-rate.component';
import { CurrencySelectComponent } from './currency-rate/currency-select/currency-select.component';
import { CovertFromComponent } from './currency-rate/covert-from/covert-from.component';
import { CovertToComponent } from './currency-rate/covert-to/covert-to.component';

@NgModule({
  declarations: [AppComponent, CurrencyRateComponent, CurrencySelectComponent, CovertFromComponent, CovertToComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
