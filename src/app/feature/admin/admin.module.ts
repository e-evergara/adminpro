import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
  ],
  exports: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
