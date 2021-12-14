import { Component, OnInit } from '@angular/core';
import { UsersSearchParamsService } from '../../services/users-search-params.service';

@Component({
  selector: 'qoollo-users-search-params',
  templateUrl: './users-search-params.component.html',
  styleUrls: ['./users-search-params.component.scss']
})
export class UsersSearchParamsComponent implements OnInit {

  constructor(
    public readonly search: UsersSearchParamsService
  ) { }

  ngOnInit(): void {
  }

}
