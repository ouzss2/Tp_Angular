import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, suffix: string = ' (Custom Suffix)'): string {
    return value + suffix;
  }

}
