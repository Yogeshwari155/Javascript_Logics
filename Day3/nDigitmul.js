var n=1576
var r,p=1
while(n!=0){
    r=n%10
    p=p*r
    n=Math.floor(n/10)
}
console.log("Mul of n digits is : "+p)