class Node {
    constructor(data) {
        this.value = data;
        this.child = [];
    }
}

class NRAYTree {
    constructor() {
        this.root = null;
    }

    insert(parentvalue, data) {
        let newnode = new Node(data)
        if (this.root === null) {
            this.root = newnode;
            return;
        }

        const parent = this.find(this.root , parentvalue);
        if (!parent) {
            console.log('could not found parent');
            return;
        }

        parent.child.push(newnode);
        console.log(this.root);

    }
    find(node, value) {
        if (!node) {
            return null;
        } else if (node.value === value) {
            return node;
        }

        for (let children of node.child) {
            const result = this.find(children, value)
            if (result) {
                return result;
            }
        }

        return;
    }
}

const Narytree = new NRAYTree()
Narytree.insert(null , 'A');
Narytree.insert('A' , 'B');
Narytree.insert('B' , 'C');
Narytree.insert('C' , 'D');
