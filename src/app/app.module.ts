import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { BankComponent } from './product/bank/bank.component';
import { CharacteristicsComponent } from './product/characteristics/characteristics.component';
import { InstalmentComponent } from './product/instalment/instalment.component';
import { RateComponent } from './product/rate/rate.component';
import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { FakeBackendService } from './fake-backend.service';
registerLocaleData(localeDE, 'de');

@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
    ProductComponent,
    BankComponent,
    CharacteristicsComponent,
    InstalmentComponent,
    RateComponent
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de-DE'
  }, FakeBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
