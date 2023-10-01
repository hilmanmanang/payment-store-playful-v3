import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
    paymentLists: any[] = []

    constructor(
        private _localStorageService: LocalStorageService
    ) {}

    ngOnInit(): void {
        this.paymentLists = this._localStorageService.getDataFromLocalStorage()
    }
}
