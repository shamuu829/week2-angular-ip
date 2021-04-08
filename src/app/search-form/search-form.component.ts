import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Search} from '../search'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchInfo = new Search();
  @Output() getName = new EventEmitter<Search>();

  searchFor(data: { value: any[]; reset: () => void; }){
    this.getName.emit(data.value.find);
    console.log(data.value.find)
    data.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
