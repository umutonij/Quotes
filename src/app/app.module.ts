import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
