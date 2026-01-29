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

    insert(parentvalue, value) {
        let newnode = new Node(value);
        if (this.root === null) {
            this.root = newnode;
            return;
        }

        let parent = this.find(this.root, parentvalue);
        if (!parent) {
            console.log('value not exist');
            return;
        }

        parent.child.push(newnode)
        console.log(this.root);
    }

    find(node, value) {
        if (!node) {
            return null;
        }
        if (node.value === value) {
            return node;
        }

        for (let children of node.child) {
            let result = this.find(children, value)
            if (result) {
                return result
            }
        }
    }

    BFS(){
        if(!this.root){
            return;
        }

        const queue = [this.root]

        while(queue.length > 0){
            const current = queue.shift();
            console.log(current.value);
            queue.push(...current.child)
        }
    }
}

const Narytree = new NRAYTree()
Narytree.insert(null , 'A');
Narytree.insert('A' , 'B');
Narytree.insert('B' , 'C');
Narytree.insert('C' , 'D');
Narytree.BFS();

