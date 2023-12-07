import { Color } from './../interfaces/hero.interface';
import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'showColor',
})
export class ShowColorPipe implements PipeTransform {

  transform(value: Color): 'Negro' | 'Rojo' | 'Azul' | 'Verde' | 'N/A' {
    switch (value){
      case Color.black:
        return 'Negro';
      case Color.red:
        return 'Rojo';
      case Color.blue:
        return 'Azul';
      case Color.green:
        return 'Verde';
      default:
        return 'N/A';
    };
  }

}
