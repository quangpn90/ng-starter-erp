import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, InputModule, PasswordModule } from '@shared/controls';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerModule } from '@shared/indicators';
import { ButtonModule } from '@src/app/shared';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormFieldModule,
        InputModule,
        PasswordModule,
        MatButtonModule,
        SpinnerModule,
        ButtonModule
    ]
})
export class LoginModule {}
