class MaxHeap {
    constructor() {
        this.heap = []
    }

    getperentindex(i) {
        return Math.floor((i - 1) / 2)
    }

    getleftindex(i) {
        return (2 * i) + 1;
    }

    getrightindex(i) {
        return (2 * i) + 2;
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;

        // destructring assigment 
        // this.heap[i1] , this.heap[i2] = this.heap[i2] , this.heap[i1]  
    }

    insert(data) {
        this.heap.push(data);
        this.bubbleup(this.heap.length - 1);
    }

    bubbleup(i) {
        let parentindex = this.getperentindex(i);
        while (i > 0 && this.heap[i] > this.heap[parentindex]) {
            this.swap(i, parentindex);
            i = parentindex;
            parentindex = this.getperentindex(i)
        }
    }
    print() {
        console.log(this.heap);
    }

    remove() {
        if (this.heap.length === 0) {
            return;
        } else if (this.heap.length === 1) {
            return this.heap.pop()
        }

        let firstvalue = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.heapfydown(0)
        return firstvalue;
    }

    heapfydown(i){
        let largest = i;
        let leftchild = this.getleftindex(i)
        let rightchild = this.getrightindex(i)

        if(leftchild < this.heap.length && this.heap[leftchild] > this.heap[largest]){
            largest = leftchild;
        }
        if(rightchild< this.heap.length && this.heap[rightchild] > this.heap[largest]){
            largest = rightchild;
        }

        if (largest != i) {
            this.swap(largest , i)
            this.heapfydown(largest)
        }
    }
}

const maxheap = new MaxHeap();
maxheap.insert(12);
maxheap.insert(13);
maxheap.insert(14);
maxheap.insert(15);
maxheap.insert(16);
maxheap.insert(17);
maxheap.insert(18);
maxheap.print();