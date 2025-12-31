class Node {
    constructor(data) {
        this.left = null;
        this.value = data;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newnode = new Node(data);
        if (this.root === null) {
            this.root = newnode;
            return;
        }

        let queue = [this.root]
        while(queue.length > 0){
            const currentNode = queue.shift()
            if(!currentNode.left){
                currentNode.left = newnode;
                console.log(this.root);
                return;
            }else{
                queue.push(currentNode.left)
            }
         
            if(!currentNode.right){
                currentNode.right = newnode;
                console.log(this.root);
                return;
            }else{
                queue.push(currentNode.right)
            }
        }
    }
}

const Node1 = new BinaryTree()
Node1.add(10)
Node1.add(20)
Node1.add(30)
Node1.add(40)
Node1.add(50)
