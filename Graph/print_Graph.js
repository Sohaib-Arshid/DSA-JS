class Graph{
    constructor(){
        this.adjencency = new Map();
    }

    addvertex(data){
        if(!this.adjencency.has(data)){
        this.adjencency.set(data,[]);
    }
    }
    
    addedges(data1 , data2){
        if(!this.adjencency.has(data1)){
            this.adjencency.set(data1,[]);
        }
        if(!this.adjencency.has(data2)){
            this.adjencency.set(data2,[]);
        }
        
        const vertexedge1 = this.adjencency.get(data1);
        vertexedge1.push(data2 , [])

        const vertexedge2 = this.adjencency.get(data2);
        vertexedge2.push(data1 , [])
    }

    print(){
        for(let [key , value ] of this.adjencency){
            console.log(`${key} => ${value}`);
        }
    }
}

let cheakGraph = new Graph();
cheakGraph.addvertex('Ali')
cheakGraph.addvertex('Asad')
cheakGraph.addedges('Asad' , 'Ali')
cheakGraph.addedges('Asad' , 'Noman')
cheakGraph.addedges('sohaib' , 'Ali')
cheakGraph.print()