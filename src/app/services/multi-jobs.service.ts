import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MultiJobsModel } from '../models/multi-jobs.model';

@Injectable()
export class MultiJobsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<MultiJobsModel[]> {
    return this._httpClient.get<MultiJobsModel[]>(' https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
  }
}
