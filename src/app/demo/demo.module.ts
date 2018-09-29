import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { DemoRoutingModule } from './demo-routing.module';
import { AntdDemoComponent } from '../antd-demo/antd-demo.component';
import { AntdFormDemoComponent } from '../antd-form-demo/antd-form-demo.component';
import { AntdTableDemoComponent } from '../antd-table-demo/antd-table-demo.component';
import { AntdLayoutDemoComponent } from '../antd-layout-demo/antd-layout-demo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DemoRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [
    AntdDemoComponent,
    AntdLayoutDemoComponent,
    AntdFormDemoComponent,
    AntdTableDemoComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class DemoModule { }
