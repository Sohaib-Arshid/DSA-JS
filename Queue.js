let queue = [];
let front = -1;
let rear = -1;
const MAX_SIZE = 5;

function enqueue(x) {
    if (rear === MAX_SIZE - 1) {
        console.log("Queue full");
    }
    if (front === -1) front = 0;  
    rear++;
    queue[rear] = x;
    console.log(`${x} added`);
}

function dequeue() {
    if (front === -1 || front > rear) {
        console.log("Queue empty");
    }
    console.log(`${queue[front]} removed`);
    front++;
}

function display() {
    if (front === -1 || front > rear) {
        console.log("Queue empty");
        return;
    }
    let result = "";
    for (let i = front; i <= rear; i++) {
        result += queue[i] + " ";
    }
    console.log("Queue:", result);
}
enqueue(10);
enqueue(10);
enqueue(10);
enqueue(10);
enqueue(10);
dequeue();
dequeue();
dequeue();
dequeue();
