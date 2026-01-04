class Node {
    constructor(data) {
        this.left = null;
        this.value = data;
        this.right = null;
    }
}

class Treverse {
    constructor() {
        this.root = null;
    }

    Insert(data) {
        let newnode = new Node(data);
        if (this.root === null) {
            this.root = newnode;
            return;
        } else {
            let currentNode = this.root;
            while (true) {
                if (data === currentNode.value) {
                    return;
                } else if (data < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newnode;
                        return;
                    } else {
                        currentNode = currentNode.left;
                    }
                }

                else if (data > currentNode.value) {
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
    }

    Search(data){
        if(!this.root){
            return;
        }else{
            let currentNode = this.root
            while(currentNode){
                if(data === currentNode.value){
                    console.log('value found -->' , currentNode.value);
                    return;
                }else if(data < currentNode.value){
                    currentNode = currentNode.left;
                }else{
                    currentNode = currentNode.right;
                }
            }
            return;
        }
    }

    // Treversing 
    // level Order Treversing

    LevelOrderTreversing(){
        if(!this.root){
            return;
        }else{
            let currentNode = [this.root];
            while(currentNode.length > 0){
                const newnode = currentNode.shift();
                console.log(newnode.value);
                if(newnode.left){
                    currentNode.push(newnode.left)
                }
                if(newnode.right){
                    currentNode.push(newnode.right)
                }
            }
        }
    }

    // Pre Order Treversal

    PreOrderTreversal(node = this.root){
        if(node){
            console.log(node.value);
            this.PreOrderTreversal(node.left)
            this.PreOrderTreversal(node.right)
        }
    }

    //inOrder Treversal

    inOrderT(node = this.root){
        if(node){
            this.inOrderT(node.left)
            console.log(node.value);
            this.inOrderT(node.right)
        }
    }

    //Post Order Treversal
    postorder(node = this.root){
        if(node){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }
}

const Node1 = new Treverse()
Node1.Insert(12)
Node1.Insert(10)
Node1.Insert(14)
Node1.Insert(15)
Node1.Insert(9)
Node1.Insert(16)
Node1.Insert(8)
Node1.Search(8)
console.log('level Order Treversal');
Node1.LevelOrderTreversing()
console.log('pre Order Treversal');
Node1.PreOrderTreversal()
console.log('In Order Treversal');
Node1.inOrderT()
console.log('Post Order Treversal');
Node1.postorder()