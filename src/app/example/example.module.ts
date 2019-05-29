import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleShellComponent} from './example-shell/example-shell.component';
import {ExampleContentComponent} from './example-content/example-content.component';
import {ExampleRoutingModule} from "./example-routing.module";

@NgModule({
  declarations: [ExampleShellComponent, ExampleContentComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule {
}
