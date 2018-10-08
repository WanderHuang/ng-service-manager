import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// main page
import { GameViewComponent } from './game-view/game-view.component';
// games
import { GameBlockComponent } from './game-block/game-block.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full'
  },
  {
    path: 'game',
    component: GameViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'block',
        pathMatch: 'full'
      },
      {
        path: 'block',
        component: GameBlockComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
