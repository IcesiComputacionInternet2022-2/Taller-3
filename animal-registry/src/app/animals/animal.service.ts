import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable()
export class AnimalService {
  private urlEndPoint: string = 'http://localhost:8080/animals';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get(this.urlEndPoint).pipe(
      tap(response => {
        let animals = response as Animal[];
        animals.forEach(animal => {
          console.log(animal.name);
        });
      }),
      map(response => {
        let animals = response as Animal[];
        return animals.map(animal => {
          animal.name = animal.name.toUpperCase();
          return animal;
        });
      }
      ),
      tap(response => {
        response.forEach(animal => {
          console.log(animal.name);
        });
      })
    );
  }

  create(animal: Animal): Observable<Animal> {
    return this.http.post(this.urlEndPoint, animal, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.animal as Animal),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getAnimal(id): Observable<Animal> {
    return this.http.get<Animal>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/animals']);
        console.error(e.error.mensaje);
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  update(animal: Animal): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${animal.id}`, animal, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete(id: string): Observable<Animal> {
    return this.http.delete<Animal>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

}