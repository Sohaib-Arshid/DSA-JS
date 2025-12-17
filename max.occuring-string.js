let str = 'hello';
let obj = {};
let maxvalue = '';

for (let i = 0; i < str.length; i++) {
    let key = str[i]
    obj[key] = (obj[key] || 0) + 1;

    if (maxvalue === "" || obj[key] > obj[maxvalue]) {
        maxvalue = key
    }
}
console.log(maxvalue);
