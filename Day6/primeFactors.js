var n=5
if(n%2==0)
    console.log(2)
else{
    if(isPrime(n)==1)
        console.log(n)
}
for(var i=3;i<=n/2;i+=2)
{
    if(n%i==0)
        if(isPrime(i)==1)
            console.log(i)
}
function isPrime(n)
{
    var flag=0
    if(n%2==0||n%3==0||n%5==0||n%7==0){
        flag=1;
    return flag;}
    for(var j=12;j*j<=i;j+=6){
        if(n%(j+1)==0 && n%(j-1)==0)
            flag=1;
        break;
    }
    return flag;
    
    }

        
    
