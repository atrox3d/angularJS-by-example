function async(your_function, arg, callback) {
    setTimeout(function() {
        your_function(arg);
        if (callback) {callback();}
    }, 0);
}


function step1(value1) {

}
var value = 5;
async(function(value){
	console.log(value);
}
, value
, function() {console.log('callback');}
);