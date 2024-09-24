var n=3,p=1
//Incrementing
for(var i=1;i<=n;i++)
{
    p=p*2
}
console.log("Increment type")
console.log(" 2 power "+ n +" is : "+p)

//Decrementing
p=1
for(var i=n;i>=1;i--){
    p=p*2
}
console.log("Decrement type")
console.log(" 2 power "+ n +" is : "+p)

//while
var i=1
p=1
while(i<=n){
    p=p*2
    i++
}
console.log("while loop")
console.log(" 2 power "+ n +" is : "+p)