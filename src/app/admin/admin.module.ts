import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminRoutingModule,
  ],
  exports: [
    AdminRoutingModule,
  ],
  providers: [
    AuthGuard,
  ]
})
export class AdminModule {

}
