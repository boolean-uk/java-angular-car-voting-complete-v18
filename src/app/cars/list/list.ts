import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car-service';
import { Car } from '../models/car';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  carService = inject(CarService)

  cars: Car[] = this.carService.getAllCars()

}
