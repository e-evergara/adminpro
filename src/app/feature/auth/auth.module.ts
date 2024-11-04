import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  exports: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, LoginModule, RegisterModule],
})
export class AuthModule {}
