import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';
import { AnimalService } from './animal.service';
import swal from 'sweetalert2';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals: Animal[];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getAnimals().pipe(
      tap(animals => {
        animals.forEach(animal => {
          console.log(animal.name);
        });
      })
    ).subscribe(animals => this.animals = animals);
  }

  delete(animal: Animal): void {
    swal({
      title: 'Are you sure?',
      text: `¿Are you sure you want to remove animal ${animal.name}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.animalService.delete(animal.id).subscribe(
          () => {
            this.animals = this.animals.filter(ani => ani !== animal)
            swal(
              'Animal removed!',
              `Animal ${animal.name} removed successfully!`,
              'success'
            )
          }
        )

      }
    });
  }

}

