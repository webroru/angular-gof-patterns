export interface PizzaBuilder {
    addExtraCheese(): void;
    addMushrooms(): void;
    addSausage(): void;
}

export class NewYorkPizza {
    public ingridients: string[] = [];

    constructor() {
        this.ingridients.push('thin dought');
        this.ingridients.push('cheese parmesan');
    }

    bake(): string {
        return `New York style pizza with ${this.ingridients.join(', ')} is ready!`
    }
}

export class NewYorkPizzaBuilder implements PizzaBuilder {
    constructor(private pizza: NewYorkPizza = new NewYorkPizza) {}

    public reset(): void {
        this.pizza = new NewYorkPizza();
    }

    public addExtraCheese(): void {
        this.pizza.ingridients.push('extra parmezan cheese');
    }

    public addMushrooms(): void {
        this.pizza.ingridients.push('champignons');
    }

    public addSausage(): void {
        this.pizza.ingridients.push('salami');
    }

    public getPizza(): NewYorkPizza {
        const pizza = this.pizza;
        this.reset()
        return pizza;
    }
}
