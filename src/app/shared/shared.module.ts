import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { EmptyPipePipe } from './pipes/empty-pipe.pipe';

@NgModule({
  declarations: [LoadingScreenComponent, AutoFocusDirective, EmptyPipePipe],
  exports: [
    LoadingScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
