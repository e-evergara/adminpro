import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StaticRoutingModule } from './feature/static/static-routing.module';
import { AdminRoutingModule } from './feature/admin/admin-routing.module';
import { AuthRoutingModule } from './feature/auth/auth-routing.module';
import { PublicRoutingModule } from './feature/public/public-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  // { path: 'public', loadChildren: () => import('./feature/public/public.module').then(m => m.PublicModule) },
  // { path: 'admin', loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule) },
  {
    path: '**',
    redirectTo: 'static',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StaticRoutingModule,
    AdminRoutingModule,
    AuthRoutingModule,
    PublicRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
