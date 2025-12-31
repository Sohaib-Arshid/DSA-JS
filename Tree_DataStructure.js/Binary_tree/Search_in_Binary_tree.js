class Node {
    constructor(data) {
        this.left = null;
        this.value = data;
        this.right = null;
    }
}

class searchInBinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newnode = new Node(data)
        if (this.root === null) {
            this.root = newnode;
            return;
        } else {
            let queue = [this.root];
            while (queue.length > 0) {
                const currentNode = queue.shift();
                if (!currentNode.left) {
                    currentNode.left = newnode;
                    return;
                } else {
                    queue.push(currentNode.left)
                }

                if (!currentNode.right) {
                    currentNode.right = newnode;
                    return;
                } else {
                    queue.push(currentNode.right)
                }
                console.log(currentNode);
            }
        }
    }

    searchInBTree(data) {
        if (!this.root) {
            return;
        } else {
            let queue = [this.root];
            while (queue.length > 0) {
                const currentNode = queue.shift()
                if (currentNode.value === data) {
                    console.log('value found -->', currentNode.value);
                    return true;
                }
                if (currentNode.left) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right) {
                    queue.push(currentNode.right)
                }
            }
            
            console.log('Value not found');
            return false;
        }
    }
}

const Node1 = new searchInBinaryTree()
Node1.add(10)
Node1.add(20)
Node1.add(30)
Node1.add(40)
Node1.add(50)
Node1.searchInBTree(50)