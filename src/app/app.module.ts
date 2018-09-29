import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

import { DemoModule } from './demo/demo.module';
import { AntdBackgroundComponent } from './antd-background/antd-background.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    DemoModule
  ],
  declarations: [
    AppComponent,
    AntdBackgroundComponent
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AppModule { }
