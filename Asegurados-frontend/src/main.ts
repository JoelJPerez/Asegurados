import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import { environment } from "./environments/environments.prod"

const app = initializeApp(environment);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule)
  ],
}).catch((err) => console.error(err));
