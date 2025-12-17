let data = [12, 23, 34, 45, 56]
let temp;
function reverse(data, start, end) {
        
    console.log(data);
    if (start <= end) {
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        reverse(data, start + 1, end - 1)
    }
}
reverse(data, 0, data.length - 1)