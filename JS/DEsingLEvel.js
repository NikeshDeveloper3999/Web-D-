// Design Patter  ✅


// first pattern    -- MOdule Pattern 

/* Module me Pattern ek design pattern h jisme hum apna code ek self executing function ( IIFE ) ke andar likhte HAIN  TAKI variables aur functions PRivate rahen 
  -- > iske andar se hum sirf wahi cheezein return karte hain jo bhar use karni hain
 -> is pattern ka main fayda hai data hiding aur encapsulation aur clean structure taaki code secure reusable aur manageble ban sakte  */

 // note  -- module pattern  me jo bi banege wo IIFe function  ke ander banege aur return karenge Object ❗
// IIFE FUNCtion ( function (){ }) () ;

let Bank = (function () {
    let balance = 1000;  // private 

    function checkBalance() {
        return balance;
    }

    function deposit(amount) {
        balance += amount;
    }

    function withdraw(amount) {
        if (amount > balance) {
            throw new Error("Insufficient funds");
        }
        balance -= amount;
    }    
    return {
        checkBalance: checkBalance,
        deposit: deposit,
        withdraw: withdraw
    }
})();

console.log(Bank.checkBalance())
Bank.deposit(500);
console.log(Bank.checkBalance())



// Reveling Module pattern

/* Reveling Module pattern me hum sirf object ko return karte waqt  object ki key ka naam kuch bhi rakh sakhte he baki pura IIFE function sane rehta he    */
/* exp   
 return { 
    check: checkBalance,
    dep: deposit,
    with: withdraw
 }
 Bank.check()

 key se hum IIFE function ko access karte he 
 */




// Factory Function pattern

/* Factory Function pattern me hum ek function banate hain jo object create  karta hain (  factory  = object create karne ki machine)  */
// factory function pattern ek aisa design pattern hai jisme hum ek simple function likhte hai jo naye object banakar return karta hai bina class ya new keyword use kiye 

// factory function pattern ka main idea hai -> object creation ko ek function ke through control karna 
// har bar  jab tum factory function ko call karte hain to tumne naye object banane ka control milta hain  JISMe  apne methods ( agar chaho to  ) private  data ho    sakta hai 

// yeah  pattern specially useful hai jab tumhe ek hi type ke bohot sare objects chaiye jaise users products tasks etc . 





function createUser(name, age) {

    return {
        name,
        age,
        greet() {   console.log(`Hello ${this.name}`);}
    };

}

const user1 = createUser("Nikesh", 22);
const user2 = createUser("Rahul", 25);

user1.greet();
user2.greet();











// Observer Pattern
// The Observer Pattern is a design pattern where one object (Subject) notifies multiple other objects (Observers) whenever its state changes.

class YouTubeChannel {

    constructor( subscribers) {
        this.subscribers = [];
    }

    Subscribe(user) {
        this.subscribers.push(user);
        user.update(`${user.name}  , You have subscribe the channel.`)
    }
    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== user);
         user.update(`${user.name}  , You have un-subscribed the channel.`)
    }

    notify(msg) {
        this.subscribers.forEach(subscriber => subscriber.update(msg));
    }
}

class User {
      constructor(name){
        this.name = name ;
    }

    update(data) {
        console.log(`${this.name} , ${data}`);
    }
}



let Iconic = new YouTubeChannel();
let User1 = new User("Nikesh");

Iconic.Subscribe(User1);
Iconic.notify(' we are upload new video ')

