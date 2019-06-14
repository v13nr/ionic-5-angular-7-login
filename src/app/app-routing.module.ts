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
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'listmenu', loadChildren: './listmenu/listmenu.module#ListmenuPageModule' },
  { path: 'barang', loadChildren: './barang/barang.module#BarangPageModule' },
  { path: 'profileedit', loadChildren: './profileedit/profileedit.module#ProfileeditPageModule' },
  { path: 'profile-edit', loadChildren: './profile-edit/profile-edit.module#ProfileEditPageModule' },
  
  { path: '**', loadChildren: './errpages/errpages.module#ErrpagesPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
