import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes, { useHash: true })),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));
