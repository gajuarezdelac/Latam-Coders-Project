import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchPostComponent } from './pages/search-post/search-post.component';
import { SearchShortcutsComponent } from './pages/search-shortcuts/search-shortcuts.component';
import { ViewShortcutComponent } from './pages/view-shortcut/view-shortcut.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminPanelComponent,
    ViewPostComponent,
    SearchPostComponent,
    SearchShortcutsComponent,
    ViewShortcutComponent,
    NavbarComponent,
    FooterComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
