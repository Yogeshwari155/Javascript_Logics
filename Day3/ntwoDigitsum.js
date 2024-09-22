var n=1576
var r,s=0
while(n!=0){
    r=n%100
    s=s+r
    n=Math.floor(n/100)
}
console.log("Sum of n two digits is : "+s)