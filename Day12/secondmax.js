//second maximum of an array
var a=[5,1,2,6,8,7]
max1=a[0]
max2=-Infinity
for(var i=0;i<a.length;i++)
{
    if(a[i]>max1)
    {
        max2=max1
        max1=a[i]
    }
    if(a[i]<max1&&a[i]>max2)
    {
        max2=a[i]
    }
}
console.log("second maximum in a array is "+max2)