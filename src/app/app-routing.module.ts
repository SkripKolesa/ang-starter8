import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShellComponent} from "./shell/shell.component";
import {WelcomeComponent} from "./shell/welcome/welcome.component";
import {PageNotFoundComponent} from "./shell/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {path: "welcome", component: WelcomeComponent},
      {path: "example", loadChildren: () => import("./example/example.module").then(mod => mod.ExampleModule)},
      // {path: "", redirectTo: "welcome", pathMatch: "full"}
      {path: "", redirectTo: "example", pathMatch: "full"}
    ]
  },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
