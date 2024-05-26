import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EspecialidadShowComponent } from './components/especialidad-show/especialidad-show.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EspecialidadShowComponent, EspecialidadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApiFront';
}
