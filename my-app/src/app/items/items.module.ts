import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeItemsComponent } from './containers/liste-items/liste-items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListeItemsComponent,
  ],
  declarations: [ListeItemsComponent]
})
export class ItemsModule { }
