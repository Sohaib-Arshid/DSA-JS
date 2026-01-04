class Node {
    constructor(data) {
        this.left = null;
        this.value = data;
        this.right = null;
    }
}

class Binarysearchtree {
    constructor() {
        this.root = null
    }

    Insert(data) {
        let newnode = new Node(data)
        if (this.root === null) {
            this.root = newnode
            return;
        }
        let currentNode = this.root;

        while (true) {
            if (data === currentNode.value) {
                return;
            }
            else if (data < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newnode;
                    return;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (data > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newnode;
                    return;
                } else {
                    currentNode = currentNode.right;
                }
            }
            console.log(this.root);
        }
    }

    Search(data) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (data === currentNode.value) {
                console.log('value found --> ', currentNode.value);
                return true;
            } else if (data < currentNode.value) {
                currentNode = currentNode.left;
            }else{
                currentNode = currentNode.right;
            }
        }
        return false;
    }
}

const Node1 = new Binarysearchtree()
Node1.Insert(12)
Node1.Insert(10)
Node1.Insert(14)
Node1.Insert(15)
Node1.Insert(16)
Node1.Insert(7)
Node1.Insert(11)
Node1.Search(14)

