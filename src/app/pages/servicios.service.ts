import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  
  private puntuacionLocalSubject = new BehaviorSubject<number>(0);
  private puntuacionVisitaSubject = new BehaviorSubject<number>(0);

  puntuacionLocal$ = this.puntuacionLocalSubject.asObservable();
  puntuacionVisita$ = this.puntuacionVisitaSubject.asObservable();

  aumentarPuntuacionLocal(puntos: number) {
    this.puntuacionLocalSubject.next(this.puntuacionLocalSubject.value + puntos);
  }

  aumentarPuntuacionVisita(puntos: number) {
    this.puntuacionVisitaSubject.next(this.puntuacionVisitaSubject.value + puntos);
  }
}
