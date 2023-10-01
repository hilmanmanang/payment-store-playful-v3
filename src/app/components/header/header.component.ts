import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    count$: Observable<any> | any

    constructor(
        private _store: Store<{ count: number }>
    ) {
        this.count$ = this._store.select('count')
    }
}
