import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
    declarations: [
        RadioComponent,
        CheckboxComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RadioComponent,
        CheckboxComponent
    ]
})
export class SharedModule { }
