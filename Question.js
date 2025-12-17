let data = [12, 23, 34, 45, 56, 67, 78, 89, 90]
console.log(data);
let count = 0
for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0) {
        let arr = data[i] * 2;
        count++
        console.log(arr);
    }
}
console.log('all even value count:- ',count);
