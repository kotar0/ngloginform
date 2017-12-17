import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginformComponent,
    data : {
        page : 'ログイン'
    }
  },
  {
    path: 'signup',
    component: LoginformComponent,
    data : {
        page : 'サインアップ'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
