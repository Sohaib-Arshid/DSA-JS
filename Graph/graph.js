class Graph{
    constructor(){
        this.adjancency = new Map();
    }

    addvertex(vertex){
        if(!this.adjancency.has(vertex)){
            this.adjancency.set(vertex , [])
        }
    }
    
    addedges(vertex1 , vertex2){
        if(!this.adjancency.has(vertex1)){
            this.adjancency.set(vertex1 , [])
        }
        if(!this.adjancency.has(vertex2)){
            this.adjancency.set(vertex2 , [])
        }

        const vertexedge1 = this.adjancency.get(vertex1);
        vertexedge1.push(vertex2)

        const vertexedge2 = this.adjancency.get(vertex2);
        vertexedge2.push(vertex1)
    }
    
    print(){
        console.log(this.adjancency);
    }
}

let cheakGraph = new Graph();
cheakGraph.addvertex('Ali')
cheakGraph.addvertex('Asad')
cheakGraph.addedges('Asad' , 'Ali')
cheakGraph.addedges('Asad' , 'Noman')
cheakGraph.addedges('sohaib' , 'Ali')
cheakGraph.print()