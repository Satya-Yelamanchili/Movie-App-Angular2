import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { MoviesService } from './services/movies.service';
import { GenreService } from './services/genre.service';
import { PeopleService } from './services/people.service';
import { TvService } from './services/tv.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OnairshowsComponent } from './components/onairshows/onairshows.component';
import { PopularshowsComponent } from './components/popularshows/popularshows.component';
import { TodaysshowsComponent } from './components/todaysshows/todaysshows.component';
import { TopratedshowsComponent } from './components/topratedshows/topratedshows.component';
import { PeopleComponent } from './components/people/people.component';
import { PersoninfoComponent } from './components/personinfo/personinfo.component';
import { PopularmoviesComponent } from './components/popularmovies/popularmovies.component';
import { MovieinfoComponent } from './components/movieinfo/movieinfo.component';
import { ShowinfoComponent } from './components/showinfo/showinfo.component';
import { ShowcollectionComponent } from './components/showcollection/showcollection.component';

const approutes: Routes = [
  { path: 'popularmovies', component: PopularmoviesComponent },
  { path: 'movieinfo/:id', component: MovieinfoComponent },
  { path: 'people/:id', component: PeopleComponent },
  { path: 'personinfo/:id', component: PersoninfoComponent },
  { path: 'tv', component: PopularshowsComponent },
  { path: 'tv/on-the-air', component: OnairshowsComponent },
  { path: 'tv/top-rated', component: TopratedshowsComponent },
  { path: 'tv/airing-today', component: TodaysshowsComponent },
  { path: 'tv/:id', component: ShowinfoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OnairshowsComponent,
    PopularshowsComponent,
    TodaysshowsComponent,
    TopratedshowsComponent,
    PeopleComponent,
    PersoninfoComponent,
    PopularmoviesComponent,
    MovieinfoComponent,
    ShowinfoComponent,
    ShowcollectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes),
  ],
  exports: [
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [MoviesService, GenreService, PeopleService, TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
