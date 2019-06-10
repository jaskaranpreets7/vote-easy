import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  { path : '', component: SignInComponent},
  { path : 'home', component: HomeComponent , canActivate:[AuthGuardService] },
  { path : 'polls', component: PollListComponent, canActivate:[AuthGuardService]  },
  { path : 'poll-details/:id', component: PollDetailComponent, canActivate:[AuthGuardService]  },
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