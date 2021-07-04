import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './util/auth.guard';
import {LoginComponent} from "./shared/components/login/login.component";
import {ConfigurationsComponent} from "./pages/configurations/configurations.component";
import {HomeComponent} from "./pages/home/home.component";
const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },

  {path: 'configurations', component: ConfigurationsComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
