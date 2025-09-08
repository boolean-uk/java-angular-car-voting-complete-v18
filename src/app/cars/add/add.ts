import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../../services/car-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  carForm: FormGroup;
  formBuilder = inject(FormBuilder);
  carService = inject(CarService)
  router = inject(Router)

  constructor() {
    this.carForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCar() {
    this.carService.addCar(this.carForm.value)
    this.router.navigate(['cars'])
  }
}
