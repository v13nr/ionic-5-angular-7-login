import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'coamu',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'foto',
        children: [
          {
            path: '',
            loadChildren: '../foto/foto.module#FotoPageModule'
          }
        ]
      },
      {
        path: 'coahelp',
        children: [
          {
            path: '',
            loadChildren: '../coa/coa.module#CoaPageModule'
          }
        ]
      },
      {
        path: 'survey',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tabwelcome',
        children: [
          {
            path: '',
            loadChildren: '../tabwelcome/tabwelcome.module#TabwelcomePageModule'
          }
        ]
      },
      {
        path: 'poshome',
        children: [
          {
            path: '',
            loadChildren: '../poshome/poshome.module#PoshomePageModule'
          }
        ]
      },
      {
        path: 'coa',
        children: [
          {
            path: '',
            loadChildren: '../coa/coa.module#CoaPageModule'
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule'
          }
        ]
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: '../register/register.module#RegisterPageModule'
          }
        ]
      },
      {
        path: 'coacard/:name',
        children: [
          {
            path: '',
            loadChildren: '../coacard/coacard.module#CoacardPageModule'
          }
        ]
      },
      {
        path: 'barang',
        children: [
          {
            path: '',
            loadChildren: '../barang/barang.module#BarangPageModule'
          }
        ]
      },
      {
        path: 'editprofile',
        children: [
          {
            path: '',
            loadChildren: '../profileedit/profileedit.module#ProfileeditPageModule'
          }
        ]
      },
      {
        path: 'bantuan',
        children: [
          {
            path: '',
            loadChildren: '../laporan/laporan.module#LaporanPageModule'
          }
        ]
      },
      {
        path: 'listmenu',
        children: [
          {
            path: '',
            loadChildren: '../listmenu/listmenu.module#ListmenuPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
