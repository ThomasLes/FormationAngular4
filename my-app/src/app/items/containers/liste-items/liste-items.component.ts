import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../../core/services/collection';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-liste-items',
  templateUrl: './liste-items.component.html',
  styleUrls: ['./liste-items.component.scss']
})
export class ListeItemsComponent implements OnInit {
  collection: Item[];
  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }

}
