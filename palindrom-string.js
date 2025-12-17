function palindrom(data) {
    let start = 0;
    let end = data.length - 1;
    let result = true;

    while (end > start) {
        if(data[start]!=data[end]){
            result = false;
            console.log('its not palindrom');
            
        }else{
            console.log(data , ' its palindrom'); 
        }
        start++;
        end--;
    }
    return result;
}
let str = "level"
console.log(palindrom(str));