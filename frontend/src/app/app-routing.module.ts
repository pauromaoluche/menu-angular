import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './admin/pages/new/new.component';
import { NewFoodComponent } from './admin/components/new-food/new-food.component';
import { NewGroupComponent } from './admin/components/new-group/new-group.component';
import { IndexComponent } from './admin/pages/index/index.component';
import { FoodFormComponent } from './admin/components/food-form/food-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'admin', component: IndexComponent,
    children: [
      {
        path: 'adicionar', component: NewComponent,
        children: [
          { path: 'nova-comida', component: NewFoodComponent },
          { path: 'novo-grupo', component: NewGroupComponent }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
