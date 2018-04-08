import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouterState } from "@angular/router";

import { IndexComponent } from "./index.component";


const appRouters:Routes=[
    {path:'',component:IndexComponent},
    {path:'index',component:IndexComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRouters)],
    exports: [
      RouterModule
    ]
})
export class AppRouterModule{

}

