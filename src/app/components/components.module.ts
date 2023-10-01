import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { BackgroundComponent } from './background/background.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../store/cart.reducer';
import { HomeComponent } from './home/home.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import {RouterModule} from '@angular/router';
@NgModule({
    declarations: [
        HeaderComponent,
        PaymentComponent,
        OrderComponent,
        BackgroundComponent,
        HomeComponent,
        PaymentListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ count: counterReducer }),
        RouterModule
    ],
    exports: [
        HeaderComponent,
        PaymentComponent,
        OrderComponent,
        BackgroundComponent,
        HomeComponent,
        PaymentListComponent
    ]
})
export class ComponentsModule { }
