//fibonacci series
// 0 1 1 2 3 5 8 .....
var n=10
var a=-1,b=1,c;
for(var i=1;i<=n;i++)
{
    c=a+b
    process.stdout.write(c+" ");
    a=b
    b=c
}