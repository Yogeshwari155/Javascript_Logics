// Maximum without sorting

var a=[2,5,1,3,8,9]
var max=a[0],n=a.length
for(var i=0;i<n;i++)
{
    if(a[i]>max)
        max=a[i]

}
console.log("Maximum of an  "+a+" is " +max)