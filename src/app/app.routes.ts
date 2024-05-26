import { Routes } from '@angular/router';
import { EspecialidadComponent} from './components/especialidad/especialidad.component';
import { EspecialidadShowComponent } from './components/especialidad-show/especialidad-show.component';
export const routes: Routes = [
    {path: '', component: EspecialidadComponent},
    {path: 'especialidad/:IDespecialidad', component: EspecialidadShowComponent}    
];
