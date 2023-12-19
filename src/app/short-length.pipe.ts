import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortLength'
})
export class ShortLengthPipe implements PipeTransform {

  transform(value: any, length: number) {
    if (value?.length > length) {
      return value.substr(0, length) + '...';
    } else{
      return value;
    }
  }

}
