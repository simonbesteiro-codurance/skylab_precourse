function factorial(x) {
    var buffer = 1;
    for (var i = x; i > 0; i--) {
        buffer *= i;
    }
    console.log(buffer);
}
factorial(5) //120
