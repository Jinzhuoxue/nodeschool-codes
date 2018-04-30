function f1(str){
    eval(str);
    console.log(a);
}

function f2(str){
    "use strict";
    eval(str);
    console.log(b);
}

console.log(a);
f1("var a=2");
console.log(a);
f1("a=2");
console.log(a);

