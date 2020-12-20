var sayAge = function () { return 18; };
var myAge = function (fn) {
    return sayAge();
};
console.log(myAge(sayAge));
