import { Component } from '@angular/core';
import { ignoreElements } from 'rxjs';

//Se crea un interface de Jugardor para usarlo despues en 
//el tema de las faltas cometidas
interface Jugador{
  nombre: string;
  faltas: number;
}

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent {

  //Creacion de equipos local y visita
  //jugadores1: {nombre:string, faltas:number}[] =[];

  //jugadores2: {nombre:string, puntuacion:number}[] =[];

  //puntuaciones local y visita
  puntuacionLocal: number = 0;
  puntuacionVisita: number = 0;



  constructor(){

  }

  incrementoPunto(equipo: string) {
    if(equipo == 'local'){
      this.puntuacionLocal++;
    }else if(equipo == 'visita'){
      this.puntuacionVisita++;
    }
  }

  jugadores1: Jugador[] = [
    {nombre: 'C. FLORES', faltas:0},
      {nombre: 'C. LOBOS',faltas:0},
      {nombre: 'C. PIZARRO',faltas:0},
      {nombre: 'C. SEVERINO',faltas:0},
      {nombre: 'C. TAMAYO',faltas:0},
      {nombre: 'E. CARDENA',faltas:0},
      {nombre: 'F. CIFUENTES',faltas:0},
      {nombre: 'F. OLIVA',faltas:0},
      {nombre: 'G. CUEVAS',faltas:0},
      {nombre: 'G. SALGADO',faltas:0},
      {nombre: 'H. ALVAREZ',faltas:0},
      {nombre: 'I. SEPULVEDA',faltas:0},
      {nombre: 'R. BELLO',faltas:0}
  ];

  jugadores2: Jugador[] = [
    {nombre: 'C. LIZANA', faltas:0},
      {nombre: 'C. LOPEZ',faltas:0},
      {nombre: 'C. SERRANO',faltas:0},
      {nombre: 'E. PENA',faltas:0},
      {nombre: 'F. MORALES',faltas:0},
      {nombre: 'G. MORALES',faltas:0},
      {nombre: 'H. VERA',faltas:0},
      {nombre: 'J. NANCUFIL',faltas:0},
      {nombre: 'J. PULGAR',faltas:0},
      {nombre: 'M. ROMERO',faltas:0},
      {nombre: 'P. BUSTAMANTE',faltas:0},
      {nombre: 'R. JAMARILLO',faltas:0},
      {nombre: 'S. VILLEGAS',faltas:0}
  ];

  faltaInicial:number = 0;

  incrementoFaltas(jugador: Jugador){
    if(jugador.faltas <5){
      jugador.faltas++;
    }
  }

}
