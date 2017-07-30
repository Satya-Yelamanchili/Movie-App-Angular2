import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { MoviesService } from './services/movies.service';
import { GenreService } from './services/genre.service';
import { PeopleService } from './services/people.service';
import { TvService } from './services/tv.service';
import { CompanyService } from './services/company.service';

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
import { TabComponent } from './common/tab/tab.component';
import { TabsDirective } from './common/tabs.directive';
import { TabsComponent } from './common/tabs/tabs.component';
import { SeasoninfoComponent } from './components/seasoninfo/seasoninfo.component';
import { MouseoverimageDirective } from './directives/mouseoverimage.directive';
import { UpcomingmoviesComponent } from './components/upcomingmovies/upcomingmovies.component';
import { NowplayingmoviesComponent } from './components/nowplayingmovies/nowplayingmovies.component';
import { TopratedmoviesComponent } from './components/topratedmovies/topratedmovies.component';
import { MoviecollectionComponent } from './components/moviecollection/moviecollection.component';
import { VideodialogComponent } from './components/videodialog/videodialog.component';
import { CompanyinfoComponent } from './components/companyinfo/companyinfo.component';


const approutes: Routes = [
  { path: 'movie', component: PopularmoviesComponent },
  { path: 'movie/upcoming', component: UpcomingmoviesComponent },
  { path: 'movie/now-playing', component: NowplayingmoviesComponent },
  { path: 'movie/top-rated', component: TopratedmoviesComponent },
  { path: 'movie/:id', component: MovieinfoComponent },
  { path: 'people/:id', component: PeopleComponent },
  { path: 'personinfo/:id', component: PersoninfoComponent },
  { path: 'tv', component: PopularshowsComponent },
  { path: 'tv/on-the-air', component: OnairshowsComponent },
  { path: 'tv/top-rated', component: TopratedshowsComponent },
  { path: 'tv/airing-today', component: TodaysshowsComponent },
  { path: 'tv/:id', component: ShowinfoComponent},
  { path: 'tv/:id/season/:season', component: SeasoninfoComponent},
  { path: 'company/:id', component: CompanyinfoComponent},
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
    ShowcollectionComponent,
    TabComponent,
    TabsDirective,
    TabsComponent,
    SeasoninfoComponent,
    MouseoverimageDirective,
    UpcomingmoviesComponent,
    NowplayingmoviesComponent,
    TopratedmoviesComponent,
    MoviecollectionComponent,
    VideodialogComponent,
    CompanyinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(approutes),
  ],
  exports: [
    FormsModule,
  ],
  entryComponents: [VideodialogComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [MoviesService, GenreService, PeopleService, TvService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
