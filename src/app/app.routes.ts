import { Routes } from '@angular/router';
import {OvertimeComponent} from "./components/overtime/overtime.component";

export const routes: Routes = [
  { path: 'overtime', component: OvertimeComponent },
  { path: '', redirectTo: '/overtime', pathMatch: 'full' }
];
