class Singleton {
    private static singleton: Singleton;

    private constructor() { }

    static getSingleton(): Singleton {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }

        return Singleton.singleton;
    }

}

let singleton1 = Singleton.getSingleton();
let singleton2 = Singleton.getSingleton();

console.log(singleton1 === singleton2);
