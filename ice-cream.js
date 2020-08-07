const iceCream = [
    {
     Flavor: "Vanilla",
     Price: 3,
     Supplier:"Meijer",
 },
 {
     Flavor: "Chocolate",
     Price: 3,
     Supplier: "Moomer's"
 },
 {
     Flavor: "Superman",
     Price: 4,
     Supplier: "Meijer"
 }, ];

 const toppings = [
         {
     Name: "Rainbow Sprinkles",
     Price: 0.5,
     Supplier: "Jimmy's of Pennsylvania"
         },
    { 
     Name: "Chocolate Chips",
     Price: 0.5,
     Supplier: "Jimmy's of Pennsylvania"
  },
  {  
     Name: "Chocolate Syrup",
     Price: 0.5,
     Supplier: "Jimmy's of Pennsylvania"}
     ];
 

class IceCreamShop {
    constructor(iceCream) {
        this.iceCream = iceCream
        this.toppings = toppings
    };
    
    

addInventory = (Flavor, Price, Supplier) => {
    this.iceCream.push( {Flavor, Price, Supplier})
}


getInventory = ()  => {console.log(this.iceCream , this.toppings);
};
}
const leannesIceCream = new IceCreamShop(iceCream)
leannesIceCream.getInventory();

leannesIceCream.addInventory(...iceCream)