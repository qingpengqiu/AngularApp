import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DogComponent } from '../animal/components/dog.component';
import { AnimalComponent } from './components/animal.component';

const animalRoutes: Routes = [
   { path: '' , component : AnimalComponent }

];

@NgModule({
    imports: [ RouterModule.forChild(animalRoutes) ],
    exports: [RouterModule]
})
export class AnimalRouterModule { }




