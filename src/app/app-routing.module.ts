import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './core/guards/auth.guard'
import { NotFoundComponent } from './modules/not-found/not-found.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'capture-documents',
    loadChildren: () =>
      import('./modules/capture-documents/capture-documents.module').then(
        (m) => m.CaptureDocumentsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'consult-documents',
    loadChildren: () =>
      import('./modules/consult-documents/consult-documents.module').then(
        (m) => m.ConsultDocumentsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
