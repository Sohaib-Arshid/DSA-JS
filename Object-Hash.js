// in Object we store the like key and value pair 
// example  object = {name : 'sohaib'} ; 
// in object we store diiferent datatype data like int, string, bolean, etc ;
// and store many data  
// difference between array and object:
// in object we store the data like key value pair and in array we store simple data 

let data = {
    name : 'sohaib',
    age : 20,
    email : 'sohaibali1234@gmail.com',
    getname : function name() {
        return this.name
    }
}
data.contact = 9234444444569;
delete data.name;
console.log(data);

for(i of data){
    console.log(data[i]);
}

console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));
