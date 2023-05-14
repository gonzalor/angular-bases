import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroeNames: string[] = ['ironman', 'spiderman', 'hulk', 'thor', 'capitan america'];

  public deletedHero?: string;

  deleteLastHeroe(): void {
    this.deletedHero = this.heroeNames.pop();
  }


}
