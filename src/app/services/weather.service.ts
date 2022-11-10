import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wheaterdata } from '../models/weather_model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { 

  }
  
  getWeatherData(cityName: string):Observable<Wheaterdata> {
    return this.http.get<Wheaterdata>(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('location',cityName)
      .set('format','json')
    });
  }
}
