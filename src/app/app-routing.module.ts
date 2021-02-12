import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    component: RegistrationPageComponent,
    path: 'register'
  },
  {
    component: HomePageComponent,
    path: 'home'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
})
export class AppRoutingModule {
}
