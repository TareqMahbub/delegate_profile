import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ProfileComponent } from './profile/profile.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { SlimModule } from './slim/slim.angular.module';
import { SlimImageComponent } from './slim-image/slim-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ProfileComponent,
    UnderConstructionComponent,
    SlimImageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 100000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    AppRoutingModule,
    FontAwesomeModule,
    SlimModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
