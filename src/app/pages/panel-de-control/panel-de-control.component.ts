import { Component } from '@angular/core';

interface Jugador{
  nombre: string;
  faltas: number;
}

@Component({
  selector: 'app-panel-de-control',
  templateUrl: './panel-de-control.component.html',
  styleUrls: ['./panel-de-control.component.css']
})
export class PanelDeControlComponent {

    audio: HTMLAudioElement;
    sonidoReproduciendo: boolean = false;
  
    constructor() {
      this.audio = new Audio();
      this.audio.src = 'assets/buzzer.mp3';
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
  
    reproducirSonido() {
      if (this.sonidoReproduciendo) {
        this.audio.pause(); // Detener la reproducción
        this.sonidoReproduciendo = false;
      } else {
        this.audio.play(); // Iniciar la reproducción
        this.sonidoReproduciendo = true;
      }
    }
  
  

}
