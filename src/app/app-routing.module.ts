import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth-routing.module').then((r) => r.AuthRoutingModule),
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./patient/patient-routing.module').then(
        (m) => m.PatientRoutingModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./user/user-routing.module').then((m) => m.UserRoutingModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
