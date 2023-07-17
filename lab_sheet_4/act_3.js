class Dog {
    constructor(bread, age, color) {
        this.bread = bread;
        this.age = age;
        this.color = color;
    }
    Eat() {
        return this.bread + " is Eating";
    }
    Sleep() {
        return this.bread + " is Sleeping";

    }
    Sit() {
        return this.bread + " is Sitting";

    }
    Run() {
        return this.bread + " is Running";

    }
} 

const dog_1 = new Dog("Pug",3,"Black");
const dog_2 = new Dog("Boxer",2,"White");
const dog_3 = new Dog("Poodle",1,"Brown");

console.log( dog_1.Eat() + ". It's color is "+dog_1.color);
console.log( dog_2.Sleep() + ". It's age is "+dog_2.age + " Years");
console.log( dog_3.Run() + ". It's color is "+dog_3.color);
