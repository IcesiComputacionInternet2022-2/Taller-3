import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals/animal';
import { AnimalService } from '../animals/animal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title: string = 'Animal Registry'
  public animal: Animal = new Animal();
  public animalId: string = '';

  constructor(private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    search() : void{
      this.router.navigate(['/animals/form/',this.animalId]);
      this.animalId='';
    }
}
