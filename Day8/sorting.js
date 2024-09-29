//Descending order
var a=[6,4,7,2,5]
for(var i=1;i<a.length;i++)
    for(var j=0;j<i;j++)
        if(a[j]<a[i])
        {
            var c=a[j]
            a[j]=a[i]
            a[i]=c
        }
console.log(a)