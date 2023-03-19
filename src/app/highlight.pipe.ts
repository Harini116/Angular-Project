import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, city: string,pin:number): any {
    if(city=="Chennai" && pin==603210)
    return 'Namba Ooru Chennai ' + pin;
    else
    return 123;
  }
}
