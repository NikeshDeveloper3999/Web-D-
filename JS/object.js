  
// How do you add a property?
let person = {}; 
person.name = "John";
person["age"] = 22;
console.log( person.name); // Output: John

// How do you update a property?
person.name = 'nikesh'
console.log( person.name); // Output: nikesh

// How do you delete a property?
delete person.name;
console.log( person.name); // Output: undefined


// How do you check whether a property exists?
 person = {
    name: "John"
};

console.log("name" in person); // true
console.log("age" in person);  // false

// method 2 // hasOwnProperty()
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age"));  // false

// Difference between delete and assigning undefined.

// undefine 
let obj = {
    name: "John"
};

obj.name = undefined;

console.log(obj);
// { name: undefined }

console.log("name" in obj);
// true


// delete 
 obj = {
    name: "John"
};

delete obj.name;

console.log(obj);
// {}

console.log("name" in obj);
// false


// Difference between in and hasOwnProperty()
 person = {
    name: "John"
};

console.log("name" in person); // true

console.log(person.hasOwnProperty("name")); // true

// The difference appears with inheritance.

console.log("toString" in person);
// true

console.log(person.hasOwnProperty("toString"));
// false

// Why? Because toString() comes from Object.prototype.

// in	hasOwnProperty()
// in  --- Checks own + inherited properties Returns true for prototype propertis	
// hasownProperty() --- 	Checks only own properties   Ignores prototype properties



// Difference between Object.keys() and Object.values().

 person = {
    name: "John"
};

console.log(Object.keys(person)); // [ 'name' ] RETURN ARRAY OF KEYS
console.log(Object.values(person)); // [ 'John' ] RETURN ARRAY OF VALUES
console.log(Object.entries(person)); // [ [ 'name', 'John' ] ] RETURN ARRAY OF KEY-VALUE PAIRS  



// Difference between Object.entries() and Object.keys().
console.log(Object.entries(person)); // [ [ 'name', 'John' ] ] RETURN ARRAY OF KEY-VALUE PAIRS  


for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}




// Difference between Object.assign() and spread operator.

// Object.assign()
const obj1 = {a: 1};
const obj2 = {b: 2};
result = Object.assign({}, obj1, obj2);
console.log(result);
// { a:1, b:2 }
// Spread Operator
result = {...obj1,...obj2};
console.log(result);
// { a:1, b:2 }

// Both create a shallow copy.

// Main Difference

// Object.assign() modifies the first object if it isn't {}.

let objj = {a: 1};
Object.assign(objj, { b: 2 });

console.log(objj);
// { a:1, b:2 }

// Spread never modifies the original.

const obj3 = {...objj,b: 2};
// What happens when duplicate keys exist?  
// The last value wins.

 obj = {name: "John",name: "Nikesh"};
console.log(obj);
// { name: "Nikesh" }




// Create a student object.
let student =  {name : 'nikhil',age :22 ,grade : 'A'}
// Print all properties.

for(let key in  student)
console.log(  key    , student[key]);

for(let [key , val]   of  Object.entries(student))
console.log(  key , val);

// Access property using dot notation.
console.log(student.name);
// Access property using bracket notation.
console.log(student['name']);

// Update a property.
student.name = ' nikesh parte '
console.log(student.name)
// Add a new property.
student.section = 'A';
console.log(student.section);
// Delete a property.
delete student.age;
console.log(student.age);
// Count total properties
console.log(Object.keys(student).length);

// Check if property exists.

console.log("name" in student);


// Print keys.
for( let key in student){
    console.log(key)
}
// Print values.

for( let key in student){
    console.log(student[key])
}

// Print entries.

// Copy an object.



// Merge two objects.
var ob1  = {a: 1 , c:2 }
var ob2  = {b: 2}

var ob3  = Object.assign({}, ob1, ob2);
console.log(ob3);
var ans = {...ob1,...ob2};
console.log(ans);

// Clone an object using spread. // copy 

let obj4 = {...student};
console.log(obj4);


// Freeze an object.
// Object.freeze() prevents adding, deleting, or updating properties.
let fobj1  = {a: 1, b: 2};  
Object.freeze(fobj1);

