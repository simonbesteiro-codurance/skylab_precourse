//recreate the foreach function
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

forEach([1,2,3], function(element) {
    console.log(element * 10);
}) // 10, 20, 30

//same exercise with map
function map(array, callback) {
    var newArray=[];
    for (var i = 0; i < array.length; i++) {
        newArray[i]= callback(array[i]);
    }
}

map([1,2,3], function callback(element) {
    element *=10;
    return element;    
}); // [10, 20, 30]