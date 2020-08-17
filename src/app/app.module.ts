import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
//import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthService } from './core/authentication/auth.service'
import { AuthGuard } from './core/guards/auth.guard'
//import { AuthEffects } from '../app/core/store/effects/auth.effects'
import { HeaderComponent } from './shared/components/header/header.component'
import { SidebarComponent } from './shared/components/sidebar/sidebar.component'
import { NotFoundComponent } from './modules/not-found/not-found.component'
import { HomeModule } from './modules/home/home.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    //EffectsModule.forRoot([AuthEffects]),
    HomeModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
