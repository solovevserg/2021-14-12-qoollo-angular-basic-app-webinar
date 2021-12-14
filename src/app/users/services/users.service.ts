import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';
import { UsersSearchParamsService } from './users-search-params.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly search: UsersSearchParamsService,
    private readonly api: ApiService,
  ) { }

  private readonly onlyVerified = this.search.params.pipe(
    map(({onlyVerified}) => onlyVerified),
    distinctUntilChanged(),
  )

  private readonly fetchedUsers = this.search.params.pipe(
    map(({query}) => query),
    distinctUntilChanged(),
    switchMap(query => this.api.geUsers(query)),
    shareReplay({
      bufferSize: 1,
      refCount: true,
    }),
  );

  public readonly users = combineLatest([
    this.fetchedUsers,
    this.onlyVerified
  ]).pipe(
    map(([users, onlyVerified]) => {
      if(!onlyVerified) {
        return users;
      }
      return users.filter(user => user.verified);
    }),
  );

}
