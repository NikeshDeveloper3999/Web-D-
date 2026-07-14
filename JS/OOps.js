

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
class CreateBox {  // class declaration

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
