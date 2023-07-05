import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './product-list/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    TestComponent, HeaderComponent, NavbarComponent, ProductListComponent, SearchComponent
  ],
  imports : [
    BrowserModule, FormsModule
  ],
  providers : [],
  bootstrap: [AppComponent]
})

export class AppModule { }
