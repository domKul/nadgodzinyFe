import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OvertimeComponent} from './components/overtime/overtime.component';
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {path: 'overtime', component: OvertimeComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
