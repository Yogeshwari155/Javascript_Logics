var n=1000000007,flag=1
if(n==2||n==3||n==5||n==7)
    console.log(n+" is prime")
else if(n==1||n%2==0||n%3==0||n%5==0||n%7==0)
    console.log(n+" is not prime")
else
{
    for(var i=12;i*i<=n;i+=6)
        if(n%(i+1)==0||n%(i-1)==0){
            flag=0;
            break;
        }
    if(flag==0)
        console.log(n+" is not prime")
    else
        console.log(n+" is prime")
}

     