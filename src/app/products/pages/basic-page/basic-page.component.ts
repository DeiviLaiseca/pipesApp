import { Component } from '@angular/core';

@Component({
  selector: 'products-pages-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  public nameUpper = 'deivi';
  public nameLower = 'DEIVI JOHAN';
  public nameTitle = 'DeIvI LaiSEca TEjadA';

  public customDate: Date = new Date();
}
