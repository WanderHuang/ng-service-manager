import { BackgroundRoutingModule } from './background-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  imports: [
    CommonModule,
    BackgroundRoutingModule
  ],
  declarations: [MainViewComponent]
})
export class BackgroundModule { }
