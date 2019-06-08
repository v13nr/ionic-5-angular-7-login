import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path:'welcome', component: WelcomeComponent  },
  { path: 'tabwelcome', loadChildren: './tabwelcome/tabwelcome.module#TabwelcomePageModule' },
  { path: 'coa', loadChildren: './coa/coa.module#CoaPageModule' },
  { path: 'coacard', loadChildren: './coacard/coacard.module#CoacardPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'listmenu', loadChildren: './listmenu/listmenu.module#ListmenuPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
