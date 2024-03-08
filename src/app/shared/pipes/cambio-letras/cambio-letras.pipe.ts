import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  private letterMap: { [key: string]: string } = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    'u': '9'
  };

  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.replace(/[aeiou]/gi, match => this.letterMap[match.toLowerCase()] || match);
  }
}