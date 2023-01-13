import { Component } from '@angular/core';
import { NewYorkPizzaBuilder, PizzaBuilder } from './builder';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent {
  public logs: string[] = [];
  private newYorkPizzaBuilder!: NewYorkPizzaBuilder;

  public prepareNewYorkStylePizza() {
    this.newYorkPizzaBuilder = new NewYorkPizzaBuilder();
    this.logs.push('The pizza base is prepared');
  }

  public addSausage() {
    if (!this.newYorkPizzaBuilder) {
      this.logs.push('You shoul prepare the pizza first');
    }

    this.newYorkPizzaBuilder.addSausage();
    this.logs.push('Sausage added');
  }

  public addMushrooms() {
    if (!this.newYorkPizzaBuilder) {
      this.logs.push('You shoul prepare the pizza first');
    }

    this.newYorkPizzaBuilder.addMushrooms();
    this.logs.push('Mushrooms added');
  }

  public addExtraCheese() {
    if (!this.newYorkPizzaBuilder) {
      this.logs.push('You shoul prepare the pizza first');
    }

    this.newYorkPizzaBuilder.addExtraCheese();
    this.logs.push('Extra cheese added');
  }

  bake() {
    if (!this.newYorkPizzaBuilder) {
      this.logs.push('You shoul prepare the pizza first');
    }

    const pizza = this.newYorkPizzaBuilder.getPizza();
    this.logs.push(pizza.bake());
  }
}
