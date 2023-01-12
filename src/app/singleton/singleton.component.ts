import { Component } from '@angular/core';
import { Singleton } from './singleton';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent {
  public singltones: { counter: number }[] = [];

  public addSingleton() {
    this.singltones.push(Singleton.createInstance());
  }

  public incrementCounter() {
    this.singltones[0]!.counter++;
  }
}
