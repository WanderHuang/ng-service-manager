import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AntdBackgroundComponent } from './antd-background/antd-background.component';

const routes: Routes = [
  {
    path: 'background',
    component: AntdBackgroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
