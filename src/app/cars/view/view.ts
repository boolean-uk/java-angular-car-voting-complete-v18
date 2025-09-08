import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car-service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.html',
  styleUrl: './view.css'
})
export class View {
  carService = inject(CarService)
  route = inject(ActivatedRoute)

  id = this.route.snapshot.paramMap.get('id')
  car: Car | null = this.carService.getCarById(Number(this.id))

}
