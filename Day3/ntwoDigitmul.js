var n=1576
var r,p=1
while(n!=0){
    r=n%100
    p=p*r
    n=Math.floor(n/100)
}
console.log("Mul of n two digits is : "+p)