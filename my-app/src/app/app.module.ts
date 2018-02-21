import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    PageNotFoundModule,
    SharedModule,
    NgbModule.forRoot(),
    ItemsModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
