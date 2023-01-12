export class Singleton {
    private static instance: Singleton;
    public counter: number = 0;

    private constructor() {
    }

    public static createInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
