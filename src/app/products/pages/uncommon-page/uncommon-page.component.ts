import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'products-pages-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //I18nSelect

  public name: string = 'Deivi';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient(): void {
    this.name = 'Sandra';
    this.gender = 'female';
  }

  //I18nPlural

  public customers : string[] = ['Deivi', 'Sandra', 'Angie', 'Andres', 'Yandi', 'Julian', 'Jhonnatan', 'Belen']
  public customersMap = {
    '=0': 'no hay ningún cliente esperando en la fila.',
    '=1': 'tenemos un cliente esperando en la fila.',
    'other': 'tenemos # clientes esperando en la fila.'
  }

  deleteCustomer(): void {
    this.customers.shift();
  }

  //keyValue

  public persons = {
    name: 'Deivi',
    age: 36,
    address: 'Quindío, Colombia'
  }

  //Async

  public counter: Observable<number> = interval(2000);

  public warningCounter : Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'el contador se está ejecutando. ')
    }, 2000);
  } )

}
