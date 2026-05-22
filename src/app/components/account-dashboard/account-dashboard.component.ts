import { Component, OnInit } from '@angular/core';
import { BankingApiService } from '../../services/banking-api.service';

@Component({
  selector: 'app-account-dashboard',
  template: `
    <div class="dashboard">
      <h2>Account Overview</h2>
      
      <div class="balance-summary">
        <div class="balance-card">
          <h3>Total Balance</h3>
          <p class="amount">\${{ totalBalance | number:'1.2-2' }}</p>
        </div>
        <div class="balance-card">
          <h3>Available Credit</h3>
          <p class="amount">\${{ availableCredit | number:'1.2-2' }}</p>
        </div>
      </div>

      <div class="accounts-grid">
        <div *ngFor="let account of accounts" class="account-card">
          <h4>{{ account.type }}</h4>
          <p class="account-number">****{{ account.number }}</p>
          <p class="balance">\${{ account.balance | number:'1.2-2' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard { padding: 20px; }
    .balance-summary { display: flex; gap:
