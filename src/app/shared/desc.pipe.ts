import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: string, Limit: number): string {
    if(value.length >= Limit ){
      return value.slice(0, Limit) + '...';
    }
    return value;
  }

}
