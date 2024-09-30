//third maximum of an array without sorting
var a=[5,1,6,8,7]
var max1=a[0], min1=a[0]
var max2=-Infinity ,max3=-Infinity
 var min2=Infinity, min3=Infinity
for(var i=0;i<a.length;i++)
{
    if(a[i]>max1)
    {
        max3=max2
        max2=max1
        max1=a[i]
    }
    else if(a[i]<max1&&a[i]>max2)
    {
        max3=max2
        max2=a[i]
    }
    else if(a[i]<max2&&a[i]>max3){
        max3=a[i]
    }
    if(a[i]<min1)
    {
        min3=min2
        min2=min1
        min1=a[i]
    }
    else if(a[i]>min1&&a[i]<min2)
    {
        min3=min2
        min2=a[i]
    }
    else if(a[i]>min2&&a[i]<min3)
    {
        min3=a[i]
    }
}
console.log("Third maximium is "+max3)
console.log("Third minimum is "+min3)