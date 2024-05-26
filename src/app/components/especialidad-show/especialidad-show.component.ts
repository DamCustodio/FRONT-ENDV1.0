import {Component, Input, OnInit} from '@angular/core';
import { EspecialidadService } from '../../services/especialidad.service';
import { EspecialidadInterface } from '../../interfaces/especialidad';
import {JsonPipe} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { error } from 'console';
@Component({
  selector: 'app-especialidad-show',
  standalone: true,
  imports: [JsonPipe, MatButtonModule, MatCardModule],
  templateUrl: './especialidad-show.component.html',
  styleUrl: './especialidad-show.component.css'
})
export class EspecialidadShowComponent implements OnInit {

    
  constructor(private service: EspecialidadService) { }
  
  @Input('IDespecialidad') especialidadID: string | undefined;
  ngOnInit() {
      this.getEspecialidadById();
  }
  especialidad: EspecialidadInterface ={
    IDespecialidad:0,
    nombre:'',
    estado:'',
  };

  getEspecialidadById(){
    this.service.getEspecialidadById(this.especialidadID).subscribe({
      next: result=>{
        this.especialidad = result.data;
      },
      error:error => console.error(error)
    })
  }
  

}
