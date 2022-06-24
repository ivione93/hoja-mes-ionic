import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/home/profile/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'new-training',
    loadChildren: () => import('./pages/home/trainings/new-training/new-training.module').then( m => m.NewTrainingPageModule)
  },
  {
    path: 'show-training',
    loadChildren: () => import('./pages/home/trainings/show-training/show-training.module').then( m => m.ShowTrainingPageModule)
  },
  {
    path: 'new-competition',
    loadChildren: () => import('./pages/home/competitions/new-competition/new-competition.module').then( m => m.NewCompetitionPageModule)
  },
  {
    path: 'show-competition',
    loadChildren: () => import('./pages/home/competitions/show-competition/show-competition.module').then( m => m.ShowCompetitionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
