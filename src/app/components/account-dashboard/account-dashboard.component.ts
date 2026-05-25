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
    .balance-summary { display: flex; gap: 20px; margin-bottom: 20px; }
    .balance-card { background: #f5f5f5; padding: 20px; border-radius: 8px; flex: 1; }
    .balance-card h3 { margin: 0 0 10px; color: #666; font-size: 14px; }
    .balance-card .amount { margin: 0; font-size: 24px; font-weight: bold; color: #333; }
    .accounts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
    .account-card { background: #fff; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; }
    .account-card h4 { margin: 0 0 10px; color: #333; }
    .account-number { color: #999; font-size: 14px; margin: 5px 0; }
    .account-card .balance { font-size: 20px; font-weight: bold; color: #2e7d32; margin: 10px 0 0; }
  `]
})
export class AccountDashboardComponent implements OnInit {
  totalBalance = 0;
  availableCredit = 0;
  accounts: { type: string; number: string; balance: number }[] = [];

  constructor(private bankingApi: BankingApiService) {}

  ngOnInit(): void {
  }
}
