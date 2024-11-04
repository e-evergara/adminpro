import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticRoutingModule } from './static-routing.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  imports: [CommonModule, StaticRoutingModule, NotFoundModule],
})
export class StaticModule {}
