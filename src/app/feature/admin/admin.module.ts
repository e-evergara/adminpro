import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ChartsModule } from './pages/charts/charts.module';
import { ProgressModule } from './pages/progress/progress.module';
@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
  ],
  exports: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashboardModule,
    ChartsModule,
    ProgressModule,
  ],
})
export class AdminModule {}
