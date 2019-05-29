import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ExampleShellComponent} from "./example-shell/example-shell.component";
import {ExampleContentComponent} from "./example-content/example-content.component";

const routes: Routes = [
  {
    path: "",
    component: ExampleShellComponent,
    children: [
      {path: "content", component: ExampleContentComponent},
      {path: "", redirectTo: "content", pathMatch: "full"}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {
}
