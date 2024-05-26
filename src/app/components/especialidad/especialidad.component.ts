import { Component, OnInit } from '@angular/core';
import {JsonPipe} from "@angular/common";
import { EspecialidadService } from '../../services/especialidad.service';
import { EspecialidadInterface } from '../../interfaces/especialidad';
import {MatTableModule} from '@angular/material/table';
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import { error } from 'console';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-especialidad',
  standalone: true,
  imports: [JsonPipe, MatTableModule, MatAnchor, RouterLink],
  templateUrl: './especialidad.component.html',
  styleUrl: './especialidad.component.css'
})
export class EspecialidadComponent implements OnInit{
  constructor(private service: EspecialidadService){}
  ngOnInit(){
      console.log("user works!")
      this.getEspecialidad()

  }
  especialidad: EspecialidadInterface[]=[]

  getEspecialidad(){
    this.service.getEspecialidad().subscribe({
      next: result => {
        this.especialidad = result.data
      },
      error: error => console.error(error)
    })
  }
  displayedColumns: string[]= ['IDespecialidad','nombre','estado'];

}
