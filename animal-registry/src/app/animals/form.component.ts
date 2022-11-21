import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';
import { AnimalService } from './animal.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public animal: Animal = new Animal();
  titulo: string = "Register Animal";

  errores: string[];

  constructor(private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarAnimal();
  }

  cargarAnimal(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.animalService.getAnimal(id).subscribe((animal) => this.animal = animal);
      }
    })
  }

  create(): void {
    this.animalService.create(this.animal)
      .subscribe(
        animal => {
          this.router.navigate(['/animals']);
          swal('New Animal', `The Animal ${this.animal.name} has been successfully created!`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

  update(): void {
    this.animalService.update(this.animal)
      .subscribe(
        json => {
          this.router.navigate(['/animals']);
          swal('Animal Updated', `${json.message}: ${json.animal.name}`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )
  }

}
