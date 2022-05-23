import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PlacesComponent } from './places/places.component';
import { RegisteringComponent } from './registering/registering.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'place', component: PlacesComponent},
  { path: 'register', component: RegisteringComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'notfound', component: NotfoundComponent},
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
