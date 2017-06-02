(function() {

  //This getRandom function will return random number between the passed numbers
  //This has been used in Travelers to get a random value for Traveler Amount
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //This will give a random number between 0 and 1
  function RandNumFunction() {
    return Math.random();
  }

  //This is just a template or class for Traveler
  //OtherWords when a traveler is created its actually called the object
  function Traveler(Amount, Name, IsHealthy) {
    this.Amt = getRandom(5, 10);
    this.Name = Name;
    this.Healthy = true;
  }

  //This is just a template or class for Wagon
  function Wagon(Capacity, Passengers) {
    this.Capacity = capacity;
    this.Passengers = [];
  }

  //This function is to instantiate a new traveler if I just pass in the name
  //with a random Amt and default Health values
  function makeTraveler(name) {
    return new Traveler(this.Amt, name, this.Healthy);
  }

  //This function is to define the wagon capacity with an empty array of passengers
  function makeWagon(capacity) {
    return new Wagon(capacity, this.passengers);
  }

  //This function will add the amount to traveler randomly
  function hunt(traveler) {
    if (RandNumFunction() > 0.5) {
      traveler.Amt = traveler.Amt + 100;
    }
    else {
      console.log("not added");
    }
    return traveler.Amt;
  }

  //This function will return if the traveler is healthy or not based on his amount value
  function eat(traveler) {
    if (traveler.Amt > 20) {
      traveler.Amt = traveler.Amt - 20;
    }
    else {
      traveler.Healthy = false;
    }
      return traveler.Amt;
      return traveler.Healthy;
  }

  // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  console.log(wagon);
  // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler1 = makeTraveler("Henrietta");
  console.log(traveler1);
  // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');
  console.log(traveler2);
  //Created more travelers to check the capacity of wagon
  let traveler3 = makeTraveler('Hamsu');
  let traveler4 = makeTraveler('Nunna');
  let traveler5 = makeTraveler('Rohit');
  let traveler6 = makeTraveler('Nemani');

  hunt(traveler1); // maybe get more food
  console.log(traveler1);
  eat(traveler1);
  console.log(traveler1);
  eat(traveler2); // juan is hungry
  console.log(traveler2);
  // join(wagon, traveler);

function join(wagon,traveler){
  // length start with 0. so, less than only needed to make sure it doesn't exceed capacity
    if (wagon.passengers.length < wagon.capacity)
    {
      wagon.passengers[wagon.passengers.length] = traveler;
      console.log("passengers count " + wagon.passengers.length);
    }
    else {
      console.log("Sorry capacity exceeded");
    }
}

join(wagon, traveler1);
join(wagon, traveler2);
join(wagon, traveler3);
join(wagon, traveler4);
join(wagon, traveler5);
join(wagon, traveler6);

 // print true if someone is sick, false otherwise

function quarantine(wagon)
{
for(let i = 0; i < wagon.passengers.length; i++)
{
  if (wagon.passengers[i].Healthy) {
    console.log(wagon.passengers[i].Name + " is healthy - false");
  }
  else {
    console.log(wagon.passengers[i].Name + " is sick - true");
  }
}
}

quarantine(wagon);

  // console.log(food(wagon)); // print juan's food + henrietta's food

function food(wagon) {
let totalAmount = 0;
for (var i = 0; i < wagon.passengers.length; i++) {
  totalAmount = totalAmount + wagon.passengers[i].Amt;
}
return totalAmount;
}

console.log(food(wagon));

})();
