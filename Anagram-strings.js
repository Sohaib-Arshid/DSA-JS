function cheakanagram(x, y) {
    if (x.length !== y.length) {
        console.log('strings are not equal');
        return false;
    } else {
        let obj = {};
        for (i of x) {
            obj[i] = (obj[i] || 0) + 1;
        }

        console.log(obj);

        for (j of y) {
            if(!obj[j]){
                return false;
            }
            obj[j]--
        }
    }
    return true
}

console.log(cheakanagram("sohaiib" , "sohiiba"));