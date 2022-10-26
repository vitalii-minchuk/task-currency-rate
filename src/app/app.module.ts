import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyRateComponent } from './currency-rate/currency-rate.component';
import { CurrencySelectComponent } from './currency-rate/currency-select/currency-select.component';
import { ConvertFromComponent } from './currency-rate/convert-from/convert-from.component';
import { ConvertToComponent } from './currency-rate/convert-to/convert-to.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyRateComponent,
    CurrencySelectComponent,
    ConvertFromComponent,
    ConvertToComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
