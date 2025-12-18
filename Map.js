// map and object are smiler but some major difference like in object key are only string and in map key are different datatype 

let data = new Map([['name' , 'sohaib'],
['age' , 20],
['roll' , 230215],
[true , 'Hello'],
[12 , 13]
]);

for(let x of data ){
    console.log(x);
}
data.set('contact' , '123456')
console.log(data.size);
let dot = data.has(12);
console.log(dot);
console.log(data);

