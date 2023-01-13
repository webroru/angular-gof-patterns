export abstract class Creator {
    public abstract factoryMethod(): Product;
    
    public action(): string {
        const product = this.factoryMethod();
        return `The Creator class has common logic that works with products: ${product.do()}`
    }
}

export interface Product {
    do(): string;
}

export class Counter implements Product {
    public do(): string {
        return `I'm a counter. I like to increment numbers`;
    }
}

export class Doubler implements Product {
    public do(): string {
        return `I'm a doubler. I like to diuble numbers`;
    }
}

export class CounterCreator extends Creator {
    public factoryMethod(): Product {
        return new Counter();
    }
}

export class DoublerCreator extends Creator {
    public factoryMethod(): Product {
        return new Doubler();
    }
}
