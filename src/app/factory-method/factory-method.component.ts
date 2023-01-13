import { Component } from '@angular/core';
import { CounterCreator, DoublerCreator, Creator } from './factory-method';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent {
  public logs: string[] = [];

  public doublerAction() {
    const creator = new DoublerCreator()
    this.logs.push(this.action(creator));
  }
  
  public counterAction() {
    const creator = new CounterCreator()
    this.logs.push(this.action(creator));
  }

  private action(creator: Creator): string {
    return creator.action();
  }
}
