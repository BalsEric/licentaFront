import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppAngularMaterialModule} from './app-angular-material.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './util/auth.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { WardrobeComponent } from './pages/wardrobe/wardrobe.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { ClothComponent } from './shared/components/cloth/cloth.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConfigurationsComponent,
    WardrobeComponent,
    FashionComponent,
    ClothComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppAngularMaterialModule
  ],
  exports: [
    AppAngularMaterialModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

