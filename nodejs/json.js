var obj ={
    prop1:"val1",
    prop2:"val2",
    arr:["1","2","3"]
}
var s= JSON.stringify(obj)
 var r= JSON.parse(s)
console.log(r)