import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GameViewComponent } from './game-view/game-view.component';
import { GameBlockComponent } from './game-block/game-block.component';

import { NgZorroAntdModule} from 'ng-zorro-antd';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    GameRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [GameViewComponent, GameBlockComponent]
})
export class GameModule { }
