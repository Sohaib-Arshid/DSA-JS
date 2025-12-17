let mony = 100;
let apple = 0;

function buyapple(x){
    // console.log(x);
    if(x>0){
        console.log('i have ',x ,' RS',apple , 'apple' );
        buymore(x)
    }else{
        console.log('i have no more mony ' , apple);
        
    }
}

function buymore(x) {
    apple++;
    buyapple(x-10)
    // console.log('buy more' , x);
}

buyapple(mony)

function name(params) {
    if (params>0) {
        name(params-1)        
    }
    console.log(params);
    
}

let data = 5
name(data)