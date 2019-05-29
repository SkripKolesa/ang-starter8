import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyPipe'
})
export class EmptyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
