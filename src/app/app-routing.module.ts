import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AntdFormDemoComponent } from './antd-form-demo/antd-form-demo.component';
import { AntdTableDemoComponent } from './antd-table-demo/antd-table-demo.component';
import { AntdLayoutDemoComponent } from './antd-layout-demo/antd-layout-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  { path: 'form', component: AntdFormDemoComponent },
  { path: 'table', component: AntdTableDemoComponent },
  { path: 'layout', component: AntdLayoutDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
