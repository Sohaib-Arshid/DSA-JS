class C_queue {
    constructor(x) {
        this.maxsize = x;
        this.currentsize = 0
        this.item = new Array(x)
        this.rear = -1;
        this.front = -1;
    }

    enqueue(y) {
        if ((this.currentsize != this.maxsize)) {
            if(this.rear == this.maxsize-1){
                this.rear = 0;
            }else{
                this.rear++
            }
            this.item[this.rear] = y;
            this.currentsize++;
            if(this.front == -  1){
                this.front = this.rear
            }
        }else{
            console.log("Queue is full");
        }
    }

    dequeue() {
        if(this.currentsize!=0){
            this.item[this.front]=null;
            if(this.front == this.maxsize-1){
                this.front=0;
            }else{
                this.front++;
            }
            this.currentsize--;
        }else{
            this.front=-1;
            this.rear=-1;
            console.log('queue is empty');
        }
    }

    show() {
        console.log(this.item);
    }
}

s1 = new C_queue(5)
s1.enqueue(10)
s1.enqueue(20)
s1.enqueue(30)
s1.enqueue(40)
s1.enqueue(40)
s1.dequeue();
s1.dequeue();
s1.dequeue();


s1.show()