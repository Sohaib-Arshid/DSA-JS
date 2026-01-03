class Node {
    constructor(data) {
        this.left = null;
        this.value = data;
        this.right = null;
    }
}

class Trversing {
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

    // level order Treversal

    levelOrderTreversal() {
        if (!this.root) {
            return;
        } else {
            let queue = [this.root]
            console.log('level order treversal');
            while (queue.length > 0) {
                const currentNode = queue.shift()
                console.log(currentNode.value);
                if (currentNode.left) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right) {
                    queue.push(currentNode.right)
                }
            }
        }
    }

    // pre order Treversal

    PreOrderTreversal(node = this.root) {
        if (node) {
            console.log(node.value);
            this.PreOrderTreversal(node.left);
            this.PreOrderTreversal(node.right);
        }
    }

    //in order treversal
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left)
            console.log(node.value);
            this.inOrder(node.right)
        }
    }

    postorder(node = this.root){
        if(node){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }
}

const Node1 = new Trversing()
Node1.add(10)
Node1.add(20)
Node1.add(30)
Node1.add(40)
Node1.add(50)
Node1.searchInBTree(50);
Node1.levelOrderTreversal();
console.log('pre order treversal');
Node1.PreOrderTreversal();
console.log('in order treversal');
Node1.inOrder();
console.log('preorder treversal');
Node1.postorder();
