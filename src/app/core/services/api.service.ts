import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // TODO: Вынести это в глобальный конфиг
  private readonly API_ORIGIN = 'https://sdal.pw';

  constructor(
    private readonly http: HttpClient,
  ) { }

  public geUsers(query = '') {
    const url = `${this.API_ORIGIN}/api/cdc/users`;
    return this.http.get<User[]>(url, {
      params: {
        query, // TODO: сокращенный синтакис объявления свойств объектов
      }
    });
  }

  public getUser(id: number) {
    const url = `${this.API_ORIGIN}/api/cdc/users`;
    return this.http.get<User[]>(url, {
      params: {
        id,
      }
    });
  }

}
