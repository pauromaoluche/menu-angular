import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './admin/pages/new/new.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewFoodComponent } from './admin/components/new-food/new-food.component';
import { NewGroupComponent } from './admin/components/new-group/new-group.component';
import { IndexComponent } from './admin/pages/index/index.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { FoodFormComponent } from './admin/components/food-form/food-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewComponent,
    NewFoodComponent,
    NewGroupComponent,
    IndexComponent,
    LoginComponent,
    FoodFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
