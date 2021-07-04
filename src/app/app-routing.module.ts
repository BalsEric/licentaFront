import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './util/auth.guard';
import {LoginComponent} from "./shared/components/login/login.component";
import {ConfigurationsComponent} from "./pages/configurations/configurations.component";
import {HomeComponent} from "./pages/home/home.component";
import {WardrobeComponent} from "./pages/wardrobe/wardrobe.component";
import {FashionComponent} from "./pages/fashion/fashion.component";
const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },

  {path: 'configurations', component: ConfigurationsComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'wardrobe', component: WardrobeComponent, canActivate: [AuthGuard]},
  {path: 'fashion', component: FashionComponent, canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
