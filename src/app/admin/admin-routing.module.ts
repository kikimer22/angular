import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainLayoutComponent } from '../shared/components/main-layout/main-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      // {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
      // {path: 'create-faq', component: CreateFaqComponent, canActivate: [AuthGuard]},
      // {path: 'faq/:id/edit', component: FaqEditPageComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
