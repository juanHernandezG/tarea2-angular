import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private puntuacionLocalSubject = new BehaviorSubject<number>(0);
  private puntuacionVisitaSubject = new BehaviorSubject<number>(0);

  private faltasLocalSubject = new BehaviorSubject<number>(0);
  private faltasVisitaSubject = new BehaviorSubject<number>(0);

  puntuacionLocal$ = this.puntuacionLocalSubject.asObservable();
  puntuacionVisita$ = this.puntuacionVisitaSubject.asObservable();

  faltasLocal$ = this.faltasLocalSubject.asObservable();
  faltasVisita$ = this.faltasVisitaSubject.asObservable();

  aumentarPuntuacionLocal(puntos: number) {
    this.puntuacionLocalSubject.next(this.puntuacionLocalSubject.value + puntos);
  }

  aumentarPuntuacionVisita(puntos: number) {
    this.puntuacionVisitaSubject.next(this.puntuacionVisitaSubject.value + puntos);
  }

  aumentarFaltaLocal(puntos: number){
    this.faltasLocalSubject.next(this.faltasLocalSubject.value + puntos);
  }

  aumentarFaltaVisita(puntos: number){
    this.faltasVisitaSubject.next(this.faltasVisitaSubject.value + puntos);
  }
}
