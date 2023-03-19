import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ViewhomeComponent } from "./home/viewhome/viewhome.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ProductComponent } from "./product/product.component";
import { UserloansComponent } from "./userloans/userloans.component";
const routes:Routes=[
  {path: '',component:AppComponent,pathMatch:'full'},
  {path:'loan',component: UserloansComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'home', children: [
    {path:'viewhome',component: ViewhomeComponent},
    {path:'seehome',redirectTo:'viewhome'}]},
  {path: '**',component: PagenotfoundComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
