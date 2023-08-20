import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../Shared/header/header.component';
import { FooterComponent } from '../Shared/footer/footer.component';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpLoaderFactory, LanguageModule } from 'src/language/language.module';
import { NotFoundComponent } from '../Shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LanguageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