// Seal an object.
// Can update existing properties, but cannot add or delete.
let sobj1  = {a: 1, b: 2};
Object.seal(sobj1);

sobj1.a = 10;
sobj1.b = 20;
sobj1.c = 30;

delete sobj1.a;

console.log(sobj1);  // Output: { a: 10, b: 20 }



// Print nested object values.


 student = {
    name: "Nikesh",
    address: {
        city: "Bhopal",
        state: "MP"
    }
};

console.log(student.address.city);
console.log(student.address.state);


// Add nested property.
 student = {
    address: {
        city: "Bhopal"
    }
};

student.address.pincode = 462001;

console.log(student);

// Update nested property.


student.address.city = "Indore";
console.log(student.address.city);
// Delete nested property.

delete student.address.city;
console.log(student.address.city);

// Convert object to array.
console.log(Object.keys(student));  // convert object  keys to array
console.log(Object.values(student));  //  convert object values to array
console.log(Object.entries(student)); //   convert  all object  to array



// Convert array to object.
// Using Object.fromEntries()
const arr = [ ["name", "Nikesh"],["age", 22]];
 obj = Object.fromEntries(arr);
console.log(obj);


// Swap keys and values.
const objS = {
    b: 2,
  a: 1,
  c: 3
};


 let swapobj = Object.fromEntries(Object.entries(objS).map(([key, value])=> [value, key]   ) );

console.log(swapobj)
// Print object in sorted order.
 student = {
    city: "Bhopal",
    name: "Nikesh",
    age: 22,
};

const sorted = Object.fromEntries(Object.entries(student).sort());
console.log(sorted);




// Check empty object.
console.log(Object.keys(student).length === 0)


// Remove null properties.
 student = {
    city: "Bhopal",
    age: 22,
    citt : null,
    name: "Nikesh",
    area : undefined,
};

let newobj =Object.fromEntries( Object.entries(student).filter(( [key , value]) => value !== null ))

console.log( newobj);


// Remove undefined properties.

let Unobj =Object.fromEntries( Object.entries(student).filter(( [key , value]) => value !== undefined ))
console.log( Unobj)



// Find longest property name.

obj = { 
    name: "Nikesh",
    address: "Bhopal",
    qualification: "MSc"
};

const longest = Object.keys(obj).reduce((a, b) =>
    a.length > b.length ? a : b
);

console.log(longest);



// Count numeric values.
 obj = {a: 10,b: "hello",c: 30,d: true,e: 50};
// const count = Object.values(obj).filter(value =>typeof value === "number").length
// console.log(count)

 const count = Object.values(obj).filter(value =>typeof value === "number")
console.log(count.length)



// deep copy 
const user = {
 name: "Nikesh",
    address: {
        city: "Bhopal"
    }
};

const copy = structuredClone(user);

copy.address.city = "Delhi";

console.log(user.address.city); // Bhopal
console.log(copy.address.city); // Delhi


// Implement object flattening.

function flattenObject(obj, parent = "", result = {}) {
    for (const key in obj) {
        const value = obj[key];
        // Create the new key
        const newKey = parent ? `${parent}.${key}` : key;
        // Check if value is a nested object
        if (
            value !== null &&
            typeof value === "object" &&
            !Array.isArray(value)
        ) {
            flattenObject(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }

    return result;
}

 obj = {
    name: "Nikesh",
    age: 22,
    address: {
        city: "Bhopal",
        state: "MP"
    },
    education: {
        college: {
            name: "LNCT",
            year: 2024
        }
    }
};

console.log(flattenObject(obj));



// Build configuration manager.
// Create immutable updates.
// Build cache using object.
// Implement LRU cache.
// Build memoization object.
// Dynamic form generator.
// Build REST response mapper.
// Implement proxy logger.
// Build settings manager.
// Deep merge objects.
// Build object validator.
// Build JSON diff tool.
// Clone circular objects.
// Object comparison utility.
// Nested search engine.
// Dynamic API response parser.
// Permission management system.
// Localization object manager.
// User profile manager.
// Dynamic theme manager.
// Object-based state manager.