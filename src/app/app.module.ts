import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { HttpClientModule} from '@angular/common/http';
import { LoadingComponent } from './core/components/loading/loading.component';
import { CopyrightComponent } from './core/components/copyright/copyright.component';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoadingComponent,
    CopyrightComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FontAwesomeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
