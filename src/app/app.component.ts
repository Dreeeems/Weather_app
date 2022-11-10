import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { Wheaterdata } from './models/weather_model';
import { CurrentObservation } from './models/weather_model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

constructor(private wheaterService: WeatherService){

  
}
cityName: string ="Tokyo";
 weatherData?: Wheaterdata;
 CurrentObservation?:CurrentObservation;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName="";

  }
  private getWeatherData(cityName:string){
    this.wheaterService.getWeatherData(cityName)
    .subscribe ({
        next:(response) =>{
          this.weatherData = response
          console.log(response);
        }
      })
  }
    
}
