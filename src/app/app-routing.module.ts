import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReviewsratingComponent } from './components/reviewsrating/reviewsrating.component';
import { TrashComponent } from './components/trash/trash.component';
import { MoviereviewsService } from './services/moviereviews.service';

const routes: Routes = [
  
  {path:'', component:DashboardComponent},
  {path:'add/:id', component:ReviewsratingComponent},
  {path:'delete',component:TrashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
