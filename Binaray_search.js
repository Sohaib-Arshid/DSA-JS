
// recursive aproch 
let arr = [12, 23, 45, 56, 67, 78, 89, 90];
let low = 0;
let high = arr.length - 1;

function cheak(arr, low, high, key) {
    if (low > high) {
        return false;
    }
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == key) {
        console.log('element found ', key);
        return true;
    } else if (arr[mid] < key) {
        console.log('mid to ute ute ', key);
        return cheak(arr, mid + 1, high, key)

    } else {
        console.log('mid to thale thale ', key,);
        return cheak(arr, low, mid - 1, key)
    }
}

cheak(arr, low, high, 12);
