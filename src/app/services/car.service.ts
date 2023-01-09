import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car.model';
import { BrandModel } from '../models/brand.model';
import {ComfortFeaturesModel} from "../models/comfort-features.model";
import {SecurityFeaturesModel} from "../models/security-features.model";

@Injectable()
export class CarService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllCars(): Observable<CarModel[]> {
    return this._httpClient.get<CarModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cars');
  }

  getBrands(): Observable<BrandModel[]> {
    return this._httpClient.get<BrandModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands');
  }
  getComfortFeatures(): Observable<ComfortFeaturesModel[]> {
    return this._httpClient.get<BrandModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features');
  }
  getSecurityFeatures(): Observable<SecurityFeaturesModel[]> {
    return this._httpClient.get<BrandModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-security-features');
  }

}
