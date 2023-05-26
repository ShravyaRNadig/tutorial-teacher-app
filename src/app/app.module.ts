import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './features/components/components.component';
import { HomeComponent } from './features/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    ErrorComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
