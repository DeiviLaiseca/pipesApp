import { NumberPageComponent } from './../../../products/pages/number-page/number-page.component';
import { BasicPageComponent } from './../../../products/pages/basic-page/basic-page.component';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  menuItems: MenuItem[] = [];

  ngOnInit() {
      this.menuItems = [
        {
          label: 'Pipes de Angular',
          icon: 'pi pi-wrench',
          items: [{
                  label: 'Textos y Fechas',
                  icon: 'pi pi-book',
                  routerLink: '/'
                  },
                  {label: 'Números',
                  icon: 'pi pi-calculator',
                  routerLink: 'number'},
                  {label: 'No Comunes',
                  icon: 'pi pi-discord',
                  routerLink: 'uncommon'}
          ]
        },
        {
          label: 'Pipes Personalizados',
          icon: 'pi pi-palette',
          items: [
                  {label: 'Otros Elementos', icon: 'pi pi-th-large', routerLink: 'custom'}
          ]
        }
    ];
  }

}
