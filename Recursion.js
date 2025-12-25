function fact(x) {
    if (x == 0 || x == 1) {
        return 1
    } else {
        console.log(x * fact(x - 1))
    }
}
let data = 5
console.log(fact(data))
