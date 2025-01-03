import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'static',
    children: [
      {
        path: '404',
        component: NotFoundComponent,
      },
      {
        path: '',
        redirectTo: '404',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticRoutingModule {}
