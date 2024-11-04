import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './feature/public/public.module';
import { AuthModule } from './feature/auth/auth.module';
import { AdminModule } from './feature/admin/admin.module';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    AuthModule,
    PublicModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
