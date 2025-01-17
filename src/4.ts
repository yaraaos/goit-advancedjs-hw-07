class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  class Person {
    constructor(private key: Key) {}
  
    getKey(): Key {
      return this.key;
    }
  }
  abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];
  
    constructor(ourKey: Key) {
      this.door = false;
      this.key = ourKey;
      this.tenants = [];
    }
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log(`${person.getKey().getSignature()} has entered the house.`);
      } else {
        console.log("The door is closed. You cannot enter.");
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    openDoor(key: Key) {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("The door is now open.");
      } else {
        console.log("The key does not match. The door remains closed.");
      }
    }
  }
  
  const key = new Key();
  
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  
  house.comeIn(person);
  
  export {};