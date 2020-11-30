
type Vegetable = "EggPlant" | "Succini" | "Tomato";
type Cheese = "Blue" | "Grougere" | "Muzzarella";

type Parmesana = {
  layers: [Vegetable, Cheese, Vegetable]  
}

const transform = (veg: Vegetable, che:Cheese): Parmesana => {
  return {
    layers: [veg, che, veg] 
  }
}

const argentina: Parmesana = transform("EggPlant", "Muzzarella");
console.log('--------------');
console.log(argentina);
console.log('--------------');
