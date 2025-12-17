let arr = [];
let size = arr.length;
let max = 7;

function push(x) {
    if(size > max){
        console.log('stack is full')
        return 0;
    }
    arr[size]=x;
    size+=1
}

function pop(){
    if(size>0){
        size-=1;
        arr.length = size;
    }else{
        console.log('stack is already empty');
        co
    }
}

push(23);
push(23)
push(24);
push(25);
push(25);
push(25);
pop()
pop()

console.log(arr);



// let arr = [];
// let valsize = arr.length

// function push(x){
//     arr[valsize]=x;
//     valsize+=1
// }

// function pop(){
//     valsize-=1;
//     arr.length = valsize
//     return valsize;
// }

// for(let i = 0 ; i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         console.log(arr)
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j]=arr[j+1]
//             arr[j+1]=arr[j]
//             console.log(arr[0]);
//         }
//     }
// }
// push(12)
// pop()

