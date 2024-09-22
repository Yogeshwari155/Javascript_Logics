var n=1576
var r,s=0
while(n!=0){
    r=n%10
    s=s+r
    n=Math.floor(n/10)
}
console.log("Sum of n digits is : "+s)