class Dummy {
  printMe() {
    console.log("ran");
  }
}
interface Thing extends Dummy {
  doSomething(): void;
}
export default class ThreeSum extends Dummy implements Thing {
  public threeSum<Type>(nums: Type[]): Type[][] {
    // let m = new Map();
    // m.set("a", 1);
    // m.set("b", 2);
    // console.log(m.size);
    this.doSomething();
    return [[nums[0]]];
  }
  doSomething() {
    return this.printMe();
  }
}
