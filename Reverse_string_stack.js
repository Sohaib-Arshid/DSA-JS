let arr = [];
let size = arr.length;

function push(x) {
    arr[size] = x;
    size += 1;
}

function pop() {
    lastitem = arr[arr.length - 1]
    size -= 1;
    arr.length = size;
    return lastitem;
}

function reversestr(y) {
    for (let i = 0; i < y.length; i++) {
        push(y[i]);
    }
    for (let i = 0; i < y.length; i++) {
        y[i]=pop()
    }
}

let str = 'Khan';
str = str.split("")
reversestr(str);
console.log(str.join(''));
