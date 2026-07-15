

/* constructor function  esa function hote he jo object banane ke liye use hota he jo this keyword use karta he    
   constructor function ko call karte hue new keyword use karte hain taaki new object ban jaye OR CONSTRUCTOR FUNCTION  KA fIRST LETTER Captial hota ha  exp - CreatePencil
*/

function CreatePencil(color, length, name, company, price) {
    this.color = color;
    this.length = length;
    this.name = name;
    this.company = company;
    this.price = price;

    this.write = function(text) {
        console.log(this.name + " is writing" + text);
        

    }
}


let pencil1 = new CreatePencil("red", "10cm", "pencil1", "Apsara", 10   );
let pencil2 = new CreatePencil("blue", "15cm", "pencil2", "Dooms", 20);
let pencil3 = new CreatePencil("green", "20cm", "pencil3", "Camlin", 30);

pencil1.write("Hello World");


// Prototype 📍 
// A prototype is an object from which another object can inherit properties and methods.
// agar tumhara constructor function koi field apne prototype me add  kar le to us constructor function se banane  wale sabhi object New Intance Yaani ki Objects ke paas wo field AutoMatically Chali  Jaati hai 


function CreateBox  (color, length, name, price) {
    this.color = color;
    this.length = length;
    this.name = name;
    this.price = price;

    this.Type = function(text) {
        console.log(this.name + " is writing" + text);
        

    }
}

CreateBox.prototype.company = "Microsoft";  // prototype create of constructor function  and inlize variable company name

let box1 = new CreateBox("red", "10cm", "box1", 10);
let box2 = new CreateBox("blue", "15cm", "box2",  20);
console.log(box1.company);
console.log(box2.company);




// class  
class Createclass {  // class declaration

    constructor(color, length, name, price) { // constructor declaration
        this.color = color;
        this.length = length;
        this.name = name;
        this.price = price;
    }

    Type(text) {  // method declaration
        console.log(this.name + " is writing" + text);
    }
} 


let class1 = new Createclass("red", "10cm", "box1", 10);

class1.Type('class is a blueprint')


// extends   // extends → One class inherits another class.
// super → Calls the parent class's constructor or methods.


class User { 
    constructor(CITY, name, age) {
     this.name = name;  
     this.CITY = CITY;
     this.role= 'user'
     this.age = age;
    }

    display(text) {
        console.log(this.name + " is writing" + text);
        }
}



class Admin extends User { 
constructor(name, age , CITY){
    super(name, age, CITY ); // super → Calls the parent class's constructor or methods. exp 
    this.role = 'admin';
}
AdminData(text) {console.log(this.name + " is writing" + text);}
}

let user1 = new User("red", "arif", 20);
user1.display('My details are as follows');

let admin1 = new Admin("arif", 20, "user");
admin1.AdminData('My details are as follows');



// JavaScript is prototype-based, not class-based.
// ES6 class syntax gives the appearance of classical inheritance, but internally it still uses prototypes.


// prototype inheritance  vs classical inheritance

// classical inheritance  -- classes banana and unhe extend krdena 
// matlab -- parent class  ki propertise ko child inherite karta ha 

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {

    constructor(name) {
        super(name);
    }

    bark() {
        console.log("Woof!");
    }
}

const dog = new Dog("Tom");

dog.eat();
dog.bark();



// prototype inheritance    inheritate -> object -> object
// In prototype inheritance, objects inherit directly from other objects through the prototype chain.


let coffee = {  // object creation
    name: "Coffee",
    price: 20,
    drink  : function() {
        console.log(`${this.name} is drinking`);
    }
}


let sugarcoffee = Object.create(coffee); // object creation using prototype inheritance
console.log(sugarcoffee);       // sugarcoffeee ke prototype ko coffee object se connect kar diya ha tu sugarcoffee ke prototype object me coffee object a jayega 
sugarcoffee.drink();


// example 2 -- 
let a = { val : 10 }
let b = Object.create(a);   // isko hum shared copy bhi bol sakte hain
console.log(b.val);
 
// in easy way --  matlab ek object ha app chaaho to uski saari props / method ko  inherit ka dete ho doose object mein



