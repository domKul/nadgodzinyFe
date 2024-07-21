import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {routes} from "./app/app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule), provideRouter(routes), provideAnimationsAsync()]
}).catch(err => console.error(err));
