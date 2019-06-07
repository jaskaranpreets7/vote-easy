import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'home', component: HomeComponent },
  { path : 'polls', component: PollListComponent },
  { path : 'sign-in', component: SignInComponent},
  { path : 'poll-details/:id', component: PollDetailComponent },
  { path : '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }