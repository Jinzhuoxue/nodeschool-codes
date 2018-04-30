var a = 2;
function foo(){
    var a=3;
    console.log(a);
    
}

foo();

console.log(a);

(()=>{
    var a=4;
    console.log(a);
})();

console.log(a);