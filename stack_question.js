let arr = [];
let size = arr.length;
let top = 9;

function push(x) {
    if (size === top) {
        console.log('stack overflow');
    } else {
        arr[size] = x;
        size += 1;
    }
}

function pop() {
    if (size > 0) {
        size -= 1;
        arr.length = size;
    } else {
        console.log('stack is already empty');
    }
}
push(23);
push(24);
push(25);
push(26);
pop();

function display() {
    if (size === 0) {
        console.log("stack is empty");
    } else {
        for (let i = size - 1; i >= 0; i--) {
            console.log(arr[i]);
        }
        console.log("Top element:", arr[size - 1]);
    }
}

display();
