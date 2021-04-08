import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';
import {User} from '../user';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchRequestService,Repository,User],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
