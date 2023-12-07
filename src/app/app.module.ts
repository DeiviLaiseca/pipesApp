import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import  localeJa from '@angular/common/locales/ja';
import  localeRu from '@angular/common/locales/ru';
import  localeEsCO from '@angular/common/locales/es-CO';

import { registerLocaleData } from '@angular/common';

registerLocaleData ( localeJa );
registerLocaleData ( localeRu );
registerLocaleData ( localeEsCO );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
