import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiPageComponent } from './pages/pai.component';
import { Filho1PageComponent } from './pages/filho1.component';
import { Filho2PageComponent } from './pages/filho2.component';

const routes: Routes = [
  {
    path: 'pai',
    component: PaiPageComponent,
    children: [
      { path: 'filho1', component: Filho1PageComponent },
      { path: 'filho2', component: Filho2PageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
