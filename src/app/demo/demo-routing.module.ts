import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AntdDemoComponent } from '../antd-demo/antd-demo.component';
import { AntdFormDemoComponent } from '../antd-form-demo/antd-form-demo.component';
import { AntdTableDemoComponent } from '../antd-table-demo/antd-table-demo.component';
import { AntdLayoutDemoComponent } from '../antd-layout-demo/antd-layout-demo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    component: AntdDemoComponent,
    children: [
      {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
      },
      {
        path: 'form',
        component: AntdFormDemoComponent
      },
      {
        path: 'table',
        component: AntdTableDemoComponent
      },
      {
        path: 'layout',
        component: AntdLayoutDemoComponent
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
