import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { cartIncrement } from 'src/app/store/cart.actions';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
    selectedPayment: string = 'Visa'
    isBillingAddressSame: boolean = true
    showPayment: boolean = true
    showContact: boolean = false
    paymentForm: FormGroup<any>
    paymentFormError: boolean = false
    showSuccessMessage: boolean = false

    constructor(
        private _formBuilder: FormBuilder,
        private _localStorageService: LocalStorageService,
        private _store: Store<{ count: number }>
    ) {
        this.paymentForm = this._formBuilder.group({
            name: ['', Validators.required],
            address: ['United States'],
            zip: ['', Validators.required],
            city: ['', Validators.required]
        })
    }

    get name() { return this.paymentForm.get('name') }
    get zip() { return this.paymentForm.get('zip') }
    get city() { return this.paymentForm.get('city') }

    submitForm(): void {
        this.paymentFormError = this.paymentForm.invalid

        if (!this.paymentFormError) {
            const { value } = this.paymentForm
            this.saveToLocalStorage(value)
        }
    }

    saveToLocalStorage(value: any): void {
        this.showSuccessMessage = true
        const data = this._localStorageService.getDataFromLocalStorage()
        const currentData = [
            ...data,
            {
                ...value,
                method: this.selectedPayment
            }
        ]
        this._localStorageService.setDataToLocalStorage(currentData)
        this._store.dispatch(cartIncrement())

        setTimeout(() => {
            this.showSuccessMessage = false
            this.paymentForm.setValue({
                name: '',
                address: 'United States',
                zip: '',
                city: ''
            })
            this.selectedPayment = 'Visa'
        }, 2000);
    }
}