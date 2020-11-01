import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';
import { BreweryThanksComponent } from './brewery-thanks/brewery-thanks.component';
import { BreweryDescriptionComponent } from './brewery-description/brewery-description.component';
import { BreweryContactComponent } from './brewery-contact/brewery-contact.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'  
  },
  {
    path: 'beers',
    component: BreweryBeersComponent
  },
  {
    path: 'about',
    component: BreweryAboutComponent
  },
  {
    path: 'description',
    component: BreweryDescriptionComponent
  },
  {
    path: 'contact',
    component: BreweryContactComponent
  },
  {
    path: 'thanks',
    component: BreweryThanksComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
