import { Component } from '@angular/core';

@Component({
  selector: 'products-pages-number-page',
  templateUrl: './number-page.component.html',
  styleUrls: ['./number-page.component.css']
})
export class NumberPageComponent {

  public numberPipe: number = 2756789.4563;
  public percentPipe: number = 0.5632;

}
