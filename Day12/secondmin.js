//second minimum of an array
var a=[5,1,2,6,8,7]
min1=a[0]
min2=Infinity
for(var i=0;i<a.length;i++)
{
    if(a[i]<min1)
    {
        min2=min1
        min1=a[i]
    }
    if(a[i]>min1&&a[i]<min2)
    {
        min2=a[i]
    }
}
console.log("second minimum in a array is "+min2)