import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { NewFoodComponent } from './components/new-food/new-food.component';
import { NewGroupComponent } from './components/new-group/new-group.component';
import { IndexComponent } from './admin/pages/index/index.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adicionar', component: NewComponent,
children: [
  {path: 'nova-comida', component: NewFoodComponent},
  {path: 'novo-grupo', component: NewGroupComponent}
]
},
{path: 'admin', component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
