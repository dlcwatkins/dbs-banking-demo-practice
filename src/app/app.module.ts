import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDashboardComponent } from './components/account-dashboard/account-dashboard.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { TransferFundsComponent } from './components/transfer-funds/transfer-funds.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDashboardComponent,
    TransactionHistoryComponent,
    TransferFundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
