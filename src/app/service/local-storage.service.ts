import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    getDataFromLocalStorage(): any[] {
        return JSON.parse(localStorage.getItem('payment_store_playful_v3') || '[]')
    }

    setDataToLocalStorage(data: any[]): void {
        localStorage.setItem('payment_store_playful_v3', JSON.stringify(data))
    }
}
