import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouterState } from "@angular/router";

import { IndexComponent } from './index.component';
import { AppComponent } from './app.component';
import { AnimalComponent } from './modules/animal/components/animal.component';

const appRouters: Routes = [
    { path: '', component: AppComponent },
    { path: 'index', component: IndexComponent },
    { path: 'animal', component: AnimalComponent }
];

@NgModule({
    declarations: [AnimalComponent],
    imports: [RouterModule.forRoot(appRouters)],
    exports: [
        RouterModule
    ]
})
export class AppRouterModule {

}

