import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesModel } from '../models/roles.model';
import { DepartmentModel } from '../models/department.model';
import {UserModel} from "../models/user.model";

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  getRoles(role: string): Observable<RolesModel[]> {
    return this._httpClient.get<RolesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }
  getDepartments(department: string): Observable<DepartmentModel[]> {
    return this._httpClient.get<DepartmentModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/departments');
  }
  getUsers(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/user');
  }
}
