let data = [12, 34, 54, 75, 3, 65, 43, 1];
function selectionsort(data) {
    console.log(data)
    let capturedata;
    for (let i = 0; i < data.length; i++) {
        capturedata = i;
        for(let j = i+1; j< data.length; j++){
            if(data[j] < data[capturedata] ){
                capturedata = j;
            }
        } 
        let temp = data[capturedata];
        data[capturedata] = data[i];
        data[i] = temp;
    }
}
selectionsort(data);
console.log(data);

let ddata = [12, 7, 75,9];
function selectionsort(ddata) {
    console.log(ddata)
    let capturedata;
    for (let i = 0; i < ddata.length; i++) {
        capturedata = i;
        for(let j = i+1; j< ddata.length; j++){
            if(ddata[j] > ddata[capturedata] ){
                capturedata = j;
            }
        } 
        let temp = ddata[capturedata];
        ddata[capturedata] = ddata[i];
        ddata[i] = temp;
    }
}
selectionsort(data);
console.log(data);

