import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchPostComponent } from './pages/search-post/search-post.component';
import { SearchShortcutsComponent } from './pages/search-shortcuts/search-shortcuts.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { ViewShortcutComponent } from './pages/view-shortcut/view-shortcut.component';

const routes: Routes = [
  {
    path: 'blog', component: NavbarComponent, children: [
      { path: 'search', component: SearchPostComponent },
      { path: 'sh-shorcuts', component: SearchShortcutsComponent },
      { path: 'view-post', component: ViewPostComponent },
      { path: 'view-shorcut', component: ViewShortcutComponent },
    ],
    // canActivate: [ AuthGuard ]
  },
  {
    path: '', component: NavbarComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: "terms-and-conditions", component: TermsConditionsComponent },
      // { path: 'support', component: SupportComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home' },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
