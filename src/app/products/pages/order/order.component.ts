import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-pages-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase : boolean = false;

  public orderTable: keyof Hero | '' = '';

  public hero : Hero[] = [
    {name: 'Batman', canFly:false, color:Color.black},
    {name: 'Robin', canFly:false, color:Color.red},
    {name: 'Linterna Verde', canFly:true, color:Color.green},
    {name: 'Superman', canFly:true, color:Color.blue}
  ];

  toUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  };

  OrderHeroBy( value: keyof Hero | '' ){
    this.orderTable= value;
  };

}
