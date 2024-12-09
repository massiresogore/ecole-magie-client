import { Routes } from '@angular/router';
import {HomeComponentComponent} from "./pages/home-component/home-component.component";
import {PouvoirsComponent} from "./pages/pouvoirs/pouvoirs.component";
import {MagiciensComponent} from "./pages/magiciens/magiciens.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./services/auth/guard/auth.guard";
import {AdminComponent} from "./pages/admin/admin.component";
export const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    //canActivate: [AuthGuard],//Désactivation temporaire pour le test
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pouvoirs',
    component: PouvoirsComponent
  },
  {
    path: 'magiciens',
    component: MagiciensComponent
  },
  {
    path:"**",
    component: NotFoundComponent
  }
];
