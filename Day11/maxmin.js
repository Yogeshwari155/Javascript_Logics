//Maximum and Minimum in an array

var a=[5,1,2,6,8]
var min=a[0] ,n=a.length ,max=a[n-1]
for(var i=1;i<n;i++)
{
    if(a[i]>max&&max>=min)
        max=a[i]
    if(a[i]<min&&min<=max)
        min=a[i]
}
console.log("Maximum of an "+a+" is : "+max)
console.log("Minimum of an "+a+" is : "+min)