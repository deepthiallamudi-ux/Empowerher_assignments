//question 11//
const multiply=(a=1,b=1)=>a*b

//question 12//
const sqndcub=(n)=>({
    sq:n*n,
    cube:n^3
});
 console.log(sqndcub(7))

//question 13//
const people = [ { name: "Alice", 
    address: { city: "New York", 
        street: { name: "Broadway", 
            number: 123 } } }, 
    { name: "Bob", 
        address: { city: "Los Angeles", 
            street: { name: "Sunset Boulevard", 
                number: 456 } } } ]

const result = people.map(({ name, address: { city, street: { name: streetName } } }) => 
    `${name} lives in ${city} on ${streetName}`);
console.log(result);
