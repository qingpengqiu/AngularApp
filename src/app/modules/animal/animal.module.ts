import { NgModule } from '@angular/core';
import { DogComponent } from './components/dog.component';
import { AnimalComponent } from './components/animal.component';
import { AnimalRouterModule } from './animal-router.module';

@NgModule({
    declarations: [ DogComponent, AnimalComponent],
    imports: [ AnimalRouterModule ]

})
export class AnimalModule {


}
