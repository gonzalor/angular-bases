import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  reset() {
    this.name = 'ironman';
    this.age = 45;
  }

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroe(): void{
    this.name = 'spiderman';

  }

  changeAge(): void{
    this.age = 30;
  }


}
