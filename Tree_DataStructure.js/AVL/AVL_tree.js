class Node {
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
        this.height = 1;
    }
}

class AVL {
    constructor() {
        this.root = null;
    }

    height(node) {
        if (!node) {
            return 0;
        }
        return node.height;
    }

    balance(node) {
        const balancefactor = this.height(node.left) - this.height(node.right);
        return balancefactor;
    }

    Add(value) {
        this.root = this.Insert(this.root, value);
        console.log(this.root);
    }

    Insert(node, value) {
        if (!node) {
            return new Node(value)
        }

        if (value < node.value) {
            node.left = this.Insert(node.left, value)
        } else if (value > node.value) {
            node.right = this.Insert(node.right, value)
        } else {
            return node;
        }

        node.height = 1 + Math.max(this.height(node.left), this.height(node.right))
        const balancefactor = this.balance(node)

        if (balancefactor < -1 && value > node.right.value) {
            return this.Rotateleft(node);
        } else if (balancefactor > 1 && value < node.left.value) {
            return this.RotateRight(node);
        } else if (balancefactor > 1 && value > node.left.value) {
            node.left = this.Rotateleft(node.left);
            return this.RotateRight(node)
        } else if (balancefactor < -1 && value < node.right.value) {
            node.right = this.RotateRight(node.right);
            return this.Rotateleft(node);
        }
        return node;
    }

    Rotateleft(node) {
        const newnode = node.right;
        const temp = newnode.left;
        newnode.left = node;

        node.right = temp;
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        newnode.height = 1 + Math.max(this.height(newnode.left), this.height(newnode.right));

        return newnode;
    }

    RotateRight(node) {
        const newnode = node.left;
        const temp = newnode.right;
        newnode.right = node;

        node.left = temp;
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        newnode.height = 1 + Math.max(this.height(newnode.left), this.height(newnode.right));

        return newnode;
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

const Node1 = new AVL()
Node1.Add(10);
Node1.Add(12);
Node1.Add(13);
Node1.Add(15);
Node1.Add(16);
Node1.Add(18);
Node1.Add(19);
Node1.Search(19);
